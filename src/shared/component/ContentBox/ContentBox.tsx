import { ComponentPropsWithoutRef, ReactNode } from 'react';

import IcFile from '@/common/asset/svg/ic_file.svg?react';
import IcTimeLine from '@/common/asset/svg/ic_timeline.svg?react';
import IcDeleted from '@/common/asset/svg/ic_trash.svg?react';
import Divider from '@/common/component/Divider/Divider';
import Heading from '@/common/component/Heading/Heading';

import {
  contentOptionStyle,
  headerStyle,
  sectionStyle,
  titleStyle,
} from '@/shared/component/ContentBox/ContentBox.style';
import { Content } from '@/shared/type/content';

interface ContentBoxProps extends ComponentPropsWithoutRef<'section'> {
  /** ContentBox를 활용할 도메인, timeline | file | deleted */
  variant: Content;

  title: string;
  children: ReactNode;

  headerOption?: ReactNode;
  contentOption?: ReactNode;
}

const ICON_BY_VARIANT = {
  timeline: <IcTimeLine width={16} height={16} />,
  file: <IcFile width={16} height={16} />,
  deleted: <IcDeleted width={16} height={16} />,
};

const ContentBox = ({ variant, title, headerOption, contentOption, children }: ContentBoxProps) => {
  return (
    <section css={sectionStyle}>
      <header css={headerStyle}>
        <Heading css={titleStyle} tag="H2">
          {ICON_BY_VARIANT[variant]}
          {title}
        </Heading>
        {headerOption}
      </header>
      <Divider size={100} />
      <div css={contentOptionStyle}>{contentOption}</div>
      {children}
    </section>
  );
};

export default ContentBox;
