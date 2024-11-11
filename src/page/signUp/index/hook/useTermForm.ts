import { useState } from 'react';

type TermItem = {
  serviceTerm: boolean;
  privatePolicy: boolean;
  personalInfo: boolean;
};

export const useTermForm = () => {
  const [isTotalAgreeClicked, setIsTotalAgreeClicked] = useState(false);
  const [termStatus, setTermStatus] = useState<TermItem>({
    serviceTerm: false,
    privatePolicy: false,
    personalInfo: false,
  });

  const isConfirmed = termStatus.serviceTerm && termStatus.privatePolicy;

  const handleAllTermsAgree = () => {
    setIsTotalAgreeClicked((prev) => !prev);

    setTermStatus({
      serviceTerm: isTotalAgreeClicked ? false : true,
      privatePolicy: isTotalAgreeClicked ? false : true,
      personalInfo: isTotalAgreeClicked ? false : true,
    });
  };

  const handleTermAgree = (key: keyof TermItem) => {
    setTermStatus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return {
    isTotalAgreeClicked,
    termStatus,
    isConfirmed,
    handleAllTermsAgree,
    handleTermAgree,
  };
};
