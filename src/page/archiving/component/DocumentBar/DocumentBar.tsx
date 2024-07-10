import { containerStyle, documentListStyle } from '@/page/archiving/component/DocumentBar/DocumentBar.style';
import DocumentBarInfo from '@/page/archiving/component/DocumentBar/DocumentBarInfo/DocumentBarInfo';
import DocumentBarTab from '@/page/archiving/component/DocumentBar/DocumentBarTab/DocumentBarTab';
import DocumentItem from '@/page/archiving/component/DocumentBar/DocumentItem/DocumentItem';

import { useState } from 'react';

import Flex from '@/common/component/Flex/Flex';

import { BLOCK_TEST_DATA } from './constant';

const DocumentBar = () => {
  const [wholeDocument, setWholeDocument] = useState(false);
  const handleTabClick = () => {
    setWholeDocument((prev) => !prev);
  };

  // 목업 데이터
  const blockData = BLOCK_TEST_DATA;

  return (
    <aside css={containerStyle}>
      <DocumentBarTab wholeDocument={wholeDocument} handleTabClick={handleTabClick} />
      <Flex styles={{ direction: 'column', align: 'center', padding: '2.4rem 1.6rem 0 2.4rem' }}>
        <DocumentBarInfo blockName={blockData.title} startDate={blockData.startDate} endDate={blockData.endDate} />
        <ul css={documentListStyle}>
          {blockData.filesUrl.map((data) => (
            <DocumentItem wholeDocument={wholeDocument} blockName={blockData.title}>
              {data.fileName}
            </DocumentItem>
          ))}
        </ul>
      </Flex>
    </aside>
  );
};

export default DocumentBar;
