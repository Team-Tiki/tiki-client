import { IcGrid, IcList, IcSearch } from '@tiki/icon';
import { Button, Flex, Input, Select, Switch } from '@tiki/ui';
import { hasKeyInObject, useDeferredSearchFilter, useOutsideClick, useOverlay } from '@tiki/utils';
import { NumberParam, useQueryParam } from 'use-query-params';

import { ChangeEvent, useState } from 'react';

import FileListHeader from '@/page/drive/component/FileListHeader/FileListHeader';
import FileListItem from '@/page/drive/component/FileListItem/FileListItem';
import FolderListItem from '@/page/drive/component/FileListItem/FolderListItem';
import { CreateFileRequest, useDriveData, useUploadFile } from '@/page/drive/hook/api/queries';
import { useSelectDocuments } from '@/page/drive/hook/common/useSelectDocuments';
import { contentStyle, uploadLabelStyle } from '@/page/drive/index.style';
import { DocumentItem, FilterOption, FolderItem } from '@/page/drive/type';

import { getPresignedUrl } from '@/shared/api/file/upload';
import ContentBox from '@/shared/component/ContentBox/ContentBox';
import EmptySection from '@/shared/component/EmptySection/EmptySection';
import FileGrid from '@/shared/component/FileGrid/FileGrid';
import FolderGrid from '@/shared/component/FileGrid/FolderGrid';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { File } from '@/shared/type/file';
import { extractFileExtension } from '@/shared/util/file';

import { FileData } from '@/mock/data/drive';

const filterOptions = [{ value: '최근 업로드 순' }, { value: '과거 업로드 순' }];

const DrivePage = () => {
  const [alignOption, setAlignOption] = useState<'list' | 'grid'>('list');
  const [searchValue, setSearchValue] = useState('');
  const [selected, setSelected] = useState<FilterOption>('최근 업로드 순');

  const [folderId, setFolderId] = useQueryParam('folderId', NumberParam);
  const { isOpen, close, toggle } = useOverlay();
  const ref = useOutsideClick<HTMLDivElement>(close);

  const { data } = useDriveData(folderId);
  const { mutate } = useUploadFile(folderId);
  const teamId = useInitializeTeamId();

  const { filteredData: filteredDocuments } = useDeferredSearchFilter(data?.data?.documents ?? [], searchValue);
  const { filteredData: filteredFolders } = useDeferredSearchFilter(data?.data?.folders ?? [], searchValue);

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
  } = useSelectDocuments({
    documents: filteredDocuments,
    folders: filteredFolders,
  });

  const handleSelect = (id: string) => {
    setSelected(id as FilterOption);

    close();
  };
  const handleChangeAlignOption = (option: 'list' | 'grid') => {
    setAlignOption(option);

    reset();
  };

  const handleChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const fileList = e.target.files;

    const promiseUrls: Promise<{ fileName: string; url: string } | undefined>[] = [];

    Array.from({ length: fileList.length }).forEach((_, i) =>
      promiseUrls.push(getPresignedUrl(extractFileExtension(fileList[i].name)))
    );

    const urls = await Promise.all(promiseUrls);

    const request: CreateFileRequest[] = urls.map((item, i) => {
      return {
        fileName: fileList[i].name,
        fileUrl: item?.url ?? '',
        fileKey: item?.fileName ?? '',
        capacity: fileList[i].size,
      };
    });

    mutate({
      params: {
        path: {
          teamId,
        },
        query: {
          folderId: folderId === null ? undefined : folderId,
        },
      },
      body: {
        documents: request,
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
          <Button variant="secondary">삭제된 항목</Button>
          <label css={uploadLabelStyle} htmlFor="drive-file">
            파일 업로드
          </label>
          <input multiple id="drive-file" type="file" css={{ display: 'none' }} onChange={handleChangeFile} />
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
                      <Button variant="tertiary">삭제</Button>
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
                      isSelected={getFolderIsSelected(folder.folderId)}
                      onSelect={() => selectFolder(folder.folderId)}
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
                      isSelected={getDocumentIsSelected(file.documentId)}
                      onSelect={() => selectDocument(file.documentId)}
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

              console.log(file);
              return (
                <FileGrid
                  key={file.documentId}
                  name={file.name}
                  capacity={file.capacity}
                  type={extractFileExtension(file.url) as File}
                  url={file.url}
                  createdTime={file.createdTime}
                  isSelected={getDocumentIsSelected(file.documentId)}
                  onSelect={() => selectDocument(file.documentId!)}
                  isSelectable={isSelectable}
                />
              );
            } else if (hasKeyInObject(item, 'folderId')) {
              const folder = item as FolderItem;
              return (
                <FolderGrid
                  key={folder.folderId}
                  {...folder}
                  onFolderClick={() => setFolderId(folder.folderId)}
                  isSelectable={isSelectable}
                  isSelected={getFolderIsSelected(folder.folderId)}
                  onSelect={() => selectFolder(folder.folderId)}
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
