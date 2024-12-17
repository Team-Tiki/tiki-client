import { useSuspenseQuery } from '@tanstack/react-query';

import { components } from '@/shared/__generated__/schema';
import { client } from '@/shared/api/client';
import { useTeamId } from '@/shared/store/team';

type DocumentResponse = {
  documentsData: components['schemas']['DocumentsGetResponse']['documents'];
  foldersData: components['schemas']['FoldersGetResponse']['folders'];
};

const fetchAllDocument = async (teamId: number): Promise<DocumentResponse> => {
  const document = client.GET('/api/v1/teams/{teamId}/documents', {
    params: {
      path: {
        teamId,
      },
    },
  });
  const folder = client.GET('/api/v1/teams/{teamId}/folders', {
    params: {
      path: {
        teamId,
      },
    },
  });

  const [documentData, folderData] = await Promise.all([document, folder]);

  return {
    documentsData: documentData.data?.data?.documents,
    foldersData: folderData.data?.data?.folders,
  };
};

export const useDriveData = () => {
  const teamId = useTeamId();

  return useSuspenseQuery({
    queryKey: ['drive', 'documents'],
    queryFn: () => fetchAllDocument(teamId),
  });
};
