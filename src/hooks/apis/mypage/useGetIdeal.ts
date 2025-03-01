import { useQuery } from '@tanstack/react-query';

import { api } from '@/api';

export interface idealTypeContent {
  mbti?: string[];
  address?: {
    city: string;
    district: string;
  }[];
  age?: {
    min: number;
    max: number;
  };
  hobby?: string[];
  drink?: string;
  smoke?: string;
}
const getIdeal = async () => {
  return api.get<idealTypeContent>('/ideal');
};

export const useGetIdeal = () => {
  return useQuery({ queryKey: ['ideal'], queryFn: getIdeal });
};
