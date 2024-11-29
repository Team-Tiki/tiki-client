import { IcFile, IcNote, IcTimeline, IcTrash } from '@tiki/icon';
import { Heading, scrollStyle } from '@tiki/ui';

import { ComponentPropsWithoutRef, ReactNode } from 'react';

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
  timeline: <IcTimeline width={16} height={16} />,
  file: <IcFile width={16} height={16} />,
  deleted: <IcTrash width={16} height={16} />,
  handover: <IcNote width={16} height={16} />,
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
