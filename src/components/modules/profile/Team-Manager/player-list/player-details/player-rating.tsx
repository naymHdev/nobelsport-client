import { Card } from "@/components/ui/card";
import NSButton from "@/components/ui/core/NSButton";

const PlayerRating = () => {
  return (
    <>
      <Card className=" border-none shadow-none p-6">
        <h2 className=" text-2xl font-bold text-ns-title mt-3">
          Player Rating
        </h2>
        <p className=" text-ns-foreground font-semibold text-sm">
          Your current plan is free,Upgrade to enable this feature
        </p>
        <div className=" mt-4">
          <NSButton className=" bg-ns-secondary text-white rounded-xl px-4 py-3">
            Upgrade Now
          </NSButton>
        </div>
      </Card>
    </>
  );
};

export default PlayerRating;
