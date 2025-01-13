// import { useQueryClient } from '@tanstack/react-query';

// import { $api } from '@/shared/api/client';

// export const usePostTeamMutation = () => {
//   const queryClient = useQueryClient();

//   return $api.useMutation('post', '/api/v1/teams', {
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ['get', '/api/v1/members/teams'],
//       });
//     },
//   });
// };
