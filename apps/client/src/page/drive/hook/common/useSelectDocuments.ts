import { useMultiSelect } from '@tiki/utils';

import { DriveResponse } from '@/shared/api/teams/drive/type';

export const useSelectDocuments = (data: DriveResponse['data']) => {
  const {
    ids: documentIds,
    handleItemClick: handleDocumentClick,
    canSelect: isDocumentSelectable,
    handleAllActive: handleAllDocumentActive,
    handleToggleSelect: handleDocumentSelect,
    handleReset: handleDocumentReset,
  } = useMultiSelect('documentId', data.documents);
  const {
    ids: folderIds,
    handleItemClick: handleFolderClick,
    canSelect: isFolderSelectable,
    handleAllActive: handleAllFolderActive,
    handleToggleSelect: handleFolderSelect,
    handleReset: handleFolderReset,
  } = useMultiSelect('folderId', data.folders);

  const isSelectable = isFolderSelectable && isDocumentSelectable;

  const handleToggleSelectable = () => {
    handleDocumentSelect();
    handleFolderSelect();
  };

  const handleAllSelect = () => {
    if (documentIds.length !== data.documents.length || folderIds.length !== data.folders.length) {
      // 두 리스트 중 하나라도 선택안된게 있다면
      handleAllDocumentActive();
      handleAllFolderActive();
    } else {
      handleDocumentReset();
      handleFolderReset();
    }
  };

  const handleReset = () => {
    handleDocumentReset();
    handleFolderReset();
  };

  const getDocumentIsSelected = (id: number) => documentIds.includes(id);
  const getFolderIsSelected = (id: number) => folderIds.includes(id);

  return {
    selectedDocumentsIds: documentIds,
    selectedFoldersIds: folderIds,
    getDocumentIsSelected,
    getFolderIsSelected,
    selectAll: handleAllSelect,
    isSelectable,
    toggleSelection: handleToggleSelectable,
    selectDocument: handleDocumentClick,
    selectFolder: handleFolderClick,
    reset: handleReset,
  };
};
