import { BlockType } from '@/page/archiving/type/blockType';
import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = (blockSelected: BlockType) =>
  css({
    position: 'sticky',

    top: '0',
    right: '0',

    zIndex: theme.zIndex.overlayTop,

    height: '100vh',

    borderRadius: '16px',

    backgroundColor: theme.colors.white,
    boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.10)',

    transform: blockSelected ? 'translateX(0)' : 'translateX(28rem)',
    transition: '0.5s',

    animation: '0.5s',
  });
