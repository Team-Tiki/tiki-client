import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const landingStyle = css({
  position: 'relative',

  height: '100vh',

  overflowY: 'auto',
  scrollSnapType: 'y mandatory',

  '& > section': {
    height: '100vh',
  },

  '& > .observer_shown': {
    '& > div': {
      transform: 'translateY(0)',
      opacity: 1,

      transition: 'all .5s ease-in-out',
    },
    '& h1': {
      transform: 'translateY(0)',
      opacity: 1,

      transition: 'all .5s ease-in-out',
    },
    '& p': {
      transform: 'translateY(0)',
      opacity: 1,

      transition: 'all .5s ease-in-out',
    },
  },
});

export const sectionStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.4rem',

  padding: '9rem',

  scrollSnapAlign: 'start',
});

export const startedButtonStyle = css({
  width: '32rem',

  marginTop: '0.8rem',

  borderRadius: '16px',

  fontSize: theme.text.body01.fontSize,
  lineHeight: theme.text.body01.lineHeight,
});

export const textWrapperStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const featureSectionStyle = css({
  position: 'relative',
  height: '100vh',

  padding: '9rem',

  scrollSnapAlign: 'start',

  overflow: 'hidden',
});

export const viewImgStyle = css({
  width: '100%',
  height: '100%',

  objectFit: 'cover',
});

export const firstImgWrapperStyle = css({
  display: 'flex',
  flexDirection: 'column',

  position: 'sticky',

  width: 'calc(100vw - 39rem)',
  minWidth: '40rem',

  margin: '0 auto',

  aspectRatio: '1.87 / 1',

  /** observe 시 스타일 적용 전 */
  opacity: 0,
  transform: 'translateY(2rem)',
});

export const secondImgWrapperStyle = css({
  display: 'flex',
  flexDirection: 'column',

  width: '80%',
  aspectRatio: '3 / 2',

  /** observe 시 스타일 적용 전 */
  opacity: 0,
  transform: 'translateY(2rem)',
});

export const hideStyle = css({
  /** observe 시 스타일 적용 전 */
  opacity: 0,
  transform: 'translateY(2rem)',
});

export const arrowStyle = css({
  position: 'absolute',
  bottom: '4rem',

  cursor: 'pointer',
});

export const secondCharacterStyle = css({
  width: '30%',
  height: '30%',
  placeSelf: 'end',

  objectFit: 'cover',
});
