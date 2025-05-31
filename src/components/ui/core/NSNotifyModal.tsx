import NSButton from "@/components/ui/core/NSButton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MdArrowForwardIos } from "react-icons/md";
import { ReactNode } from "react";

type NSNotifyModalProps = {
  children: ReactNode;
  title?: string;
  buttonText?: string;
  onAction?: () => void;
  className?: string;
};

const NSNotifyModal = ({
  children,
  title = "To write a review, please log in to your account.",
  buttonText = "Log In to Your Account",
  className = "",
  onAction,
}: NSNotifyModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="py-12 w-full max-w-md">
        <div className="flex flex-col items-center justify-center gap-9">
          <h4 className="text-ns-foreground text-[32px] font-openSans text-center">
            {title}
          </h4>
          <NSButton
            onClick={onAction}
            className={`flex items-center gap-2 rounded-md py-3 px-6 font-bold font-openSans uppercase ${className}`}
          >
            {buttonText} <MdArrowForwardIos />
          </NSButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NSNotifyModal;
