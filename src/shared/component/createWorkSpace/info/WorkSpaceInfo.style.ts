import { css } from '@emotion/react';

export const sectionStyle = css({
  //textAlign: 'center',
});

export const headingStyle = css({
  fontWeight: 600,

  marginTop: '1.6rem',
});

export const textStyle = css({
  marginTop: '1.2rem',
});

export const stepStyle = (step: number | undefined) =>
  css({
    display: step === undefined ? 'none' : 'block',
  });
