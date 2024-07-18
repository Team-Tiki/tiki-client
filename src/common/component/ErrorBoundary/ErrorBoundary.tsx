import { Component, ComponentType, ErrorInfo, PropsWithChildren } from 'react';

import { AxiosError } from 'axios';

import { HTTP_STATUS_CODE } from '@/shared/constant/api';

type ErrorProps = {
  statusCode?: number;
  resetError?: () => void;
};

type ErrorBoundaryProps = {
  fallback: ComponentType<ErrorProps>;
  onReset?: (error: Error) => void;
};

type State = {
  isError: boolean;
  error: Error | null;
};

const initialState: State = {
  isError: false,
  error: null,
};

class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryProps>, State> {
  state: State = initialState;

  /** Prop으로 인한 Error 발생 시 State Update */
  static getDerivedStateFromError(error: Error): State {
    return { isError: true, error };
  }

  /** 컴포넌트 생명주기 시 발생하는 에러에 대한 처리 */
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.warn(errorInfo);

    this.setState({
      isError: true,
      error,
    });
  }

  /** error를 캐치하여 onReset 함수를 실행하는 콜백 */
  resetErrorBoundary = () => {
    const { onReset } = this.props;
    const { error } = this.state;

    onReset?.(error!);
    this.setState(initialState);
  };

  render() {
    const { fallback, children } = this.props;
    const { error } = this.state;

    const FallbackComponent = fallback;

    if (error) {
      return (
        <FallbackComponent
          statusCode={error instanceof AxiosError ? error.response?.status : HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR}
          resetError={this.resetErrorBoundary}
        />
      );
    }

    return children;
  }
}

export default ErrorBoundary;
