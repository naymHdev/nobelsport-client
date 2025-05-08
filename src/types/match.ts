export type TMatchData = {
  _id: string;
  match_title: string;
  match_status: "Upcoming" | "New" | "Almost Full";
  match_start_time: string;
  match_location: string;
  matches: string;
  ground_level: string;
  tournament_details: {
    tournament_format: string[];
  };
};
