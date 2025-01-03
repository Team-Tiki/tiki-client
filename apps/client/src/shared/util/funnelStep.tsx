import { ReactNode } from 'react';

import { useFunnel } from '@/shared/hook/common/useFunnel';

interface FunnelStepProps {
  step: number;
  children: ReactNode;
}

export const FunnelStep = ({ step, children }: FunnelStepProps) => {
  const { currentStep } = useFunnel();

  return currentStep === step ? <>{children}</> : null;
};
