import { css } from '@emotion/react';

interface DotsProps {
  currentIdx: number;
  length: number;
  moveToIndex?: (index: number) => void;
}

const Dots = ({ currentIdx, length, moveToIndex }: DotsProps) => {
  return (
    <div css={dotContainerStyle}>
      {Array.from({ length }).map((_, index) => (
        <Dot onClick={() => moveToIndex?.(index + 1)} key={index} isCurrent={index + 1 === currentIdx} />
      ))}
    </div>
  );
};

export default Dots;

type DotProps = {
  isCurrent: boolean;
  onClick: () => void;
};

const Dot = ({ onClick, isCurrent }: DotProps) => {
  return <div onClick={onClick} css={dotStyle(isCurrent)} />;
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

    opacity: isCurrent ? 1 : 0.3,

    borderRadius: '50%',
    backgroundColor: 'white',

    cursor: 'pointer',
  });
