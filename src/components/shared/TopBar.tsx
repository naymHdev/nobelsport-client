import NSContainer from "../ui/core/NSContainer"
import { LocateFixed } from "lucide-react"
import { MdCall, MdEmail } from "react-icons/md"

const TopBar = () => {
  return (
    <div className="bg-[#111827] w-full text-white/70">
      <NSContainer>
        <div className="flex h-[52px] items-center justify-between text-sm font-normal">
          {/* Welcome message - hidden on mobile */}
          <div className="hidden md:block">
            <h3 className="font-medium">Welcome to Nobelsport</h3>
          </div>

          {/* Contact info - responsive layout */}
          <div className="flex items-center justify-end gap-2 md:gap-4 ml-auto md:ml-0">
            {/* Address - hidden on mobile and tablet */}
            <div className="hidden lg:flex items-center gap-2">
              <LocateFixed size={18} className="text-white flex-shrink-0" />
              <p className="whitespace-nowrap">4200 Hamill Avenue, San Diego, California 92109</p>
            </div>

            {/* Email - hidden on mobile */}
            <div className="hidden md:flex items-center gap-2">
              <MdEmail size={18} className="text-white flex-shrink-0" />
              <p className="whitespace-nowrap">support@chickenbaseball.com</p>
            </div>

            {/* Phone - always visible but responsive */}
            <div className="flex items-center gap-2">
              <MdCall size={18} className="text-white flex-shrink-0" />
              <p className="whitespace-nowrap">(987) 654-3210</p>
            </div>
          </div>
        </div>
      </NSContainer>
    </div>
  )
}

export default TopBar
