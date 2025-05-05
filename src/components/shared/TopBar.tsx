import NSContainer from "../ui/core/NSContainer";
import { LocateFixed, Mail, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <>
      <div className="bg-[#111827] py-6 w-full text-white/70">
        <NSContainer>
          <div className=" flex items-center justify-between text-sm font-normal">
            <div>
              <h3 className=" font-medium">Welcome to Nobelsport</h3>
            </div>
            <div className=" flex items-center justify-between gap-4">
              <div className=" flex items-center gap-2">
                <LocateFixed />
                <p>4200 Hamill Avenue, San Diego, California 92109</p>
              </div>
              <div className=" flex items-center gap-2">
                <Mail />
                <p>support@chickenbaseball.com</p>
              </div>
              <div className=" flex items-center gap-2">
                <Phone />
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
