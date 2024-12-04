import { Team } from '@/shared/type/team';

export interface ClubInfo {
  success: boolean;
  message: string;
  data: { belongTeamGetResponses: Team[] };
}
