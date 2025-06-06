import venue1 from "@/assets/images/venue2.png";
import venue2 from "@/assets/images/venue3.png";
import venue3 from "@/assets/images/venue4.png";
import venue4 from "@/assets/images/venue5.png";
import venue5 from "@/assets/images/venue6.png";
import { Coffee, Car, Shirt, Wifi } from "lucide-react";

export const calendarDays = [
  [28, 29, 30, 31, 1, 2, 3],
  [4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31],
  [1, 2, 3, 4, 5, 6, 7],
];

export const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const amenities = [
  { id: "changing-rooms", label: "Changing Rooms" },
  { id: "free-wifi", label: "Free Wi-Fi" },
  { id: "free-parking", label: "Free Parking" },
  { id: "vip-seating", label: "VIP seating" },
];

export const venueTypes = [
  "Sports Complex",
  "Football Field",
  "Basketball Court",
  "Tennis Court",
  "Swimming Pool",
  "Gym & Fitness",
  "Multi-purpose Hall",
  "Outdoor Recreation",
];

export const galleryImages = [
  {
    src: venue1,
    alt: "Interior dining and meeting area with modern furniture",
  },
  {
    src: venue2,
    alt: "Indoor football pitch tunnel and seating area",
  },
  {
    src: venue3,
    alt: "Indoor football pitch with artificial turf",
  },
  {
    src: venue4,
    alt: "Large indoor sports hall with high ceiling",
  },
  {
    src: venue5,
    alt: "Indoor football pitch with goal posts",
  },
];

export const availableTimes = [
  "March 25, 9:00 AM - 10:00 PM",
  "March 25, 9:00 AM - 10:00 PM",
  "March 25, 9:00 AM - 10:00 PM",
];


export  const amenitiesOverview = [
    { icon: Shirt, label: "Changing Rooms" },
    { icon: Wifi, label: "Changing Rooms" },
    { icon: Coffee, label: "Cafe" },
    { icon: Car, label: "Free Parking" },
  ]