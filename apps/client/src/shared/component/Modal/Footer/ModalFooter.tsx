import { Button, Flex } from '@tiki/ui';

export interface FooterButton {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'text' | 'delete';
  disabled?: boolean;
}

interface ModalFooterProps {
  contentType: string;
  step?: number;
  prevStep?: () => void;
  buttonClick?: () => void;
  closeModal?: () => void;
  isButtonActive?: boolean;
}

export const ModalFooter = ({
  contentType,
  step = 1,
  prevStep,
  buttonClick,
  closeModal,
  isButtonActive = true,
}: ModalFooterProps) => {
  const buttons = ModalFooterButtons(contentType, step, buttonClick, prevStep, closeModal, isButtonActive);

  return (
    <Flex style={{ gap: '1.6rem', justifyContent: 'flex-end' }}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          onClick={button.onClick}
          disabled={button.disabled}
          variant={button.variant}
          css={{ width: '100%' }}>
          {button.text}
        </Button>
      ))}
    </Flex>
  );
};

const ModalFooterButtons = (
  contentType: string,
  step: number,
  buttonClick?: () => void,
  prevStep?: () => void,
  closeModal?: () => void,
  isButtonActive: boolean = true
): FooterButton[] => {
  const createButton = (
    text: string,
    onClick?: () => void,
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'text' | 'delete',
    disabled?: boolean
  ): FooterButton => ({ text, onClick, variant, disabled });

  switch (contentType) {
    case 'create-workspace':
      return [
        step >= 3 ? createButton('건너뛰기', buttonClick, 'outline') : null,
        createButton(step === 5 ? '확인' : '다음으로', buttonClick, 'primary', !isButtonActive),
      ].filter(Boolean) as FooterButton[];

    case 'create-block':
      if (step === 1) {
        return [createButton('다음', buttonClick, 'primary', !isButtonActive)];
      }
      if (step === 2) {
        return [
          createButton('이전', prevStep, 'outline'),
          createButton('다음', buttonClick, 'primary', !isButtonActive),
        ];
      }
      if (step === 3) {
        return [
          createButton('이전', prevStep, 'outline'),
          createButton('업로드', buttonClick, 'primary', !isButtonActive),
        ];
      }
      return [createButton('이전', prevStep, 'outline'), createButton('생성', buttonClick, 'primary', !isButtonActive)];

    case 'deleted':
      return [createButton('취소', closeModal, 'outline'), createButton('삭제', buttonClick, 'delete')];

    case 'invite':
      return [
        createButton('취소', closeModal, 'outline'),
        createButton('완료', buttonClick, 'primary', !isButtonActive),
      ];
    case 'activity-tag':
      return [createButton('취소', closeModal, 'outline'), createButton('완료', buttonClick, 'primary')];
    case 'new-file':
      return [
        createButton('취소', closeModal, 'outline'),
        createButton('업로드', buttonClick, 'primary', !isButtonActive),
      ];
    case 'file':
      return [
        createButton('취소', closeModal, 'outline'),
        createButton('연동', buttonClick, 'primary', !isButtonActive),
      ];
    case 'timeblock-file':
      return [
        createButton('취소', closeModal, 'outline'),
        createButton('업로드', buttonClick, 'primary', !isButtonActive),
      ];
    case 'caution':
      return [createButton('취소', closeModal, 'outline'), createButton('삭제', buttonClick, 'primary')];
    case 'caution-modify':
      return [createButton('취소', closeModal, 'outline'), createButton('확인', buttonClick, 'primary')];
    case 'image':
      return [createButton('취소', closeModal, 'outline'), createButton('업로드', buttonClick, 'primary')];
    default:
      return [];
  }
};
