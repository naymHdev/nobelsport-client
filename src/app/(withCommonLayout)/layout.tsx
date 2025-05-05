import Navbar from "../../components/shared/Navbar";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className=" min-h-screen">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default CommonLayout;
