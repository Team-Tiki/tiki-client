import { IcAlertYes } from '@tiki/icon';
import { Button } from '@tiki/ui';

const AlarmButton = () => {
  return (
    <Button
      onClick={() => {
        alert('현재 준비중인 기능입니다.');
      }}
      size="small"
      variant="outline"
      css={{ padding: '1.08rem' }}>
      <IcAlertYes css={{ cursor: 'pointer' }} width={14.4} height={14.4} />
    </Button>
  );
};

export default AlarmButton;
