"use client";

import { TMatch } from "@/types/match";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import payIcon from "@/assets/icons/payment-icon.png";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import visa from "@/assets/icons/visa-card.png";
import master from "@/assets/icons/master-card.png";
import card from "@/assets/icons/duel-card.png";
import paypalIcon from "@/assets/icons/paypal.png";

const creditCardIcons = [visa, master, card];

const MatchPaymentForm = ({ matchDetails }: { matchDetails: TMatch }) => {
  const { match_venue, match_title, match_fee, match_play_time } =
    matchDetails || {};

  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Payment submitted:", {
      paymentMethod,
      cardNumber,
      expiryDate,
      cvv,
      nameOnCard,
    });
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\D/g, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }
    return v;
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    setExpiryDate(formatted);
  };

  const totalPay = match_fee;

  return (
    <>
      <div className=" font-openSans">
        <form onSubmit={handleSubmit}>
          <Card className=" border-none shadow-none">
            <CardHeader className=" border-b">
              <h2 className=" text-2xl font-semibold text-ns-title mb-3">
                Join Match - Payment Required
              </h2>
              <p className=" text-ns-foreground">
                To confirm your participation in this match, please complete the
                payment below.
              </p>
            </CardHeader>
            {/* --------------- Match Information --------------- */}
            <section className=" mt-8 px-3 md:px-6">
              <h2 className=" text-ns-title font-bold text-lg mb-4">
                Match Information
              </h2>
              <div className=" flex flex-col md:flex-row gap-4 md:gap-40">
                <div className=" space-y-3">
                  <div className=" flex items-center gap-2">
                    <IoIosFootball className=" size-5 text-ns-secondary" />
                    <p className=" text-ns-title">Football</p>
                  </div>
                  <div className=" flex items-center gap-2">
                    <FaClock className=" size-4 text-ns-secondary" />
                    {match_play_time?.split(",")?.pop()?.trim()}
                  </div>
                  <div className=" flex items-center gap-2">
                    <Image
                      src={payIcon}
                      alt="Payment Icon"
                      className=" size-5"
                      width={50}
                      height={50}
                    />
                    <p className=" text-ns-title">Venue fee ${match_fee}</p>
                  </div>
                </div>
                <div className=" space-y-3">
                  <div className=" flex items-center gap-2">
                    <FaCalendarAlt className=" size-4 text-ns-secondary" />
                    <p className=" text-ns-title">{match_play_time}</p>
                  </div>
                  <div className=" flex items-center gap-2">
                    <FaLocationDot className=" size-4 text-ns-secondary" />
                    <p className=" text-ns-title">{match_venue}</p>
                  </div>
                  <div className=" flex items-center gap-2">
                    <MdGroups className=" size-6 text-ns-secondary" />
                    <p className=" text-ns-title">{match_title}</p>
                  </div>
                </div>
              </div>

              {/* --------------- Payment Summary --------------- */}
              <div className="bg-[#E5E7EB] p-3 md:p-6 m-3 md:m-6 rounded-xl mt-8">
                <h3 className=" text-lg text-ns-title">Payment Summary</h3>
                <div className=" mt-4 flex items-center justify-between text-ns-foreground">
                  <p>Match Fee</p>
                  <p>${match_fee}</p>
                </div>{" "}
                <Separator className=" bg-gray-300 my-3" />
                <div className="flex items-center justify-between text-ns-foreground">
                  <p>Total</p>
                  <p>${match_fee}</p>
                </div>
              </div>
            </section>
          </Card>

          {/* --------------- Payment Form --------------- */}
          {/* Payment Method */}
          <Card className=" mt-8 shadow-none border-none">
            <CardHeader>
              <CardTitle className=" text-ns-title font-bold text-lg -mb-2">
                Select Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="space-y-4"
              >
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="font-medium">
                      Credit Card
                    </Label>
                  </div>
                  <div className="flex gap-2">
                    {creditCardIcons.map((icon, index) => (
                      <Image
                        key={index}
                        src={icon}
                        alt="Payment Icon"
                        className=" w-8 h-8 object-cover"
                        width={80}
                        height={80}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="font-medium">
                      PayPal
                    </Label>
                  </div>
                  <div className="text-blue-600 font-bold text-sm">
                    <Image
                      src={paypalIcon}
                      alt="Payment Icon"
                      className=" w-8 h-8 object-cover"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Card Details */}
          {paymentMethod === "credit-card" && (
            <Card className=" mt-8 shadow-none border-none">
              <CardHeader>
                <CardTitle className=" text-ns-title font-bold text-lg -mb-2">
                  Card Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label
                    htmlFor="card-number"
                    className="text-sm font-medium text-gray-700"
                  >
                    Card Number
                  </Label>
                  <Input
                    id="card-number"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength={19}
                    className="mt-1 px-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="expiry"
                      className="text-sm font-medium text-gray-700"
                    >
                      Expiry Date
                    </Label>
                    <Input
                      id="expiry"
                      type="text"
                      placeholder="MM/YY"
                      value={expiryDate}
                      onChange={handleExpiryChange}
                      maxLength={5}
                      className="mt-1 px-2"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="cvv"
                      className="text-sm font-medium text-gray-700"
                    >
                      CVV
                    </Label>
                    <Input
                      id="cvv"
                      type="text"
                      placeholder="123"
                      value={cvv}
                      onChange={(e) =>
                        setCvv(
                          e.target.value.replace(/\D/g, "").substring(0, 4)
                        )
                      }
                      maxLength={4}
                      className="mt-1 px-2"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="name-on-card"
                    className="text-sm font-medium text-gray-700"
                  >
                    Name on Card
                  </Label>
                  <Input
                    id="name-on-card"
                    type="text"
                    placeholder="John Doe"
                    value={nameOnCard}
                    onChange={(e) => setNameOnCard(e.target.value)}
                    className="mt-1 px-2"
                  />
                </div>
              </CardContent>
            </Card>
          )}
          <Button className="mt-8 bg-ns-secondary w-full text-center text-white py-6 font-semibold">
            Pay ${totalPay}
          </Button>
        </form>
      </div>
    </>
  );
};

export default MatchPaymentForm;
