import { IcSearch } from '@tiki/icon';
import { Flex, Input, Text } from '@tiki/ui';
import { useDebounce } from '@tiki/utils';

import { useState } from 'react';

import Item from '@/page/archiving/index/component/DocumentBar/Item/Item';
import { blockNameStyle } from '@/page/archiving/index/component/DocumentBar/Item/Item.style';
import Sort from '@/page/archiving/index/component/DocumentBar/Sort/Sort';
import { useTotalDocumentQuery } from '@/page/archiving/index/hook/api/useTotalDocumentQuery';
import { DocumentType } from '@/page/archiving/index/type/documentType';

import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

const DocumentTotal = () => {
  const [selected, setSelected] = useState('최근 업로드 순');

  const teamId = useInitializeTeamId();
  const { data: documentDatas } = useTotalDocumentQuery(teamId, 'executive');

  // input에 입력되는 검색값
  const [searchWord, setSearchWord] = useState('');

  // 디바운스 되어 문서 필터링할때 사용될 검색어
  const filterKeyword = useDebounce(searchWord, 500);

  // 필터링된 문서 배열
  const filteredDocuments = documentDatas?.data.documents?.filter((document) =>
    document.fileName.normalize('NFC').includes(filterKeyword.normalize('NFC'))
  );

  const handleSelected = (option: string) => {
    setSelected(option);
  };

  return (
    <Flex tag={'section'} styles={{ direction: 'column', padding: '1.6rem' }}>
      <Flex styles={{ direction: 'column', align: 'flex-end', width: '24.8rem', gap: '1.6rem' }}>
        <Input
          placeholder={'문서를 검색해보세요'}
          value={searchWord}
          LeftIcon={<IcSearch />}
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
          style={{ boxShadow: 'none' }}
        />
        <Sort selected={selected} onSelected={handleSelected} />
      </Flex>

      <Flex tag="ul" styles={{ direction: 'column', marginTop: '1.6rem', gap: '0.8rem' }}>
        {(selected === '최근 업로드 순' ? filteredDocuments : filteredDocuments && filteredDocuments.reverse())?.map(
          (data: DocumentType) => (
            <Item key={data.documentId} documentId={data.documentId} fileUrl={data.fileUrl} fileName={data.fileName}>
              <div>
                <Text tag="body8" css={blockNameStyle(data.color)}>
                  {data.blockName}
                </Text>
              </div>
            </Item>
          )
        )}
      </Flex>
    </Flex>
  );
};

export default DocumentTotal;
