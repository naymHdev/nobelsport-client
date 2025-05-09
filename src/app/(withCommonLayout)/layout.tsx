import Footer from "@/components/shared/Footer";
import Navbar from "../../components/shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className=" min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default CommonLayout;
