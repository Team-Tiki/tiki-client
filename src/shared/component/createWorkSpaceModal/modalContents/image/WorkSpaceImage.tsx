import { useDeleteFileMutation } from '@/page/archiving/createTimeBlock/hook/api/useDeleteFileMutation';
import { usePutUploadMutation } from '@/page/archiving/createTimeBlock/hook/api/usePutUploadMutation';

import { useCallback, useRef, useState } from 'react';

import TeamProfileAdd from '@/common/asset/svg/team-profile-add.svg?react';
import TeamProfileDelete from '@/common/asset/svg/team-profile-delete.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Label from '@/common/component/Label/Label';

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

interface WorkSpaceImageProps {
  step: number;
}

const WorkSpaceImage = ({ step }: WorkSpaceImageProps) => {
  const [fileURL, setFileURL] = useState<string>('');
  const imgUploadInput = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const { mutate: uploadToS3Mutate } = usePutUploadMutation();
  const { mutate: deleteFileMutate } = useDeleteFileMutation();
  const { data: fileData, refetch: refetchFileData } = useGetFileQuery(file as File);

  const { setFormData, nextStep, formData } = useWorkSpaceContext();
  const { mutate: postTeamMutate } = usePostTeamMutation();

  const handleFileUpload = useCallback(
    (selectedFile: File, presignedUrl: string) => {
      const newFileURL = URL.createObjectURL(selectedFile);
      setFileURL(newFileURL);
      uploadToS3Mutate(
        { presignedUrl, file: selectedFile },
        {
          onSuccess: (uploadedFileUrl) => {
            URL.revokeObjectURL(newFileURL);
            if (uploadedFileUrl) {
              setFileURL(uploadedFileUrl);
              setFormData({ fileUrlData: uploadedFileUrl });
            }
          },
        }
      );
    },
    [uploadToS3Mutate, setFormData]
  );

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFileURL(URL.createObjectURL(selectedFile));
      setFile(selectedFile);
      setFormData({ fileUrlData: '' });

      // 파일을 선택한 후에 fileData를 refetch하여 handleFileUpload 호출
      const { data } = await refetchFileData();
      if (data?.url) {
        handleFileUpload(selectedFile, data.url);
      }
    }
  };

  const handleImageRemove = () => {
    if (fileData?.fileName) {
      deleteFileMutate(
        { fileName: fileData.fileName },
        {
          onSuccess: () => {
            URL.revokeObjectURL(fileURL);
            setFileURL('');
            setFile(null);
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

  if (step !== 3) return null;

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
          <Label id="imgUploadInput" css={imageAddStyle}>
            <TeamProfileAdd width={200} height={200} />
          </Label>
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
