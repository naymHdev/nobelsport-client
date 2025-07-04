import tp1 from "../assets/images/tp1.png";
import venue1 from "../assets/images/sport1.png";
import venue2 from "../assets/images/venue2.png";
import venue3 from "../assets/images/venue3.png";
import venue4 from "../assets/images/venue4.png";
import venue5 from "../assets/images/venue5.png";
import venue6 from "../assets/images/venue6.png";
import aboutImg from "../assets/images/venue-about.png";
import vReview1 from "../assets/images/review-vn.png";

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

export const venues = [
  {
    _id: "1",
    title: "The Football Factory",
    location: "New York, USA",
    images: [venue1, venue2, venue3, venue4, venue5, venue6],
    about: {
      image: aboutImg,
      description:
        "The Football Factory is Manchester's premier indoor football facility, featuring state-of-the-artartificial turf and professional-grade amenities. Re renovated in 2024, our venue offers an The Football Factory is Manchester's premier indoor football facility, featuring state-of-the-artartificial turf and professional-grade amenities. Recently renovated in 2024, our venue offers an",
    },
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
      availableTimes: [
        "March 25, 9:00 AM - 10:00 PM",
        "March 25, 9:00 AM - 10:00 PM",
        "March 25, 9:00 AM - 10:00 PM",
      ],
    },
    amenities: [
      {
        name: "Tennis Courts",
        icon: "https://asset.cloudinary.com/dgrg4lmww/d62c5f06232cfa4d679262d7b2699f35",
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
        profileImg: vReview1,
        rating: 5,
        comment:
          "I had a great time at The Football Factory! The staff were friendly and the facilities were top-notch. Highly recommended!",
      },
      {
        userId: "1",
        name: "John Doe",
        profileImg: vReview1,
        rating: 5,
        comment:
          "I had a great time at The Football Factory! The staff were friendly and the facilities were top-notch. Highly recommended!",
      },
      {
        userId: "1",
        name: "John Doe",
        profileImg: vReview1,
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
    tournament_status: "Upcoming",
    tournament_title: "5 vs 5 tournament-Group Match",
    tournament_start_time: "12 March, 7:00 PM",
    tournament_level: "Intermediate Level",
    tournament_venue: "Downtown Sports Center",
    tournament_format: "Knockout (Single-Elimination)",
    tournament_formation: ["Round 1", "Quarter-Finals", "Semi-Finals", "Final"],
    tournament_guidelines: "Tournament Rules",
    tournament_image:
      "https://asset.cloudinary.com/dgrg4lmww/d62c5f06232cfa4d679262d7b2699f35",
    matches: [
      {
        _id: "m1",
        match_title: "Dragons FC vs Phoenix United",
        match_play_time: "12 March, 7:00 PM",
        match_venue: "Downtown Sports Center",
        match_status: "Upcoming Match",
        image:
          "https://asset.cloudinary.com/dgrg4lmww/d62c5f06232cfa4d679262d7b2699f35",
        match_fee: "Free",
        match_overview:
          "Dragons FC and Phoenix United face off in this exciting 5 vs 5 friendly match. Both teams have been showing excellent form in recent matches, promising an entertaining display of skill and strategy.",
        match_guidelines: "Match Rules",
        team_size: 5,
        available_teams: [
          {
            _id: "t1",
            team_name: "Real Madrid",
            team_value: 1000,
            playable_match: 5,
            playing_match: 5,
            team_image:
              "https://res.cloudinary.com/dgrg4lmww/image/upload/v1748855466/6ff5a604-1922-4bbb-8dac-a247358bac60.png",
            available_players: [
              {
                _id: "rm1",
                player_name: "Karim Benzema",
                player_age: "36",
                professional_player: true,
                player_club: "Real Madrid",
                play_position: "Forward-1",
                player_image:
                  "https://res.cloudinary.com/dgrg4lmww/image/upload/v1748855157/950d0e29-6b7c-4f39-8b92-ebcbdde59476.png",
              },
              {
                _id: "rm2",
                player_name: "Vinícius Júnior",
                player_age: "23",
                professional_player: true,
                player_club: "Real Madrid",
                play_position: "Forward-2",
                player_image:
                  "https://res.cloudinary.com/dgrg4lmww/image/upload/v1748855238/d3479de3-cdc9-48ab-a7ca-542b550d2973.png",
              },
              {
                _id: "rm3",
                player_name: "Luka Modrić",
                player_age: "38",
                professional_player: true,
                player_club: "Real Madrid",
                play_position: "Midfielder-1",
                player_image:
                  "https://res.cloudinary.com/dgrg4lmww/image/upload/v1748855301/6865d485-8702-47f7-bfa3-54123d1df598.png",
              },
              {
                _id: "rm4",
                player_name: "Toni Kroos",
                player_age: "33",
                professional_player: true,
                player_club: "Real Madrid",
                play_position: "Midfielder-2",
                player_image:
                  "https://res.cloudinary.com/dgrg4lmww/image/upload/v1748855373/10a44a10-d7a0-4709-b250-ee5c37130841.png",
              },
              {
                _id: "rm5",
                player_name: "Thibaut Courtois",
                player_age: "31",
                professional_player: true,
                player_club: "Real Madrid",
                play_position: "Goalkeeper",
                player_image:
                  "https://res.cloudinary.com/dgrg4lmww/image/upload/v1748855410/59c66439-6842-48e4-97fc-c547e9a5051a.png",
              },
            ],
          },
          {
            _id: "t2",
            team_name: "Red Foxes",
            team_value: 90000,
            playable_match: 5,
            playing_match: 5,
            team_image:
              "https://asset.cloudinary.com/dgrg4lmww/d62c5f06232cfa4d679262d7b2699f35",
            available_players: [
              {
                _id: "p1",
                player_name: "Ronaldo",
                player_age: "25",
                professional_player: true,
                player_club: "Dragons FC",
                play_position: "Forward",
                player_image:
                  "https://asset.cloudinary.com/dgrg4lmww/d62c5f06232cfa4d679262d7b2699f35",
              },
              {
                _id: "p2",
                player_name: "Ronaldo",
                player_age: "25",
                professional_player: true,
                player_club: "Dragons FC",
                play_position: "Forward",
                player_image:
                  "https://asset.cloudinary.com/dgrg4lmww/d62c5f06232cfa4d679262d7b2699f35",
              },
              {
                _id: "p3",
                player_name: "Ronaldo",
                player_age: "25",
                professional_player: true,
                player_club: "Dragons FC",
                play_position: "Forward",
                player_image:
                  "https://asset.cloudinary.com/dgrg4lmww/d62c5f06232cfa4d679262d7b2699f35",
              },
            ],
          },
        ],
      },
      {
        _id: "m2",
        match_title: "Dragons FC vs Phoenix United",
        match_play_time: "12 March, 7:00 PM",
        match_venue: "Downtown Sports Center",
        match_status: "Upcoming Match",
        image:
          "https://asset.cloudinary.com/dgrg4lmww/d62c5f06232cfa4d679262d7b2699f35",
        match_fee: "Free",
        match_overview:
          "Dragons FC and Phoenix United face off in this exciting 5 vs 5 friendly match. Both teams have been showing excellent form in recent matches, promising an entertaining display of skill and strategy.",
        match_guidelines: "Match Rules",
        team_size: 5,
        available_teams: [
          {
            _id: "1",
            team_name: "Dragons FC",
            team_value: 1000,
            playable_match: 5,
            playing_match: 5,
            team_image:
              "https://asset.cloudinary.com/dgrg4lmww/d62c5f06232cfa4d679262d7b2699f35",
            available_players: [
              {
                _id: "1",
                player_name: "John Doe",
                player_age: "25",
                professional_player: true,
                player_club: "Dragons FC",
                play_position: "Forward",
                player_image:
                  "https://asset.cloudinary.com/dgrg4lmww/d62c5f06232cfa4d679262d7b2699f35",
              },
            ],
          },
        ],
      },
      {
        _id: "m3",
        match_title: "Dragons FC vs Phoenix United",
        match_play_time: "12 March, 7:00 PM",
        match_venue: "Downtown Sports Center",
        match_status: "Upcoming Match",
        image:
          "https://asset.cloudinary.com/dgrg4lmww/d62c5f06232cfa4d679262d7b2699f35",
        match_fee: "Free",
        match_overview:
          "Dragons FC and Phoenix United face off in this exciting 5 vs 5 friendly match. Both teams have been showing excellent form in recent matches, promising an entertaining display of skill and strategy.",
        match_guidelines: "Match Rules",
        team_size: 5,
        available_teams: [
          {
            _id: "1",
            team_name: "Dragons FC",
            team_value: 1000,
            playable_match: 5,
            playing_match: 5,
            team_image:
              "https://asset.cloudinary.com/dgrg4lmww/d62c5f06232cfa4d679262d7b2699f35",
            available_players: [
              {
                _id: "1",
                player_name: "John Doe",
                player_age: "25",
                professional_player: true,
                player_club: "Dragons FC",
                play_position: "Forward",
                player_image:
                  "https://asset.cloudinary.com/dgrg4lmww/d62c5f06232cfa4d679262d7b2699f35",
              },
            ],
          },
        ],
      },
    ],
  },
];
