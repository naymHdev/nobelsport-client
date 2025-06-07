"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import NSButton from "@/components/ui/core/NSButton";

export default function SupportMessageForm() {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Support message submitted:", { subject, description });

    // Reset form
    setSubject("");
    setDescription("");
    setIsSubmitting(false);

    alert("Support message submitted successfully!");
  };

  return (
    <div className="">
      <div className="w-full bg-white rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-ns-title mb-8">
          Support Message
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label
              htmlFor="subject"
              className="text-base font-medium text-gray-900"
            >
              Subject
            </Label>
            <Input
              id="subject"
              type="text"
              placeholder="Enter"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full h-12 px-4 border border-gray-200 rounded-md focus:ring-0 focus-visible:ring-0 focus:border-transparent focus-visible:border-gray-300"
              required
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="description"
              className="text-base font-medium text-gray-900"
            >
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Write"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full min-h-32 px-4 py-3 border border-gray-200 rounded-md focus:ring-0 focus-visible:ring-0 focus:border-transparent focus-visible:border-gray-300 resize-none"
              required
            />
          </div>

          <NSButton
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </NSButton>
        </form>
      </div>
    </div>
  );
}
