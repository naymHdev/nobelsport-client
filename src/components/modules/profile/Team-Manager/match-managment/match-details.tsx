"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import NSButton from "@/components/ui/core/NSButton";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import clubLogo from "@/assets/images/Dragons FC logo.png";
import Link from "next/link";

export function ManagementMatchDetails() {
  const router = useRouter();

  return (
    <>
      <Card className=" border-none shadow-none bg-white/70 font-openSans">
        <CardHeader className=" flex gap-3">
          <Button
            size="icon"
            onClick={() => router.back()}
            className="mr-2 rounded-full bg-[#F8F8F8CC] text-ns-title hover:bg-[#ddd9d9cc] hover:cursor-pointer"
          >
            <ArrowLeft className=" size-6" />
          </Button>
          <h1 className="text-2xl font-bold">Match Details</h1>
        </CardHeader>

        {/* ----------- Content goes here ----------- */}
        <CardContent className=" bg-white/80 m-6 py-6 rounded-lg">
          <div className=" flex items-center justify-between">
            <h1 className=" text-xl md:text-3xl font-semibold md:font-bold text-ns-title leading-8">
              Dragons FC vs Phoenix United
            </h1>
            <NSButton className=" text-orange-400 bg-orange-100">
              Scheduled
            </NSButton>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 mt-6">
            <div className=" flex items-center gap-3 font-openSans">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="26"
                  viewBox="0 0 24 26"
                  fill="none"
                >
                  <path
                    d="M16.5625 0.500002C17.093 0.498975 17.5124 0.911362 17.5137 1.46094L17.5147 2.39746C20.958 2.66733 23.2326 5.01411 23.2363 8.61231L23.25 19.1445C23.2549 23.0675 20.7903 25.481 16.8399 25.4873L7.18946 25.5C3.26389 25.5048 0.768688 23.0337 0.76368 19.0996L0.750008 8.69043C0.745263 5.06876 2.93966 2.72917 6.38282 2.41309L6.38184 1.47559C6.3807 0.926114 6.78735 0.51294 7.33009 0.512697C7.87312 0.511448 8.281 0.92391 8.28223 1.47363L8.28321 2.34766L15.6143 2.33789L15.6133 1.46289C15.6122 0.913359 16.0196 0.501251 16.5625 0.500002ZM17.0537 18.2402C16.486 18.254 16.0306 18.73 16.043 19.3047C16.0444 19.8792 16.5017 20.3527 17.0693 20.3652C17.6481 20.364 18.1173 19.8879 18.1162 19.3008C18.1162 18.7136 17.6455 18.2402 17.0654 18.2402H17.0537ZM6.89649 18.2412C6.32892 18.2662 5.88474 18.7419 5.88575 19.3164C5.91167 19.8911 6.38054 20.3417 6.94825 20.3154C7.50473 20.2903 7.9478 19.8139 7.92188 19.2393C7.90949 18.6772 7.45167 18.2401 6.89649 18.2412ZM11.9805 18.2354C11.4131 18.2618 10.9699 18.7361 10.9697 19.3105C10.9958 19.8851 11.4656 20.3346 12.0332 20.3096C12.5882 20.2831 13.0324 19.808 13.0068 19.2324C12.9945 18.6715 12.5358 18.2341 11.9805 18.2354ZM6.88966 13.7432C6.3221 13.7683 5.87964 14.2447 5.88087 14.8193C5.90569 15.3939 6.37574 15.8436 6.94337 15.8174C7.4984 15.7922 7.94161 15.3165 7.91602 14.7422C7.90368 14.18 7.44626 13.7419 6.88966 13.7432ZM11.9756 13.7002C11.4081 13.7254 10.9637 14.2009 10.9649 14.7754C10.9897 15.3498 11.4599 15.7982 12.0274 15.7734C12.5826 15.7472 13.0264 15.2728 13.002 14.6982C12.9884 14.136 12.531 13.699 11.9756 13.7002ZM17.0606 13.7061C16.4929 13.7186 16.0486 14.1812 16.0498 14.7559V14.7695C16.0624 15.344 16.5318 15.7801 17.1006 15.7676C17.6557 15.7536 18.0981 15.2776 18.0859 14.7031C18.06 14.1534 17.6147 13.7048 17.0606 13.7061ZM8.28614 4.27246L8.28712 5.28321C8.28682 5.8214 7.88072 6.24609 7.3379 6.2461C6.795 6.2473 6.38686 5.82348 6.38673 5.28516L6.38477 4.32324C3.97849 4.56449 2.64676 5.97888 2.6504 8.68848L2.65235 9.07715L21.3369 9.05176V8.61524C21.2839 5.92919 19.9364 4.51955 17.5176 4.30957L17.5186 5.27149C17.5184 5.80859 17.0999 6.23534 16.5693 6.23535C16.0266 6.23652 15.6185 5.81133 15.6182 5.27442L15.6172 4.26172L8.28614 4.27246Z"
                    fill="#1B5FEE"
                  />
                </svg>
              </div>
              <div className=" flex flex-col gap-1 text-start">
                <p className=" text-sm text-ns-foreground">Date & Time</p>
                <p className=" text-ns-title font-semibold">
                  March 15, 2025, 3:00 PM
                </p>
              </div>
            </div>
            <div className=" flex items-center gap-3 font-openSans">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="26"
                  viewBox="0 0 22 26"
                  fill="none"
                >
                  <path
                    d="M11 13.3125C12.5533 13.3125 13.8125 12.0533 13.8125 10.5C13.8125 8.9467 12.5533 7.6875 11 7.6875C9.4467 7.6875 8.1875 8.9467 8.1875 10.5C8.1875 12.0533 9.4467 13.3125 11 13.3125Z"
                    fill="#1B5FEE"
                  />
                  <path
                    d="M20.1013 5.925C18.9138 3.6625 16.9138 2.025 14.4638 1.3375C12.7388 0.85 11.3763 0.8125 11.0013 0.8125C9.87633 0.8125 8.76383 0.9625 7.68883 1.2625C5.25133 1.9375 3.22633 3.575 1.98883 5.9C0.70133 8.3125 0.46383 11.1625 1.36383 13.85C2.66383 17.675 4.85133 21.075 7.87633 23.9375C8.75133 24.775 9.87633 25.1875 11.0013 25.1875C12.1263 25.1875 13.2513 24.775 14.1263 23.9375C17.1513 21.0625 19.3388 17.675 20.6638 13.775C21.5513 11.1625 21.3388 8.3125 20.1013 5.9375V5.925ZM11.0013 15.1875C8.41383 15.1875 6.31383 13.0875 6.31383 10.5C6.31383 7.9125 8.41383 5.8125 11.0013 5.8125C13.5888 5.8125 15.6888 7.9125 15.6888 10.5C15.6888 13.0875 13.5888 15.1875 11.0013 15.1875Z"
                    fill="#1B5FEE"
                  />
                </svg>
              </div>
              <div className=" flex flex-col gap-1 text-start">
                <p className=" text-sm text-ns-foreground">Venue</p>
                <p className=" text-ns-title font-semibold">
                  Central Sports Complex
                </p>
              </div>
            </div>
            <div className=" flex items-center gap-3 font-openSans">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M5.5569 15.4313C3.9694 14.5938 1.07565 12.2563 0.875655 6.23125C0.869629 6.024 0.905245 5.81765 0.980393 5.62441C1.05554 5.43117 1.16869 5.25498 1.31315 5.10625C1.4598 4.95426 1.63552 4.83332 1.82987 4.75064C2.02421 4.66797 2.2332 4.62524 2.4444 4.625H4.00065V6.5H2.76315C2.79633 8.26447 3.26662 9.99316 4.1319 11.5312C4.34758 12.9119 4.8317 14.2368 5.5569 15.4313ZM27.1257 6.23125C26.9257 12.2563 24.0319 14.5938 22.4444 15.4313C23.1696 14.2368 23.6537 12.9119 23.8694 11.5312C24.7347 9.99316 25.205 8.26447 25.2382 6.5H24.0007V4.625H25.5569C25.7681 4.62524 25.9771 4.66797 26.1714 4.75064C26.3658 4.83332 26.5415 4.95426 26.6882 5.10625C26.8326 5.25498 26.9458 5.43117 27.0209 5.62441C27.0961 5.81765 27.1317 6.024 27.1257 6.23125ZM19.6257 23.375H18.3757C17.8784 23.375 17.4015 23.1775 17.0498 22.8258C16.6982 22.4742 16.5007 21.9973 16.5007 21.5V20.5694C14.8777 21.1094 13.1236 21.1094 11.5007 20.5694V21.5C11.5007 21.9973 11.3031 22.4742 10.9515 22.8258C10.5998 23.1775 10.1229 23.375 9.62565 23.375H8.37565C7.963 23.375 7.55443 23.4567 7.17353 23.6154C6.79262 23.7741 6.44693 24.0067 6.15639 24.2998C5.86585 24.5928 5.63623 24.9405 5.48077 25.3227C5.32532 25.705 5.24711 26.1142 5.25065 26.5269C5.25588 26.6885 5.32424 26.8417 5.44108 26.9535C5.55793 27.0653 5.71394 27.1269 5.87565 27.125H22.1257C22.2874 27.1269 22.4434 27.0653 22.5602 26.9535C22.6771 26.8417 22.7454 26.6885 22.7507 26.5269C22.7542 26.1142 22.676 25.705 22.5205 25.3227C22.3651 24.9405 22.1355 24.5928 21.8449 24.2998C21.5544 24.0067 21.2087 23.7741 20.8278 23.6154C20.4469 23.4567 20.0383 23.375 19.6257 23.375ZM20.8757 0.875H7.12565C6.62837 0.875 6.15146 1.07254 5.79983 1.42417C5.4482 1.77581 5.25065 2.25272 5.25065 2.75V9.8825C5.25065 13.0263 6.80503 15.9169 9.74628 18.2406C10.9562 19.2014 12.4557 19.7244 14.0007 19.7244C15.5456 19.7244 17.0451 19.2014 18.255 18.2406C21.1963 15.9169 22.7507 13.0263 22.7507 9.8825V2.75C22.7507 2.25272 22.5531 1.77581 22.2015 1.42417C21.8498 1.07254 21.3729 0.875 20.8757 0.875ZM17.1944 9.4L16.3863 10.4506C16.2987 10.5645 16.253 10.7051 16.2569 10.8488L16.2932 12.1744C16.2959 12.2759 16.2739 12.3765 16.229 12.4675C16.1841 12.5586 16.1177 12.6374 16.0355 12.697C15.9534 12.7566 15.8579 12.7954 15.7574 12.8098C15.6569 12.8243 15.5544 12.814 15.4588 12.78L14.2088 12.3362C14.0733 12.2881 13.9255 12.2881 13.79 12.3362L12.54 12.78C12.4444 12.814 12.3419 12.8243 12.2414 12.8098C12.1409 12.7954 12.0455 12.7566 11.9633 12.697C11.8811 12.6374 11.8147 12.5586 11.7698 12.4675C11.725 12.3765 11.7029 12.2759 11.7057 12.1744L11.7419 10.8488C11.7458 10.7051 11.7001 10.5645 11.6125 10.4506L10.8069 9.4C10.745 9.31956 10.7036 9.22525 10.6863 9.12522C10.669 9.02519 10.6763 8.92245 10.7077 8.82589C10.739 8.72933 10.7934 8.64185 10.8661 8.57102C10.9388 8.50019 11.0277 8.44814 11.125 8.41937L12.3969 8.04437C12.5348 8.00369 12.6544 7.91672 12.7357 7.79812L13.4857 6.705C13.5431 6.62121 13.62 6.55267 13.7098 6.50532C13.7997 6.45796 13.8997 6.43321 14.0013 6.43321C14.1028 6.43321 14.2029 6.45796 14.2927 6.50532C14.3826 6.55267 14.4595 6.62121 14.5169 6.705L15.2669 7.79812C15.3481 7.91672 15.4678 8.00369 15.6057 8.04437L16.8775 8.41937C16.9748 8.44829 17.0635 8.50045 17.1361 8.57134C17.2087 8.64224 17.2629 8.72973 17.2941 8.82627C17.3253 8.92281 17.3325 9.0255 17.3152 9.12546C17.2978 9.22542 17.2563 9.31964 17.1944 9.4Z"
                    fill="#1B5FEE"
                  />
                </svg>
              </div>
              <div className=" flex flex-col gap-1 text-start">
                <p className=" text-sm text-ns-foreground">Match Type</p>
                <p className=" text-ns-title font-semibold">Upcoming Match</p>
              </div>
            </div>
          </div>

          <section className="mt-6 flex flex-col md:flex-row gap-2">
            <div className=" bg-white p-6 rounded-lg flex-1">
              <h2 className=" text-xl md:text-3xl font-semibold md:font-bold text-ns-title leading-8">
                Dragons FC
              </h2>
              <div className="mt-4 flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
                <Image
                  src={clubLogo}
                  alt=""
                  width={100}
                  height={100}
                  className=" w-14 h-14 object-cover rounded-lg"
                />
                <div>
                  <h3 className=" text-ns-title font-semibold">
                    Dragons FC Lineup
                  </h3>
                  <p className=" text-ns-foreground text-sm mt-0.5">
                    3 Member Remaining
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-white p-6 rounded-lg flex-1">
              <h2 className=" text-xl md:text-3xl font-semibold md:font-bold text-ns-title leading-8">
                Dragons FC
              </h2>
              <div className="mt-4 flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
                <Image
                  src={clubLogo}
                  alt=""
                  width={100}
                  height={100}
                  className=" w-14 h-14 object-cover rounded-lg"
                />
                <div>
                  <h3 className=" text-ns-title font-semibold">
                    Dragons FC Lineup
                  </h3>
                  <p className=" text-ns-foreground">3 Member Remaining</p>
                </div>
              </div>
            </div>
          </section>
        </CardContent>

        {/* ------------------ Buttons ---------------- */}
        <section className="flex items-center justify-between gap-6 px-6">
          <Link href="/venue/1" className="w-full">
            <NSButton className="w-full bg-ns-primary text-white uppercase font-bold rounded-lg py-4">
              Book Venue
            </NSButton>
          </Link>
          <Link href="/profile/match-management/team-details" className="w-full">
            <NSButton className="w-full bg-orange-400 text-white uppercase font-bold rounded-lg py-4">
              Team Line up
            </NSButton>
          </Link>
        </section>
      </Card>
    </>
  );
}
