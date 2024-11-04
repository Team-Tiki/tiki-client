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
    case 'create-block':
      return [
        { text: '저장', onClick: buttonClick, variant: 'primary' },
        { text: '취소', onClick: closeModal, variant: 'secondary' },
      ];
    case 'delete':
      return [
        { text: '삭제', onClick: buttonClick, variant: 'primary' },
        { text: '취소', onClick: closeModal, variant: 'secondary' },
      ];
    default:
      return [];
  }
};
