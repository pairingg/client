import { api } from '@/api';

interface GetPresignedUrlResponse {
  url: string;
}

export const uploadImageToNcloud = async ({
  file,
}: {
  file: File;
}): Promise<string> => {
  if (!file) throw new Error('File is required');

  // 프리사인 URL 요청: fileName과 contentType을 쿼리 파라미터로 전달
  const response = await api.get<GetPresignedUrlResponse>(
    `/community/presigned-url?fileName=${encodeURIComponent(file.name)}&contentType=${encodeURIComponent(file.type)}`,
  );

  const { url } = response;

  // S3에 파일 업로드
  await api.put(url, file, {
    headers: {
      'Content-Type': file.type,
    },
  });

  // 최종 업로드된 파일 URL은 url의 '?' 앞부분
  const uploadedImageUrl = url.split('?')[0];
  return uploadedImageUrl;
};
