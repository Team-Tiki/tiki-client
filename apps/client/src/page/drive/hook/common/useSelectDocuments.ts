import { useMultiSelect } from '@tiki/utils';

import { components } from '@/shared/__generated__/schema';

export const useSelectDocuments = (data: components['schemas']['DriveGetResponse']) => {
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
      handleAllDocumentActive();
      handleAllFolderActive();
    } else {
      handleReset();
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
    documentIds,
    folderIds,
  };
};
