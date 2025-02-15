import { CommandButton } from '@tiki/ui';

import {
  useBlockMutate,
  useFileMutate,
  useTagMutate,
} from '@/page/archiving/index/component/TimeBlockBar/SubmitButton/quries';
import { Block, BlockDetail } from '@/page/archiving/index/type/blockType';

import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useDrawerAction, useDrawerContent, useDrawerInitialContent, useDrawerIsChanged } from '@/shared/store/drawer';
import { useTimeBlockId } from '@/shared/store/timeBlockId';

interface SubmitButtonProps {
  onEditClick: () => void;
}

const SubmitButton = ({ onEditClick }: SubmitButtonProps) => {
  const isChanged = useDrawerIsChanged();
  const initialContent = useDrawerInitialContent();
  const content = useDrawerContent() as Block & BlockDetail;
  const { setInitialContent } = useDrawerAction();
  const timeBlockId = useTimeBlockId();
  const teamId = useInitializeTeamId();

  const blockMutate = useBlockMutate(onEditClick);
  const fileMutate = useFileMutate();
  const tagMutate = useTagMutate();

  const { name, startDate, endDate, documents } = content;

  const handleSubmit = (e: React.SyntheticEvent<Element, Event>) => {
    e.preventDefault();

    blockMutate({
      params: {
        path: {
          teamId,
          timeBlockId,
        },
      },
      body: {
        name,
        startDate,
        endDate,
      },
    });

    const initialTagIds = initialContent?.documents.map((data) => data.tagId);
    const finalTagIds = documents.map((data) => data.tagId);
    const deletedTagIds = initialTagIds?.filter((id) => !finalTagIds?.includes(id));

    if (deletedTagIds) {
      tagMutate({
        params: {
          path: {
            teamId,
            timeBlockId,
          },
          query: {
            tagId: deletedTagIds,
          },
        },
      });
    }

    const initialDocumentIds = initialContent?.documents.map((data) => data.documentId);
    const documentIds = documents.map((data) => data.documentId);
    const addDocumentIds = documentIds?.filter((id) => !initialDocumentIds?.includes(id));

    if (addDocumentIds) {
      fileMutate({
        params: {
          path: { teamId, timeBlockId },
          query: { documentId: addDocumentIds ?? [] },
        },
      });
    }

    setInitialContent(content);
  };

  return (
    <CommandButton
      type="submit"
      variant="fourth"
      commandKey="S"
      size="xSmall"
      disabled={!isChanged}
      onClick={handleSubmit}>
      저장
    </CommandButton>
  );
};

export default SubmitButton;
