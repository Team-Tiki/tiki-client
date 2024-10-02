import { css } from '@emotion/react';

interface DotsProps {
  currentIdx: number;
  length: number;
}

const Dots = ({ currentIdx, length }: DotsProps) => {
  return (
    <div css={dotContainerStyle}>
      {Array.from({ length }).map((_, index) => (
        <Dot key={index} isCurrent={index + 1 === currentIdx} />
      ))}
    </div>
  );
};

export default Dots;

type DotProps = {
  isCurrent: boolean;
};

const Dot = ({ isCurrent }: DotProps) => {
  return <div css={dotStyle(isCurrent)} />;
};

const dotContainerStyle = css`
  display: flex;
  gap: 0.8rem;

  position: absolute;
  bottom: 1.6rem;
  left: 50%;

  transform: translateX(-50%);
`;

const dotStyle = (isCurrent: boolean) =>
  css({
    width: '0.6rem',
    height: '0.6rem',

    opacity: isCurrent ? 0.8 : 0.3,

    borderRadius: '50%',
    backgroundColor: 'white',
  });
