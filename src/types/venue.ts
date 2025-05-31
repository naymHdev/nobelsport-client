export type TVenue = {
  _id: string;
  title: string;
  location: string;
  images: string[];
  about: {
    image: string;
    description: string;
  };
  rating: number;
  price: number;
  bookingInfo: {
    checkIn: string; // e.g., "12/12/2023"
    checkOut: string;
    duration: number; // in hours or days
  };
  contactInfo: {
    location: string;
    phone: string;
    openTime: string; // e.g., "9:00 AM - 10:00 PM"
    availableTimes: string[];
  };
  amenities: {
    name: string;
    icon: string;
  }[];
  reviews: {
    userId: string;
    profileImg: string | null;
    name: string;
    rating: number;
    comment: string;
  }[];
};
