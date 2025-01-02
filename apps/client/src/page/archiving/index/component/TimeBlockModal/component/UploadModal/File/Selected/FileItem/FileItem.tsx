import { IcDocument } from '@tiki/icon';
import { Text } from '@tiki/ui';

interface FileItemProps {
  fileName: string;
}

const FileItem = ({ fileName }: FileItemProps) => {
  return (
    <li css={{ display: 'flex', gap: '0.4rem', width: '100%', justifyContent: 'start', alignItems: 'center' }}>
      <IcDocument width={20} height={20} css={{ padding: '1.2rem' }} />
      <Text tag="body8">{fileName}</Text>
    </li>
  );
};

export default FileItem;
