import Footer from "@/components/shared/Footer";
import Navbar from "../../components/shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className=" min-h-screen">
        <Navbar />
        <div className=" mt-[32px] md:mt-[15px] lg:mt-[12px] xl:mt-[83px]">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default CommonLayout;
