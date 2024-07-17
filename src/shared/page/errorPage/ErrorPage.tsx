import errorImg from '@/common/asset/img/error.png';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';
import { theme } from '@/common/style/theme/theme';

import { HTTP_ERROR_MESSAGE, HTTP_STATUS_CODE } from '@/shared/constant/api';
import { pageStyle, viewStyle } from '@/shared/page/errorPage/ErrorPage.style';

interface ErrorPageProps {
  statusCode?: number;
  onReset?: () => void;
}

const ErrorPage = ({ statusCode = HTTP_STATUS_CODE.NOT_FOUND, onReset }: ErrorPageProps) => {
  const isHTTPError =
    statusCode === HTTP_STATUS_CODE.BAD_REQUEST || HTTP_STATUS_CODE.NOT_FOUND || HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR;

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
        <Button variant="action" onClick={onReset}>
          돌아가기
        </Button>
      </div>
    </section>
  );
};

export default ErrorPage;
