import { useEffect, useState } from 'react';

import { ERROR_NAME } from '@/page/workspaceSetting/constant';
import { usePositionData, useTeamData } from '@/page/workspaceSetting/hook/api/queries';
import type { MemberType, TeamType } from '@/page/workspaceSetting/type';

export const useWorkspaceData = () => {
  const { data: positionData } = usePositionData();
  const { data: teamData } = useTeamData();

  const [workspaceData, setWorkspaceData] = useState({
    name: '',
    position: 'EXECUTIVE',
    teamName: '',
    university: '건국대학교',
    teamIconUrl: '',
  } as MemberType & Omit<TeamType, 'namingUpdatedAt'>);

  const [initialWorkspaceData, setInitialWorkspaceData] = useState<
    (MemberType & Omit<TeamType, 'namingUpdatedAt'>) | null
  >(null);

  const [workspaceDataError, setWorkspaceDataError] = useState({
    nameError: ERROR_NAME.VALIDATE,
    teamNameError: ERROR_NAME.VALIDATE,
  });

  const handleInitialWorkspaceDataChange = (data: (MemberType & Omit<TeamType, 'namingUpdatedAt'>) | null) => {
    setInitialWorkspaceData(data);
  };

  const handleWorkspaceDataErrorChange = (key: string, value: string) => {
    setWorkspaceDataError((prev) => ({ ...prev, [key]: value }));
  };

  const handleWorkspaceDataChange = (key: string, value: string) => {
    setWorkspaceData((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    if (positionData?.success && teamData?.success && !initialWorkspaceData) {
      setInitialWorkspaceData({
        name: positionData.data?.name ?? '',
        position: positionData.data?.position ?? 'EXECUTIVE',
        teamName: teamData.data?.teamName ?? '',
        university: teamData.data?.university ?? '건국대학교',
        teamIconUrl: teamData.data?.teamIconUrl ?? '',
      });
    }
  }, [positionData, teamData, initialWorkspaceData]);

  useEffect(() => {
    if (positionData?.success) {
      setWorkspaceData((prev) => ({
        ...prev,
        name: positionData.data?.name ?? '',
        position: positionData.data?.position ?? 'MEMBER',
      }));
    }
  }, [positionData]);

  useEffect(() => {
    if (teamData?.success) {
      setWorkspaceData((prev) => ({
        ...prev,
        teamName: teamData?.data?.teamName ?? '',
        teamIconUrl: teamData?.data?.teamIconUrl ?? '',
      }));
    }
  }, [teamData]);

  return {
    workspaceData,
    initialWorkspaceData,
    handleWorkspaceDataChange,
    namingUpdatedAt: teamData?.data?.namingUpdatedAt,
    workspaceDataError,
    handleWorkspaceDataErrorChange,
    handleInitialWorkspaceDataChange,
  };
};
