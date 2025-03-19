import { useQuery } from '@tanstack/react-query';

import { api } from '@/api';
import type { DrinkStatusType, SmokeStatusType } from '@/constants/wellness';

interface MyPageProfileResponse {
  name: string;
  age: number;
  gender: 'MALE' | 'FEMALE';
  birth: string;
  mbti: string;
  drink: DrinkStatusType;
  smoking: SmokeStatusType;
  city: string;
  district: string;
  hobby: string[];
  images: string[];
}

const getUserProfile = async (userId: string) => {
  return api.get<MyPageProfileResponse>(`/member/profile/${userId}`);
};

export const useGetUserProfile = (userId: string) => {
  return useQuery({
    queryKey: ['get-userProfile', userId],
    queryFn: () => getUserProfile(userId),
    enabled: !!userId,
  });
};
