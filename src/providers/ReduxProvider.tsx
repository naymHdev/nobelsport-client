"use client";
import { Provider } from "react-redux";
import { makeStore as appStore, Persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={Persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
