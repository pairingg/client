import type { DrinkStatusType, SmokeStatusType } from '@/constants/wellness';

export interface myProfile {
  name: string;
  age: number;
  gender: 'MALE' | 'FEMALE';
  birth: Date;
  mbti: string;
  drink?: DrinkStatusType;
  smoke?: SmokeStatusType;
  city: string;
  district: string;
  hobby: string[];
  images: string[];
}
