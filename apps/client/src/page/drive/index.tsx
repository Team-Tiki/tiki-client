import { IcGrid, IcList, IcSearch } from '@tiki/icon';
import { Button, Flex, Input, Select, Switch, useToastAction } from '@tiki/ui';
import { hasKeyInObject, useDeferredSearchFilter, useOutsideClick, useOverlay } from '@tiki/utils';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

import FileListHeader from '@/page/drive/component/FileListHeader/FileListHeader';
import FileListItem from '@/page/drive/component/FileListItem/FileListItem';
import FolderListItem from '@/page/drive/component/FileListItem/FolderListItem';
import { useDriveData } from '@/page/drive/hook/api/queries';
import { useSelectDocuments } from '@/page/drive/hook/common/useSelectDocuments';
import { contentStyle } from '@/page/drive/index.style';
import { DocumentItem, FilterOption, FolderItem } from '@/page/drive/type';

import { $api } from '@/shared/api/client';
import ContentBox from '@/shared/component/ContentBox/ContentBox';
import EmptySection from '@/shared/component/EmptySection/EmptySection';
import FileGrid from '@/shared/component/FileGrid/FileGrid';
import FolderGrid from '@/shared/component/FileGrid/FolderGrid';
import { CAUTION } from '@/shared/constant';
import { PATH } from '@/shared/constant/path';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useCloseModal, useOpenModal } from '@/shared/store/modal';
import { File } from '@/shared/type/file';

import { FileData } from '@/mock/data/drive';

const filterOptions = [{ value: '최근 업로드 순' }, { value: '과거 업로드 순' }];

