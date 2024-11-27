import { ReactNode } from 'react';

import { useFunnel } from '@/shared/hook/common/funnelContext';

interface FunnelStepProps {
  step: number;
  children: ReactNode;
}

export const FunnelStep = ({ step, children }: FunnelStepProps) => {
  const { currentStep } = useFunnel();
  console.log(`FunnelStep step: ${step}, currentStep: ${currentStep}`); // 디버깅용
  return currentStep === step ? <>{children}</> : null;
};
