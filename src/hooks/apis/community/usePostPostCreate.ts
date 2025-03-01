import { useQuery } from '@tanstack/react-query';

import { api } from '@/api';
import type { PostCreate } from '@/types/community';

const getPostList = async (): Promise<PostCreate[]> => {
  return await api.post<PostCreate[]>('/community');
};

export const useGetPostList = () => {
  return useQuery<PostCreate[], Error>({
    queryKey: ['postPostCreate'],
    queryFn: getPostList,
  });
};
