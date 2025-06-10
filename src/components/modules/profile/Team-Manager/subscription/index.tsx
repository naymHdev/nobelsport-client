"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import NSButton from "@/components/ui/core/NSButton";

const TeamManagerSubscription = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      features: [
        "Unlimited players and matches",
        "Basic team management",
        "Simple communication tool",
        "Standard game scheduling",
        "Basic player stats",
        "One-click social media sharing",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Premium Tier",
      price: "$6.99",
      period: "/month",
      features: [
        "Everything in Free tier plus",
        "Player ratings system",
        "Team balance visualization tools",
        "Match templates and recurring games",
        "Enhanced communication with RSVPs and polls",
        "Priority venue booking",
        "Custom team branding on social shares",
      ],
      buttonText: "Subscribe Now",
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      name: "Pro Tier",
      price: "$14.99",
      period: "/month",
      features: [
        "Everything in Premium tier plus",
        "Advanced stats and performance tracking",
        "Financial management",
        "Custom roles and permissions",
        "Advanced analytics dashboard",
        "Multi-platform social integration",
        "Series/season management",
      ],
      buttonText: "Go Pro",
      buttonVariant: "outline" as const,
      popular: false,
    },
  ];

  return (
    <div className="w-full font-openSans">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`relative border-none shadow-none ${
              plan.popular ? "border-blue-500 shadow-lg" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white px-3 py-1 text-xs font-medium">
                  POPULAR
                </Badge>
              </div>
            )}
            <CardHeader className="text-center pb-4">
              <h3 className=" text-2xl font-bold text-ns-title">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-500 ml-1">{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <NSButton
                  className={`w-full rounded-lg py-3 ${
                    index == 0 && " bg-ns-light text-ns-title"
                  } ${
                    plan.popular
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : ""
                  } ${index == 2 && " text-ns-light bg-ns-title"}`}
                >
                  {plan.buttonText}
                </NSButton>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamManagerSubscription;
