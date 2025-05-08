import NSContainer from "../ui/core/NSContainer";
import { LocateFixed } from "lucide-react";
import { MdCall, MdEmail } from "react-icons/md";

const TopBar = () => {
  return (
    <>
      <div className="bg-[#111827] w-full text-white/70">
        <NSContainer>
          <div className=" flex h-[52px]  items-center justify-between text-sm font-normal">
            <div>
              <h3 className=" font-medium">Welcome to Nobelsport</h3>
            </div>
            <div className=" flex items-center justify-between gap-4">
              <div className=" flex items-center gap-2">
                <LocateFixed size={18} className=" text-white" />
                <p>4200 Hamill Avenue, San Diego, California 92109</p>
              </div>
              <div className=" flex items-center gap-2">
                <MdEmail size={18} className=" text-white" />
                <p>support@chickenbaseball.com</p>
              </div>
              <div className=" flex items-center gap-2">
                <MdCall size={18} className=" text-white" />
                <p>(987) 654-3210</p>
              </div>
            </div>
          </div>

          {/* --------- Main Navbar --------- */}
        </NSContainer>
      </div>
    </>
  );
};

export default TopBar;
