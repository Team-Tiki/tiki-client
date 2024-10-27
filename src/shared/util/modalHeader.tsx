import BlockIcon from '@/common/asset/svg/ic_block_create.svg?react';
import WarningIcon from '@/common/asset/svg/ic_warning.svg?react';

export const getHeaderContent = (contentType: string, step?: number, totalSteps?: number) => {
  switch (contentType) {
    case 'create-workspace':
      return {
        icon: step && totalSteps ? `${step}/${totalSteps}` : null,
        title: '새로운 워크스페이스 생성하기',
        infoText:
          step === 1
            ? '워크스페이스의 이름을 입력해주세요'
            : step === 2
              ? '워크스페이스의 카테고리를 선택해주세요'
              : step === 3
                ? '워크스페이스 이미지를 등록해주세요'
                : '완료하기',
      };
    case 'create-block':
      return {
        icon: <BlockIcon width={40} height={40} />,
        title: '타임블록 생성하기',
        infoText: step === 1 ? '블록명을 입력해주세요' : '블록에 필요한 문서를 업로드해주세요',
      };
    case 'delete':
      return {
        icon: <WarningIcon width={40} height={40} />,
        title: '삭제 확인',
        infoText: '삭제할 항목을 확인해주세요.',
      };
    default:
      return { icon: null, title: '', infoText: '' };
  }
};
