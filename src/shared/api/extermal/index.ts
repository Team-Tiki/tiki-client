import mime from 'mime';

import { isAxiosError } from 'axios';

const MESSAGES = {
  UNKNOWN_ERROR: '알 수 없는 오류가 발생했습니다. 다시 시도해주세요.',
};

export const putUploadToS3 = async (presignedUrl: string, file: File): Promise<string> => {
  try {
    const contentType = mime.getType(file.name) || 'application/octet-stream';
    console.log('파일 mime', contentType);

    const response = await fetch(presignedUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': contentType,
      },
      body: file,
    });

    console.log(response);

    return await response.json();
  } catch (error) {
    if (isAxiosError(error)) throw error;
    throw new Error(MESSAGES.UNKNOWN_ERROR);
  }
};
