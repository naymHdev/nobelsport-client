"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import OrderList from "./order-list";
import TransactionList from "./transaction-list";

const TeamManagerPaymentList = () => {
  const [activeTab, setActiveTab] = useState<"orders" | "transactions">(
    "orders"
  );

  return (
    <div className="w-full bg-white rounded-lg p-6">
      <Tabs
        value={activeTab}
        onValueChange={(val) => setActiveTab(val as "orders" | "transactions")}
      >
        <TabsList className="flex space-x-6 bg-transparent">
          <TabsTrigger
            className=" font-semibold px-4 py-2 text-gray-700 data-[state=active]:border-b data-[state=active]:border-b-ns-title data-[state=active]:font-semibold focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors"
            value="orders"
          >
            Order List
          </TabsTrigger>
          <TabsTrigger
            className=" font-semibold px-4 py-2 text-gray-700 data-[state=active]:border-b data-[state=active]:border-b-ns-title data-[state=active]:font-semibold focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors"
            value="transactions"
          >
            Transaction List
          </TabsTrigger>
        </TabsList>

        <TabsContent value="orders">
          <OrderList />
        </TabsContent>

        <TabsContent value="transactions">
          <TransactionList />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TeamManagerPaymentList;
