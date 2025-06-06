"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NSButton from "@/components/ui/core/NSButton";
import VenueAnalytics from "../buisness-account/venue-analytics";

const VenueStats = () => {
  return (
    <>
      <div>
        <Card className=" border-none shadow-none font-openSans">
          <CardHeader>
            <CardTitle className=" text-xl text-ns-title font-semibold">
              Venue Analytics
            </CardTitle>
          </CardHeader>
          {/* <CardContent>
            <h3 className=" text-ns-title text-2xl mb-1">Venue Stats</h3>
            <p className=" text-sm text-ns-foreground leading-6 mb-4">
              Your current plan is free,Upgrade to enable this feature
            </p>

            <NSButton className=" bg-ns-secondary rounded-lg py-3 px-4 text-white">
              Upgrade Now{" "}
            </NSButton>
          </CardContent> */}
          <VenueAnalytics />
        </Card>
      </div>
    </>
  );
};

export default VenueStats;
