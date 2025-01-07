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
  buttonClick?: () => void;
  closeModal?: () => void;
  isButtonActive?: boolean;
}

export const ModalFooter = ({
  contentType,
  step = 1,
  buttonClick,
  closeModal,
  isButtonActive = true,
}: ModalFooterProps) => {
  const buttons = ModalFooterButtons(contentType, step, buttonClick, closeModal, isButtonActive);

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
      return [createButton('취소', closeModal, 'outline'), createButton('다음으로', buttonClick, 'primary')];

    case 'deleted':
      return [createButton('취소', closeModal, 'outline'), createButton('삭제', buttonClick, 'delete')];

    case 'invite':
      return [
        createButton('건너뛰기', buttonClick, 'outline', false),
        createButton('다음으로', buttonClick, 'primary', !isButtonActive),
      ];
    case 'member-tag':
    case 'activity-tag':
      return [createButton('취소', closeModal, 'outline'), createButton('완료', buttonClick, 'primary')];

    default:
      return [];
  }
};
