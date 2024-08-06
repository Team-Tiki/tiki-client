import { useDeleteFileMutation } from '@/page/archiving/createTimeBlock/hook/api/useDeleteFileMutation';
import { usePutUploadMutation } from '@/page/archiving/createTimeBlock/hook/api/usePutUploadMutation';

import { useEffect, useRef, useState } from 'react';

import TeamProfileAdd from '@/common/asset/svg/team-profile-add.svg?react';
import TeamProfileDelete from '@/common/asset/svg/team-profile-delete.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';

import useGetFileQuery from '@/shared/component/createWorkSpaceModal/hook/api/useGetFileQuery';
import { usePostTeamMutation } from '@/shared/component/createWorkSpaceModal/hook/api/usePostTeamMutation';
import WorkSapceInfo from '@/shared/component/createWorkSpaceModal/info/WorkSpaceInfo';
import {
  buttonCompleteStyle,
  imageAddStyle,
  imageBoxStyle,
  imageDeleteStyle,
} from '@/shared/component/createWorkSpaceModal/modalContents/image/WorkSpaceImage.style';
import { sectionStyle } from '@/shared/component/createWorkSpaceModal/modalContents/name/WorkSpaceName.style';
import { useWorkSpaceContext } from '@/shared/hook/common/useWorkSpaceContext';

const WorkSpaceImage = () => {
  const [fileURL, setFileURL] = useState<string>('');
  const imgUploadInput = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [, setPresignedUrl] = useState<string | null>(null);

  const { mutate: uploadToS3Mutate } = usePutUploadMutation();
  const { mutate: deleteFileMutate } = useDeleteFileMutation();

  const { data: fileData } = useGetFileQuery(file as File);

  // 모달
  const { setFormData, nextStep, reset, formData } = useWorkSpaceContext();
  const { mutate: postTeamMutate } = usePostTeamMutation();

  useEffect(() => {
    if (file && fileData) {
      const newFileURL = URL.createObjectURL(file);
      setFileURL(newFileURL);
      const url = fileData?.url;
      if (url) {
        setPresignedUrl(url);
        uploadToS3Mutate(
          { presignedUrl: url, file },
          {
            onSuccess: (uploadedFileUrl) => {
              if (uploadedFileUrl) {
                URL.revokeObjectURL(newFileURL);
                setFileURL(uploadedFileUrl);
                setFormData({ fileUrlData: uploadedFileUrl });
              }
            },
          }
        );
      }
    }
  }, [file, fileData, uploadToS3Mutate, setFormData]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const newFileURL = URL.createObjectURL(selectedFile);
      setFileURL(newFileURL);
      setFile(selectedFile);
      setFormData({ fileUrlData: '' });
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
            setFormData({ fileUrlData: '' });
            if (imgUploadInput.current) {
              imgUploadInput.current.value = '';
            }
          },
        }
      );
    }
  };

  const handleSave = () => {
    postTeamMutate(
      {
        name: formData.name,
        category: formData.category,
        iconImageUrl: formData.fileUrlData,
      },
      {
        onSuccess: async () => {
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
