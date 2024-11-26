import { useCallback, useState } from "react";

export const useErrorBoundar = <ErrorType extends Error>() => {
  const [error, setError] = useState<ErrorType | null>(null);

  if (error != null) {
    throw error;
  }

  const handleError = useCallback((error: ErrorType) => {
    setError(error);
  }, []);

  return { handleError };
};
