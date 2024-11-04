export interface FooterButton {
  text: string;
  onClick?: () => void;
  variant: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'underline';
  disabled?: boolean;
}
export const getFooterContent = (
  contentType: string,
  step: number,
  buttonClick?: () => void,
  closeModal?: () => void,
  isButtonActive: boolean = true
): FooterButton[] => {
  switch (contentType) {
    case 'create-workspace':
      return [
        step >= 3 ? { text: '건너뛰기', onClick: buttonClick, variant: 'outline' } : false,
        {
          text: step === 4 ? '확인' : '다음으로',
          onClick: buttonClick,
          variant: 'primary',
          disabled: !isButtonActive,
        },
      ].filter(Boolean) as FooterButton[];

    /* 디자인 확정시 추후 수정 필요 */
    case 'create-block':
      return [
        { text: '취소', onClick: closeModal, variant: 'outline' },
        { text: '다음으로', onClick: buttonClick, variant: 'primary' },
      ];

    case 'deleted':
      return [
        { text: '취소', onClick: closeModal, variant: 'outline' },
        { text: '삭제', onClick: buttonClick, variant: 'primary' },
      ];

    case 'invite':
      return [
        { text: '취소', onClick: closeModal, variant: 'outline' },
        { text: '초대', onClick: buttonClick, variant: 'primary' },
      ];
    default:
      return [];
  }
};
