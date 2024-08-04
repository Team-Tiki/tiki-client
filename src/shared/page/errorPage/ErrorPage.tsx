import { useNavigate } from 'react-router-dom';

import errorImg from '@/common/asset/img/error.png';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';
import { useTokenError } from '@/common/hook/useTokenError';
import { theme } from '@/common/style/theme/theme';

import { HTTP_ERROR_MESSAGE, HTTP_STATUS_CODE } from '@/shared/constant/api';
import { pageStyle, viewStyle } from '@/shared/page/errorPage/ErrorPage.style';

interface ErrorPageProps {
  statusCode?: number;
  resetError?: () => void;
}

const ErrorPage = ({ statusCode = HTTP_STATUS_CODE.NOT_FOUND, resetError }: ErrorPageProps) => {
  const isHTTPError = statusCode === HTTP_STATUS_CODE.CONTENT_TOO_LARGE ? HTTP_STATUS_CODE.BAD_REQUEST : statusCode;

  const navigate = useNavigate();

  const { handleTokenError } = useTokenError();

  if (statusCode === HTTP_STATUS_CODE.UNAUTHORIZED) {
    /** 모든 캐시 및 스토리지 clear 후 초기 화면으로 리다이렉트 */
    handleTokenError();

    return null;
  }

  if (!isHTTPError) return null;

  return (
    <section css={viewStyle}>
      <div css={pageStyle}>
        <img src={errorImg} alt="error character" />
        <Flex styles={{ direction: 'column', align: 'center', gap: '1.2rem' }}>
          <Heading tag="H3" css={{ fontWeight: '600', whiteSpace: 'nowrap' }}>
            {HTTP_ERROR_MESSAGE[statusCode as keyof typeof HTTP_ERROR_MESSAGE].HEADING}
          </Heading>
          <Text tag="body3" css={{ color: theme.colors.gray_700, whiteSpace: 'nowrap' }}>
            {HTTP_ERROR_MESSAGE[statusCode as keyof typeof HTTP_ERROR_MESSAGE].TEXT}
          </Text>
        </Flex>
        <Button variant="action" onClick={resetError ?? (() => navigate(-1))}>
          {HTTP_ERROR_MESSAGE[statusCode as keyof typeof HTTP_ERROR_MESSAGE].REDIRECT}
        </Button>
      </div>
    </section>
  );
};

export default ErrorPage;
