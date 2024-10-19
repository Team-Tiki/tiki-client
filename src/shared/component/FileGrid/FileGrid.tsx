import IcImage from '@/common/asset/svg/ic_image_file.svg?react';
import IcPDF from '@/common/asset/svg/ic_pdf_file.svg?react';
import IcOption from '@/common/asset/svg/ic_three_dots.svg?react';
import IcWord from '@/common/asset/svg/ic_word_file.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';

import { cardStyle, iconWrapperStyle, nameStyle, textStyle } from '@/shared/component/FileGrid/FileGrid.style';
import { getFileVolume } from '@/shared/util/file';

type FileGridProps = {
  title: string;
  /** API 명세에 따라 달라질 수 있음 + 추후 삭제 */
  type: 'pdf' | 'image' | 'word';
  volume: number;
};

const ICON_BY_FILETYPE = {
  pdf: <IcPDF width={40} height={40} />,
  word: <IcWord width={40} height={40} />,
  image: <IcImage width={40} height={40} />,
};

const FileGrid = ({ title, type, volume }: FileGridProps) => {
  return (
    <article css={cardStyle}>
      <div css={iconWrapperStyle}>{ICON_BY_FILETYPE[type]}</div>
      <Flex
        styles={{
          direction: 'column',
          gap: '1.2rem',
        }}>
        <Flex styles={{ width: '100%', justify: 'space-between', align: 'center' }}>
          <Heading css={nameStyle} tag="H3">
            {title}
          </Heading>
          <IcOption width={16} height={16} />
        </Flex>

        <Flex styles={{ width: '100%', justify: 'space-between', align: 'center' }}>
          <p css={textStyle}>{type} 문서</p>
          <p css={textStyle}>{getFileVolume(volume)}</p>
        </Flex>
      </Flex>
    </article>
  );
};

export default FileGrid;
