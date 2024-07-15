import mime from 'mime';

import axios, { isAxiosError } from 'axios';

const MESSAGES = {
  UNKNOWN_ERROR: '알 수 없는 오류가 발생했습니다. 다시 시도해주세요.',
};

export const putUploadToS3 = async (presignedUrl: string, file: File) => {
  try {
    const contentType = mime.getType(file.name) || 'application/octet-stream';
    console.log('mime', contentType);

    const response = await axios.put(presignedUrl, file, {
      headers: {
        'Content-Type': contentType,
      },
    });

    if (response.status === 200 || response.status === 204) {
      console.log('파일 업로드 성공', response);

      // Presigned URL에서 쿼리 문자열을 제거하여 파일 URL을 생성
      const uploadedFileUrl = presignedUrl.split('?')[0];
      return uploadedFileUrl;
    } else {
      throw new Error(`파일 업로드 실패: ${response.status}`);
    }
  } catch (error) {
    console.error('S3 업로드 오류:', error);
    if (isAxiosError(error)) {
      throw error;
    }

    throw new Error(MESSAGES.UNKNOWN_ERROR);
  }
};
