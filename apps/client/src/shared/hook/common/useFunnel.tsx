import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from 'react';

interface FunnelContextType {
  currentStep: number;
  totalSteps: number;
  nextStep: () => void;
  prevStep: () => void;
  resetSteps: () => void;
  setTotalSteps: (steps: number) => void;
}

const FunnelContext = createContext<FunnelContextType | undefined>(undefined);

export const useFunnel = () => {
  const context = useContext(FunnelContext);
  if (!context) {
    throw new Error('Error: FunnelContext must be used within a FunnelProvider');
  }
  return context;
};

export const FunnelProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [totalSteps, setTotalStepsState] = useState(1);

  const nextStep = useCallback(() => {
    setCurrentStep((prev) => {
      const next = prev < totalSteps ? prev + 1 : prev;
      return next;
    });
  }, [totalSteps]);

  const prevStep = useCallback(() => {
    setCurrentStep((prev) => {
      const prevStep = prev > 1 ? prev - 1 : prev;
      return prevStep;
    });
  }, []);

  const resetSteps = useCallback(() => {
    setCurrentStep(1);
  }, []);

  const setTotalSteps = useCallback((steps: number) => {
    setTotalStepsState(steps);
    setCurrentStep(1);
  }, []);

  useEffect(() => {}, [currentStep]);

  return (
    <FunnelContext.Provider value={{ currentStep, totalSteps, nextStep, prevStep, resetSteps, setTotalSteps }}>
      {children}
    </FunnelContext.Provider>
  );
};
