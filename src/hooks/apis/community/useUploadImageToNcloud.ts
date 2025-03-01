import { api } from '@/api';

interface GetPresignedUrlResponse {
  presignedUrl: string;
}

export const uploadImageToNcloud = async ({
  file,
}: {
  file: File;
}): Promise<string> => {
  if (!file) throw new Error('File is required');

  // 프리사인 URL 요청
  const response = await api.get<GetPresignedUrlResponse>(
    `/community/presigned-url?fileName=${encodeURIComponent(file.name)}`,
  );
  const { presignedUrl } = response;

  // S3에 파일 업로드
  await api.put(presignedUrl, file, {
    headers: {
      'Content-Type': file.type,
    },
  });

  const uploadedImageUrl = presignedUrl.split('?')[0];
  return uploadedImageUrl;
};
