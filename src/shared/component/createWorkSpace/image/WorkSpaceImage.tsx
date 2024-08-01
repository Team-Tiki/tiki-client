import { useDeleteFileMutation } from '@/page/archiving/createTimeBlock/hook/api/useDeleteFileMutation';
import { usePutUploadMutation } from '@/page/archiving/createTimeBlock/hook/api/usePutUploadMutation';

import { useEffect, useRef, useState } from 'react';

import TeamProfileAdd from '@/common/asset/svg/team-profile-add.svg?react';
import TeamProfileDelete from '@/common/asset/svg/team-profile-delete.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Modal from '@/common/component/Modal/Modal';

import useGetFileQuery from '@/shared/component/createWorkSpace/hook/api/useGetFileQuery';
import {
  buttonCompleteStyle,
  imageAddStyle,
  imageBoxStyle,
  imageDeleteStyle,
} from '@/shared/component/createWorkSpace/image/WorkSpaceImage.style';
import WorkSapceInfo from '@/shared/component/createWorkSpace/info/WorkSpaceInfo';
import { sectionStyle } from '@/shared/component/createWorkSpace/name/WorkSpaceName.style';
import { useModalState, useNextStep, useToggleModal } from '@/shared/store/modal';
import { useWorkSpaceContext } from '@/shared/store/modalContext';

import { usePostTeamMutation } from '../hook/api/usePostTeamMutation';

interface WorkSpaceImageProps {
  onFileUrlData: (file: string) => void;
  isComplete: (isComplete: boolean) => void;
}

const WorkSpaceImage = () => {
  const [fileURL, setFileURL] = useState<string>('');
  const imgUploadInput = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [, setPresignedUrl] = useState<string | null>(null);

  const { mutate: uploadToS3Mutate } = usePutUploadMutation();
  const { mutate: deleteFileMutate } = useDeleteFileMutation();

  const { data: fileData } = useGetFileQuery(file as File);

  // 모달
  const isOpenModal = useModalState('image');
  const toggleModal = useToggleModal();
  const nextStep = useNextStep();
  const { setFileUrlData, name, category } = useWorkSpaceContext();
  const { mutate: postTeamMutate } = usePostTeamMutation();

  useEffect(() => {
    if (file && fileData) {
      const url = fileData?.url;
      if (url) {
        setPresignedUrl(url);
        uploadToS3Mutate(
          { presignedUrl: url, file },
          {
            onSuccess: (uploadedFileUrl) => {
              if (uploadedFileUrl) {
                setFileURL(uploadedFileUrl);
                setFileUrlData(uploadedFileUrl);
              }
            },
          }
        );
      }
    }
  }, [file, fileData, uploadToS3Mutate, setFileUrlData]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const newFileURL = URL.createObjectURL(selectedFile);
      setFileURL(newFileURL);
      setFile(selectedFile);
      setFileUrlData('');
    }
  };

  const handleImageRemove = () => {
    if (fileData?.fileName) {
      deleteFileMutate(
        { fileName: fileData?.fileName },
        {
          onSuccess: () => {
            URL.revokeObjectURL(fileURL);
            setFileURL('');
            setFile(null);
            setPresignedUrl(null);
            setFileUrlData('');
            if (imgUploadInput.current) {
              imgUploadInput.current.value = '';
            }
          },
        }
      );
    }
  };

  console.log(name);
  console.log(category);

  const handleSave = () => {
    postTeamMutate(
      {
        name,
        category,
        iconImageUrl: fileURL,
      },
      {
        onSuccess: () => {
          nextStep();
        },
      }
    );
  };

  return (
    <Flex tag={'section'} styles={{ direction: 'column', justify: 'center', align: 'center' }} css={sectionStyle}>
      <WorkSapceInfo
        step="image"
        title="동아리 프로필 이미지 등록"
        info="우리 동아리의 프로필에 표시할 이미지를 등록해주세요"
      />
      <div css={imageBoxStyle}>
        {fileURL ? (
          <img src={fileURL} alt="프로필 이미지" css={imageAddStyle} />
        ) : (
          <label htmlFor="imgUploadInput" css={imageAddStyle}>
            <TeamProfileAdd css={{ width: '20rem', height: '20rem' }} />
          </label>
        )}
        {fileURL && <TeamProfileDelete css={imageDeleteStyle} onClick={handleImageRemove} />}
      </div>
      <input
        id="imgUploadInput"
        css={{ display: 'none' }}
        type="file"
        accept="image/*"
        ref={imgUploadInput}
        onChange={handleImageChange}
      />
      <Button css={buttonCompleteStyle} variant="primary" size="medium" onClick={handleSave}>
        완료
      </Button>
    </Flex>
  );
};

export default WorkSpaceImage;
