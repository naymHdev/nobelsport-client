"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import NSButton from "@/components/ui/core/NSButton";
import { MdOutlineStarPurple500 } from "react-icons/md";
import profileAvatar from "../../../assets/images/review-vn.png";
import Image from "next/image";

interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  date: string;
  comment: string;
}

interface RatingBreakdown {
  stars: number;
  count: number;
  percentage: number;
}

interface ReviewsPageProps {
  overallRating?: number;
  totalReviews?: number;
  ratingBreakdown?: RatingBreakdown[];
  reviews?: Review[];
}

export function ReviewsPage({
  overallRating = 4.0,
  totalReviews = 551,
  ratingBreakdown = [
    { stars: 5, count: 345, percentage: 100 },
    { stars: 4, count: 125, percentage: 75 },
    { stars: 3, count: 35, percentage: 55 },
    { stars: 2, count: 32, percentage: 36 },
    { stars: 1, count: 14, percentage: 16 },
  ],
  reviews = [
    {
      id: "1",
      userName: "Kristin Watson",
      userAvatar: "/placeholder.svg?height=40&width=40&text=KW",
      rating: 4,
      date: "June 20, 2024",
      comment:
        "This photo captures the action perfectly! High-quality and the colors are amazing. Worth every penny.",
    },
    {
      id: "2",
      userName: "Kristin Watson",
      userAvatar: "/placeholder.svg?height=40&width=40&text=KW",
      rating: 4,
      date: "June 20, 2024",
      comment:
        "This photo captures the action perfectly! High-quality and the colors are amazing. Worth every penny.",
    },
    {
      id: "3",
      userName: "Ralph Edwards",
      userAvatar: "/placeholder.svg?height=40&width=40&text=RE",
      rating: 4,
      date: "June 20, 2024",
      comment:
        "This photo captures the action perfectly! High-quality and the colors are amazing. Worth every penny.",
    },
    {
      id: "4",
      userName: "Ralph Edwards",
      userAvatar: "/placeholder.svg?height=40&width=40&text=RE",
      rating: 4,
      date: "June 20, 2024",
      comment:
        "This photo captures the action perfectly! High-quality and the colors are amazing. Worth every penny.",
    },
  ],
}: ReviewsPageProps) {
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  const [newReviewRating, setNewReviewRating] = useState(0);
  const [newReviewComment, setNewReviewComment] = useState("");

  const renderStars = (rating: number, size: "sm" | "md" | "lg" = "md") => {
    const sizeClasses = {
      sm: "w-3 h-3",
      md: "w-4 h-4",
      lg: "w-5 h-5",
    };

    return (
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <MdOutlineStarPurple500
            key={i}
            className={`${sizeClasses[size]} ${
              i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  const renderInteractiveStars = (
    rating: number,
    onRatingChange: (rating: number) => void
  ) => {
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onRatingChange(i + 1)}
            className="focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
          >
            <MdOutlineStarPurple500
              className={`w-6 h-6 transition-colors ${
                i < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300 hover:text-yellow-200"
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  const handleSubmitReview = () => {
    if (newReviewRating === 0 || !newReviewComment.trim()) {
      return;
    }
    // Handle review submission here
    console.log("New review:", {
      rating: newReviewRating,
      comment: newReviewComment,
    });
    setIsWriteReviewOpen(false);
    setNewReviewRating(0);
    setNewReviewComment("");
  };

  return (
    <>
      <div className=" my-6">
        <h1 className=" text-4xl font-openSans text-ns-title">All Review</h1>
      </div>
      <div className=" bg-white rounded-xl m-8 p-6">
        <div className="flex items-end justify-end gap-4">
          <Dialog open={isWriteReviewOpen} onOpenChange={setIsWriteReviewOpen}>
            <DialogTrigger asChild>
              <NSButton className="bg-gray-800 hover:bg-gray-900 text-white self-start sm:self-auto">
                Write Review
              </NSButton>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Write a Review</DialogTitle>
                <DialogDescription>
                  Share your experience with others
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium mb-2 block">
                    Rating
                  </Label>
                  {renderInteractiveStars(newReviewRating, setNewReviewRating)}
                </div>
                <div>
                  <Label
                    htmlFor="review-comment"
                    className="text-sm font-medium mb-2 block"
                  >
                    Your Review
                  </Label>
                  <Textarea
                    id="review-comment"
                    placeholder="Tell others about your experience..."
                    value={newReviewComment}
                    onChange={(e) => setNewReviewComment(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
                <div className="flex gap-2 pt-2">
                  <Button
                    onClick={handleSubmitReview}
                    className="flex-1"
                    disabled={newReviewRating === 0 || !newReviewComment.trim()}
                  >
                    Submit Review
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsWriteReviewOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Rating Overview */}
        <Card className="mb-8 border-none shadow-none">
          <CardContent className="p-6">
            <div className=" flex flex-col lg:flex-row gap-6">
              {/* Overall Rating */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="text-4xl font-bold mb-2">{overallRating}</div>
                <div className="mb-2">{renderStars(overallRating, "lg")}</div>
                <div className="text-sm text-gray-600">
                  {totalReviews.toLocaleString()} reviews
                </div>
              </div>

              {/* Rating Breakdown */}
              <div className="space-y-3 w-full">
                {ratingBreakdown.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-ns-foreground text-sm font-bebas">
                      <span>{item.stars}</span>
                      <p>Stars</p>
                    </div>
                    <div className="flex-1">
                      <Progress
                        value={item.percentage}
                        className="h-2  bg-[#F0F0F0] [&>div]:bg-yellow-400"
                      />
                    </div>
                    <div className="text-sm text-gray-600 min-w-[40px] text-right">
                      {item.count}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Individual Reviews */}
        <div className="space-y-6 font-openSans">
          {reviews?.map((review, index) => (
            <div key={review.id}>
              <div className="space-y-2">
                {/* Review Date */}
                <div className="text-sm text-ns-foreground font-semibold">
                  {review.date}
                </div>

                {/* Rating Stars */}
                <div className=" text-lg">{renderStars(review.rating)}</div>

                {/* User Info and Comment */}
                <div className="">
                  <div className=" flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full">
                      <Image
                        src={profileAvatar}
                        alt="Profile Avatar"
                        width={100}
                        height={100}
                        className=" w-8 h-8 rounded-full object-cover"
                      />
                    </div>
                    <div className="mb-1 text-ns-title font-bold text-xl">
                      {review.userName}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 mt-2">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                </div>
              </div>
              {index < reviews.length - 1 && <Separator className="mt-6" />}
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {/* <div className="flex justify-center mt-8">
          <Button variant="outline" className="px-8">
            Load More Reviews
          </Button>
        </div> */}
      </div>
    </>
  );
}
