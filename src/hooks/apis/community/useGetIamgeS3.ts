// hooks/apis/upload/useUploadImageToNcloud.ts

import { api } from '@/api';

interface GetPresignedUrlResponse {
  presignedUrl: string;
}

interface UploadImageRequest {
  file: File;
}

/**
 * 1) 서버에 presigned-url 요청 (GET /community/presigned-url?fileName={file.name})
 * 2) 받은 presignedUrl로 PUT 요청 -> S3에 파일 업로드
 * 3) 최종 업로드된 파일 URL을 반환
 */
export const uploadImageToNcloud = async ({
  file,
}: UploadImageRequest): Promise<string> => {
  if (!file) throw new Error('File is required');

  // (A) response 객체를 먼저 받고, 그 안의 data를 구조 분해
  const response = await api.get<GetPresignedUrlResponse>(
    `/community/presigned-url?fileName=${file.name}`,
  );

  // Axios가 반환하는 건 AxiosResponse<GetPresignedUrlResponse> 이므로,
  // response.data가 우리가 정의한 GetPresignedUrlResponse 타입이 됩니다.
  const { presignedUrl } = response.data;

  // 2) S3에 PUT 요청 (presignedUrl로 업로드)
  await api.put(presignedUrl, file, {
    headers: {
      'Content-Type': file.type,
    },
  });

  // 3) 업로드된 URL 반환 (물음표 앞부분)
  const uploadedImageUrl = presignedUrl.split('?')[0];
  return uploadedImageUrl;
};
