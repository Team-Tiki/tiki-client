import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Search from '@/common/asset/svg/search.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';
import Text from '@/common/component/Text/Text';
import { useDebounce } from '@/common/hook';

import Sort from '@/page/archiving/index/component/DocumentBar/Sort/Sort';

import { blockNameStyle } from '@/page/archiving/index/component/DocumentBar/Item/Item.style';
import { useTotalDocumentQuery } from '@/page/archiving/index/hook/api/useTotalDocumentQuery';
import { DocumentType } from '@/page/archiving/index/type/documentType';
import Item from '@/page/archiving/index/component/DocumentBar/Item/Item';

const DocumentTotal = () => {
  const [selected, setSelected] = useState('최근 업로드 순');

  const location = useLocation();
  const teamId = new URLSearchParams(location.search).get('teamId');

  if (!teamId) throw new Error('has no teamId');

  const { data: documentDatas } = useTotalDocumentQuery(+teamId, 'executive');

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
          size="small"
          placeholder={'문서를 검색해보세요'}
          variant={'colored'}
          LeftIcon={<Search width={14} height={14} style={{ marginRight: '1rem' }} />}
          value={searchWord}
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
            <Item
              key={data.documentId}
              documentId={data.documentId}
              fileUrl={data.fileUrl}
              fileName={data.fileName}>
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
