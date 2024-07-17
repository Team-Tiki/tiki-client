export type ClubType = {
  teamId: number;
  name: string;
  category: string;
  univ: string;
  overview?: string;
  imageUrl?: string;
};

export type teams = {
  data: { teams: ClubType[] };
};
