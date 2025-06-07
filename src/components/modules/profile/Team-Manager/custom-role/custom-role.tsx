"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NSButton from "@/components/ui/core/NSButton";

const CustomRole = () => {
  return (
    <>
      <div className=" font-openSans">
        <Card className=" border-none shadow-none">
          <CardHeader>
            <CardTitle className=" text-ns-title text-xl font-semibold">
              Custom Role
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className=" text-2xl font-bold text-ns-title mt-3">Custom Role</h2>
            <p className=" text-ns-foreground font-semibold text-sm">
              Your current plan is free,Upgrade to enable this feature
            </p>
            <div className=" mt-4">
              <NSButton className=" bg-ns-secondary text-white rounded-xl px-4 py-3">
                Upgrade Now
              </NSButton>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CustomRole;
