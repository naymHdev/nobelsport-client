import sport1 from "../assets/images/sport1.png";
import tp1 from "../assets/images/tp1.png";
import tp2 from "../assets/images/tp2.png";

export const venues = [
  {
    _id: "1",
    title: "The Football Factory",
    location: "New York, USA",
    images: [sport1],
    description:
      "The Football Factory is Manchester's premier indoor football facility, featuring state-of-the-artartificial turf and professional-grade amenities. Re renovated in 2024, our venue offers an The Football Factory is Manchester's premier indoor football facility, featuring state-of-the-artartificial turf and professional-grade amenities. Recently renovated in 2024, our venue offers an",
    rating: 4.5,
    price: 100,
    bookingInfo: {
      checkIn: "12/12/2023",
      checkOut: "12/12/2023",
      duration: 2,
    },
    contactInfo: {
      location: "123 Sport Street, Manchester, M1 1AB",
      phone: "+1 123 456 789",
      openTime: "9:00 AM - 10:00 PM",
      availableTimes: ["9:00 AM", "10:00 AM", "11:00 AM"],
    },
    amenities: [
      {
        name: "Tennis Courts",
        icon: "https://img.icons8.com/ios-filled/50/000000/tennis-court.png",
      },
      {
        name: "Pool",
        icon: "https://img.icons8.com/ios-filled/50/000000/pool.png",
      },
      {
        name: "Gym",
        icon: "https://img.icons8.com/ios-filled/50/000000/gym.png",
      },
      {
        name: "Free WiFi",
        icon: "https://img.icons8.com/ios-filled/50/000000/wifi.png",
      },
    ],
    reviews: [
      {
        userId: "1",
        name: "John Doe",
        rating: 5,
        comment:
          "I had a great time at The Football Factory! The staff were friendly and the facilities were top-notch. Highly recommended!",
      },
    ],
  },
];

export const matchesData = [
  {
    _id: "1",
    match_title: "5 VS 5 Football Match",
    match_status: "Upcoming", // Upcoming, New, New, Almost Full
    match_start_time: "12 March, 7:00 PM",
    match_location: "Downtown Sports Center",
    matches: "2",
    ground_level: "Intermediate Level",
    tournament_details: {
      tournament_format: ["Round 1", "Quarter-Finals", "Semi-Finals", "Final"],
    },
  },
];

export const testimonialsData = [
  {
    _id: "1",
    profile_img: tp1,
    name: "Jake Thompson",
    gender: "Male",
    player_experience: "“Weekly Matches, Zero Hassle!”",
    comment:
      "NobleSport helped me find pickup football games in my area. I’ve played every weekend since joining!",
  },
];