const DrivePage = () => {
  const [alignOption, setAlignOption] = useState<'list' | 'grid'>('list');
  const [searchValue, setSearchValue] = useState('');
  const [selected, setSelected] = useState<FilterOption>('최근 업로드 순');

  const navigate = useNavigate();

  const { isOpen, close, toggle } = useOverlay();
  const ref = useOutsideClick<HTMLDivElement>(close);
  const teamId = useInitializeTeamId();

  const { createToast } = useToastAction();

  const openModal = useOpenModal();
  const closeModal = useCloseModal();

  const queryClient = useQueryClient();

  const { mutate: deleteFileMutation } = $api.useMutation('delete', '/api/v1/teams/{teamId}/documents', {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/teams/{teamId}/drive'] });
    },
  });
  const { mutate: deleteFolderMutation } = $api.useMutation('delete', '/api/v1/teams/{teamId}/folders', {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/teams/{teamId}/drive'] });
    },
  });

  const { data } = useDriveData();

  const { filteredData: filteredDocuments } = useDeferredSearchFilter(data.data!.documents, searchValue);
  const { filteredData: filteredFolders } = useDeferredSearchFilter(data.data!.folders, searchValue);

  const handleChangeAlignOption = (option: 'list' | 'grid') => {
    setAlignOption(option);

    reset();
  };

  const filteredResult = [...filteredDocuments, ...filteredFolders].sort((a, b) =>
    selected === '최근 업로드 순'
      ? new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime()
      : new Date(a.createdTime).getTime() - new Date(b.createdTime).getTime()
  );

  const {
    selectAll,
    selectDocument,
    selectFolder,
    reset,
    toggleSelection,
    isSelectable,
    getFolderIsSelected,
    getDocumentIsSelected,
    documentIds,
    folderIds,
  } = useSelectDocuments({
    documents: filteredDocuments,
    folders: filteredFolders,
  });

  const handleSelect = (id: string) => {
    setSelected(id as FilterOption);

    close();
  };

  const handleDelete = (documents: number[], folders: number[]) => {
    if (documents.length === 0 && folders.length === 0) return;

    openModal('caution', {
      infoText: CAUTION.DELETE_FILE.INFO_TEXT,
      content: CAUTION.DELETE_FILE.CONTENT,
      desc: CAUTION.DELETE_FILE.DESC,
      onClick: () => {
        try {
          documents.length > 0 &&
            deleteFileMutation({ params: { path: { teamId }, query: { documentId: documents } } }),
            folders.length > 0 && deleteFolderMutation({ params: { path: { teamId }, query: { folderId: folders } } }),
            closeModal();

          createToast('성공적으로 삭제했습니다.', 'success');
          reset();
        } catch (error) {
          createToast('삭제 도중 오류가 발생했습니다.', 'error');
        }
      },
    });
  };

  return (
    <ContentBox
      variant="file"
      title="파일"
      description="5.16GB 사용가능(총 245.11GB)"
      headerOption={
        <Flex styles={{ align: 'center', gap: '0.8rem' }}>
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            css={{ width: '33.6rem' }}
            LeftIcon={<IcSearch width={16} height={16} />}
            placeholder="파일 및 폴더 명을 검색하세요"
          />
          <Button variant="secondary" onClick={() => navigate(PATH.DELETED)}>
            삭제된 항목
          </Button>
          <Button>파일 업로드</Button>
        </Flex>
      }
      contentOption={
        <Flex styles={{ width: '100%', justify: 'space-between', align: 'center', gap: '1rem' }}>
          <Flex styles={{ gap: '0.8rem' }}>
            {(() => {
              switch (isSelectable) {
                case false:
                  return (
                    <Button onClick={toggleSelection} variant="tertiary">
                      선택
                    </Button>
                  );

                case true:
                  return (
                    <>
                      <Button onClick={selectAll} variant="tertiary">
                        전체 선택
                      </Button>
                      <Button variant="tertiary" onClick={() => handleDelete(documentIds, folderIds)}>
                        삭제
                      </Button>
                      <Button variant="tertiary">다운로드</Button>
                      <Button onClick={toggleSelection} variant="tertiary">
                        취소
                      </Button>
                    </>
                  );
              }
            })()}
          </Flex>

          <Flex styles={{ align: 'center' }}>
            <Switch
              status={alignOption === 'list' ? 'left' : 'right'}
              LeftIcon={{ Icon: IcList, mode: 'stroke' }}
              RightIcon={{ Icon: IcGrid, mode: 'fill' }}
              onSwitchChange={() => handleChangeAlignOption(alignOption === 'grid' ? 'list' : 'grid')}
            />
            <Select
              isOpen={isOpen}
              ref={ref}
              css={{ width: '13rem' }}
              placeholder="최근 업로드 순"
              variant="option"
              options={filterOptions}
              onTrigger={toggle}
              onSelect={handleSelect}
            />
          </Flex>
        </Flex>
      }>
      {alignOption === 'list' ? (
        <>
          <FileListHeader />
          <ul>
            {filteredResult.map((item) => {
              if (hasKeyInObject(item, 'folderId')) {
                const folder = item as FolderItem;

                return (
                  <div>
                    <FolderListItem
                      key={String(folder.folderId + folder.type)}
                      name={folder.name}
                      path={folder.path}
                      createdTime={folder.createdTime}
                      isSelectable={isSelectable}
                      isSelected={getFolderIsSelected(folder.folderId)}
                      onSelect={() => selectFolder(folder.folderId)}
                      onDelete={() => handleDelete([], [folder.folderId])}
                    />
                  </div>
                );
              } else if (hasKeyInObject(item, 'documentId')) {
                const file = item as DocumentItem;

                return (
                  <div>
                    <FileListItem
                      key={String(file.documentId + file.type)}
                      documentId={file.documentId}
                      name={file.name}
                      capacity={file.capacity}
                      url={file.url}
                      createdTime={file.createdTime}
                      isSelectable={isSelectable}
                      isSelected={getDocumentIsSelected(file.documentId)}
                      onSelect={() => selectDocument(file.documentId)}
                      onDelete={() => handleDelete([file.documentId], [])}
                    />
                  </div>
                );
              }
            })}
          </ul>
        </>
      ) : (
        <ul css={contentStyle(FileData.length)}>
          {filteredResult?.map((item) => {
            if (hasKeyInObject(item, 'documentId')) {
              const file = item as DocumentItem;
              return (
                <FileGrid
                  key={file.documentId}
                  name={file.name}
                  capacity={file.capacity}
                  type={file.url?.split('.').at(-1) as File}
                  url={file.url}
                  createdTime={file.createdTime}
                  isSelectable={isSelectable}
                  isSelected={getDocumentIsSelected(file.documentId)}
                  onSelect={() => selectDocument(file.documentId!)}
                  onDelete={() => handleDelete([file.documentId], [])}
                />
              );
            } else if (hasKeyInObject(item, 'folderId')) {
              const folder = item as FolderItem;
              return (
                <FolderGrid
                  key={folder.folderId}
                  name={folder.name}
                  createdTime={folder.createdTime}
                  path={folder.path}
                  isSelectable={isSelectable}
                  isSelected={getFolderIsSelected(folder.folderId)}
                  onSelect={() => selectFolder(folder.folderId)}
                  onDelete={() => handleDelete([], [folder.folderId])}
                />
              );
            }
          })}
        </ul>
      )}
      <EmptySection domain="drive" isVisible={FileData.length === 0} />
    </ContentBox>
  );
};

export default DrivePage;
