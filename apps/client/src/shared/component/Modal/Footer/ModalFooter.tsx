import { Button, Flex } from '@tiki/ui';

export interface FooterButton {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'text' | 'delete';
  disabled?: boolean;
}

interface ModalFooterProps {
  type: string;
  step?: number;
  onPrev?: () => void;
  onClick?: () => void;
  onClose?: () => void;
  disabled?: boolean;
}

export const ModalFooter = ({ type, step = 1, onPrev, onClick, onClose, disabled = true }: ModalFooterProps) => {
  const buttons = ModalFooterButtons(type, step, onClick, onPrev, onClose, disabled);

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
  type: string,
  step: number,
  onClick?: () => void,
  onPrev?: () => void,
  onClose?: () => void,
  disabled: boolean = true
): FooterButton[] => {
  const createButton = (
    text: string,
    onClick?: () => void,
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'text' | 'delete',
    disabled?: boolean
  ): FooterButton => ({ text, onClick, variant, disabled });

  switch (type) {
    case 'create-workspace':
      if (step === 1) {
        return [createButton('다음', onClick, 'primary', disabled)];
      }
      if (step === 2 || step === 3) {
        return [createButton('이전', onPrev, 'outline'), createButton('다음', onClick, 'primary', disabled)];
      }
      return [createButton('확인', onClick, 'primary')];

    case 'create-block':
      if (step === 1) {
        return [createButton('다음', onClick, 'primary', disabled)];
      }
      if (step === 2) {
        return [createButton('이전', onPrev, 'outline'), createButton('다음', onClick, 'primary', disabled)];
      }
      if (step === 3) {
        return [createButton('이전', onPrev, 'outline'), createButton('업로드', onClick, 'primary', disabled)];
      }
      return [createButton('이전', onPrev, 'outline'), createButton('생성', onClick, 'primary', disabled)];

    case 'deleted':
      return [createButton('취소', onClose, 'outline'), createButton('삭제', onClick, 'delete')];

    case 'leave':
      return [createButton('취소', onClose, 'outline'), createButton('탈퇴', onClick, 'delete')];

    case 'invite':
      return [createButton('취소', onClose, 'outline'), createButton('완료', onClick, 'primary', disabled)];
    case 'activity-tag':
      return [createButton('취소', onClose, 'outline'), createButton('완료', onClick, 'primary')];
    case 'new-file':
      return [createButton('취소', onClose, 'outline'), createButton('업로드', onClick, 'primary', disabled)];
    case 'file':
      return [createButton('취소', onClose, 'outline'), createButton('연동', onClick, 'primary', disabled)];
    case 'timeblock-file':
      return [createButton('취소', onClose, 'outline'), createButton('업로드', onClick, 'primary', disabled)];
    case 'caution':
      return [createButton('취소', onClose, 'outline'), createButton('삭제', onClick, 'primary')];
    case 'caution-modify':
      return [createButton('취소', onClose, 'outline'), createButton('확인', onClick, 'primary')];
    case 'image':
      return [createButton('취소', onClose, 'outline'), createButton('업로드', onClick, 'primary')];
    default:
      return [];
  }
};
