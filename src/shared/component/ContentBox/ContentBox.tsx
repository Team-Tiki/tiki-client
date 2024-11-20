import { ComponentPropsWithoutRef, ReactNode } from 'react';

import IcFile from '@/common/asset/svg/ic_file.svg?react';
import ICNote from '@/common/asset/svg/ic_note.svg?react';
import IcHandover from '@/common/asset/svg/ic_sticky_note_2.svg?react';
import IcTimeLine from '@/common/asset/svg/ic_timeline.svg?react';
import IcDeleted from '@/common/asset/svg/ic_trash.svg?react';
import Heading from '@/common/component/Heading/Heading';
import { scrollStyle } from '@/common/style/scroll';

import {
  contentOptionStyle,
  contentStyle,
  descriptionStyle,
  headerStyle,
  sectionStyle,
  titleAlignStyle,
  titleStyle,
} from '@/shared/component/ContentBox/ContentBox.style';
import { Content } from '@/shared/type/content';

interface ContentBoxProps extends ComponentPropsWithoutRef<'section'> {
  /** ContentBox를 활용할 도메인, timeline | file | deleted | handover*/
  variant: Content;

  title: string;
  description?: string;
  children: ReactNode;

  headerOption?: ReactNode;
  contentOption?: ReactNode;
}

const ICON_BY_VARIANT = {
  timeline: <IcTimeLine width={16} height={16} />,
  file: <IcFile width={16} height={16} />,
  deleted: <IcDeleted width={16} height={16} />,
  handover: <ICNote width={16} height={16} />,
  handover: <IcHandover width={16} height={16} />,
};

const ContentBox = ({
  variant,
  title,
  headerOption,
  contentOption,
  description,
  children,
  ...props
}: ContentBoxProps) => {
  return (
    <section css={sectionStyle} {...props}>
      <header css={headerStyle}>
        <div css={titleAlignStyle}>
          <Heading css={titleStyle} tag="H2">
            {ICON_BY_VARIANT[variant]}
            {title}
          </Heading>
          <p css={descriptionStyle}>{description}</p>
        </div>
        {headerOption}
      </header>

      <div css={contentOptionStyle}>{contentOption}</div>

      <div css={[contentStyle, scrollStyle]}>{children}</div>
    </section>
  );
};

export default ContentBox;
