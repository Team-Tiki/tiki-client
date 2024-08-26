import * as Sentry from '@sentry/react';

import { Component, ComponentType, PropsWithChildren } from 'react';

import { HTTPError } from '@/shared/api/HTTPError';
import { HTTP_STATUS_CODE } from '@/shared/constant/api';

type FallbackProps = {
  statusCode?: number;
  resetError?: () => void;
};

type ErrorBoundaryProps = {
  fallback: ComponentType<FallbackProps>;
  onReset?: (error: Error) => void;
};

type ErrorState = {
  isError: boolean;
  error: Error | null;
};

const initialState: ErrorState = {
  isError: false,
  error: null,
};

class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryProps>, ErrorState> {
  state: ErrorState = initialState;

  /** Prop으로 인한 Error 발생 시 State Update */
  static getDerivedStateFromError(error: Error | HTTPError): ErrorState {
    return { isError: true, error };
  }

  /** 컴포넌트 생명주기 시 발생하는 에러에 대한 처리 */
  componentDidCatch(error: Error | HTTPError): void {
    Sentry.withScope((scope) => {
      scope.setLevel('error');
      Sentry.captureMessage(`[${error.name}] ${window.location.href}`);
    });

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
          statusCode={error instanceof HTTPError ? error.statusCode : HTTP_STATUS_CODE.NOT_FOUND}
          resetError={this.resetErrorBoundary}
        />
      );
    }

    return children;
  }
}

export default ErrorBoundary;
