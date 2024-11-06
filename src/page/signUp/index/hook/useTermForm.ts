import { useState } from 'react';

type TermItem = {
  serviceTerm: boolean;
  privatePolicy: boolean;
  personalInfo: boolean;
};

export const useTermForm = () => {
  const [totalAgreeClicked, setTotalAgreeClicked] = useState(false);
  const [termStatus, setTermStatus] = useState<TermItem>({
    serviceTerm: false,
    privatePolicy: false,
    personalInfo: false,
  });

  const isConfirmed = termStatus.serviceTerm && termStatus.privatePolicy;

  const handleAllTermsAgree = () => {
    setTotalAgreeClicked((prev) => !prev);

    setTermStatus({
      serviceTerm: totalAgreeClicked ? false : true,
      privatePolicy: totalAgreeClicked ? false : true,
      personalInfo: totalAgreeClicked ? false : true,
    });
  };

  const handleTermAgree = (key: keyof TermItem) => {
    setTermStatus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return {
    totalAgreeClicked,
    termStatus,
    isConfirmed,
    handleAllTermsAgree,
    handleTermAgree,
  };
};
