import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  position: 'absolute',
  backgroundColor: 'white',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  padding: '16px',
  zIndex: 100,
  width: '288px',
});
