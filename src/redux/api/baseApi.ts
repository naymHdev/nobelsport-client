import { config } from "@/utils/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const baseQuery = fetchBaseQuery({
  baseUrl: config.clientBaseApi,
  // credentials: "include",
  prepareHeaders: (headers) => {
    const accessToken = cookies.get("accessToken");
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    const token = cookies.get("token");
    if (token) {
      headers.set("token", token);
    }

    return headers;
  },
});

// Refresh the base----------------------------------------------------------------
const baseQueryWithReauth: typeof baseQuery = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const refreshToken = cookies.get("refreshToken");

    if (refreshToken) {
      const refreshResult = (await baseQuery(
        {
          url: "/auth/refresh-token",
          method: "POST",
          headers: {
            token: refreshToken,
          },
          body: { refreshToken: refreshToken },
        },
        api,
        extraOptions
      )) as { data: { data: { accessToken: string } } };

      // Check if refreshResult contains data and accessToken
      if (refreshResult?.data && refreshResult?.data?.data?.accessToken) {
        const newAccessToken = refreshResult?.data?.data?.accessToken;

        // Save the new token
        cookies.set("accessToken", newAccessToken, {
          httpOnly: false,
          maxAge: 14 * 24 * 60 * 60, // 14 days
          path: "/",
          sameSite: "lax",
          secure: config.hasSSL,
        });

        // Retry the original request with the new token
        api.dispatch({
          type: "auth/tokenRefreshed",
          payload: newAccessToken,
        });
        result = await baseQuery(args, api, extraOptions);
      } else {
        // Logout user if refresh token fails
        api.dispatch({ type: "auth/logout" });
      }
    } else {
      api.dispatch({ type: "auth/logout" });
      // api.dispatch(removeUser());
    }
  }

  return result;
};

const baseApi = createApi({
  reducerPath: "api",
  tagTypes: ["user", "venueOwner", "teamManager"],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    admin_support: builder.mutation<
      { message: string },
      {
        firstName: string;
        lastName?: string;
        email: string;
        message: string;
        subject?: string;
      }
    >({
      query: (data) => ({
        url: "/settings/send-email",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAdmin_supportMutation } = baseApi;
export default baseApi;
