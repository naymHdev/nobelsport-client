import { useRouter } from "next/navigation";
import { Button } from "../button";
import { GoArrowLeft } from "react-icons/go";

const NSBackButton = ({ label }: { label: string }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center gap-3">
        <Button
          className=" rounded-full bg-ns-light text-ns-title hover:bg-ns-light/80 hover:cursor-pointer"
          size="icon"
          onClick={() => router.back()}
        >
          <GoArrowLeft className=" size-6" />
        </Button>
        <h1 className="text-xl font-semibold">{label}</h1>
      </div>
    </>
  );
};

export default NSBackButton;
