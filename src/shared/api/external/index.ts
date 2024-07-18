import mime from 'mime';

import axios from 'axios';

export const putUploadToS3 = async (presignedUrl: string, file: File) => {
  const contentType = mime.getType(file.name) || 'application/octet-stream';

  const response = await axios.put(presignedUrl, file, {
    headers: {
      'Content-Type': contentType,
    },
  });
  console.log('S3', response);

  if (response.status === 200 || response.status === 204) {
    // Presigned URL에서 쿼리 문자열을 제거하여 파일 URL을 생성
    const uploadedFileUrl = presignedUrl.split('?')[0];

    return uploadedFileUrl;
  }
};
