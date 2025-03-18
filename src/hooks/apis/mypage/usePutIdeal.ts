import { useMutation } from '@tanstack/react-query';

import { api } from '@/api';
import type { DrinkStatusType, SmokeStatusType } from '@/constants/wellness';

export interface idealTypeContent {
  mbti?: string[];
  address?: {
    city: string;
    district: string;
  }[];
  ageStart: number;
  ageEnd: number;
  hobby?: string[];
  drink?: DrinkStatusType;
  smoke?: SmokeStatusType;
}

const putIdeal = async (data: idealTypeContent) => {
  return api.put<idealTypeContent>('/ideal', data);
};

export const usePutIdeal = () => {
  return useMutation({ mutationFn: putIdeal });
};
