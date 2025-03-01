type Player = {
  kills: number;
  username: string;
};

type Team = {
  name: string;
  place: number;
  players: Player[];
  points: number;
  total_kills: number;
};

export type Match = {
  awayScore: number;
  homeScore: number;
  awayTeam: Team;
  homeTeam: Team;
  status: string;
  time: string;
  title: string;
};
