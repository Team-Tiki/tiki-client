import BlockIcon from '@/common/asset/svg/ic_block_create.svg?react';
import WarningIcon from '@/common/asset/svg/ic_warning.svg?react';
import SuccessIcon from '@/common/asset/svg/ic_workspace_success.svg?react';

export const getHeaderContent = (contentType: string, step?: number, totalSteps?: number) => {
  switch (contentType) {
    case 'create-workspace':
      return {
        icon:
          step === totalSteps ? (
            <SuccessIcon width={40} height={40} />
          ) : step && totalSteps ? (
            `${step}/${totalSteps}`
          ) : null,
        title:
          step === 1 || step === 2
            ? '새로운 워크스페이스 생성하기'
            : step === 3
              ? '동아리 프로필 이미지 등록'
              : '워크스페이스 생성완료',
        infoText:
          step === 1
            ? '워크스페이스의 이름을 입력해주세요'
            : step === 2
              ? '팀 카테고리를 선택해주세요'
              : step === 3
                ? '우리 동아리 프로필에 표시할 이미지를 등록해주세요'
                : '이제 워크스페이스를 사용할 수 있습니다.',
      };

    /* 디자인 확정시 추후 수정 필요 */
    case 'create-block':
      return {
        icon: <BlockIcon width={40} height={40} />,
        title: '타임블록 생성',
        infoText: step === 1 ? '타임라인에 생성할 블록 정보를 입력해주세요' : '타임라인에 업로드할 파일을 선택하세요',
      };

    case 'deleted':
      return {
        icon: <WarningIcon width={40} height={40} />,
        title: '주의!',
        infoText: '삭제할 항목을 확인해주세요.',
      };
    default:
      return { icon: null, title: '', infoText: '' };
  }
};
