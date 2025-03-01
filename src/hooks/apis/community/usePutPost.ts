import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/api';
import type { Post, PostUpdate } from '@/types/community';

import { uploadImageToNcloud } from './useUploadImageToNcloud';

export interface PostUpdateWithFile extends PostUpdate {
  file?: File;
}

const updatePost = async (
  postId: number,
  data: PostUpdateWithFile,
): Promise<Post> => {
  let imageUrl = data.imageUrl;
  if (data.file) {
    imageUrl = await uploadImageToNcloud({ file: data.file });
  }
  return await api.put<Post>(`/community/${postId}`, {
    content: data.content,
    imageUrl,
  });
};

export const useUpdatePostWithS3 = () => {
  const queryClient = useQueryClient();

  return useMutation<Post, Error, { postId: number; data: PostUpdateWithFile }>(
    {
      mutationFn: ({ postId, data }) => updatePost(postId, data),
      onSuccess: (updatedPost) => {
        console.log('게시글 수정 성공:', updatedPost);
        queryClient.invalidateQueries({ queryKey: ['getPostList'] });
      },
      onError: (error) => {
        console.error('게시글 수정 실패:', error);
      },
    },
  );
};
