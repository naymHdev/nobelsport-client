export type TPlayer = {
  _id: string;
  player_name: string;
  player_age: string;
  professional_player: boolean;
  player_club: string;
  play_position: string;
  player_image: string;
};

export type TTeam = {
  _id: string;
  team_name: string;
  team_value: number;
  playable_match: number;
  playing_match: number;
  team_image: string;
  available_players: TPlayer[];
};

export type TMatch = {
  _id: string;
  match_title: string;
  match_play_time: string;
  match_venue: string;
  match_status: string;
  image: string;
  match_fee: string;
  match_overview: string;
  match_guidelines: string;
  team_size: number;
  available_teams: TTeam[];
};

export type TTournament = {
  _id: string;
  tournament_status: string;
  tournament_title: string;
  tournament_start_time: string;
  tournament_level: string;
  tournament_venue: string;
  tournament_format: string;
  tournament_formation: string[];
  tournament_guidelines: string;
  tournament_image: string;
  matches: TMatch[];
};
