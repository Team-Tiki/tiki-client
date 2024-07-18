export type ClubType = {
  teamId: number;
  name: string;
  category: string;
  univ: string;
  overview?: string;
  imageUrl?: string;
};

export type TeamsInfo = {
  data: { teams: ClubType[] };
};

export interface CreateTeam {
  name: string;
  category: string;
  iconImageUrl: string;
}
