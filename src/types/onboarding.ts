import type { DrinkStatusType, SmokeStatusType } from '@/constants/wellness';

export interface ProfileContent {
  name?: string;
  gender?: 'MALE' | 'FEMALE';
  birth?: string;
  address?: {
    city: string;
    district: string;
  };
  hobby?: string[];
  mbti?: string;
  wellness?: {
    drink: DrinkStatusType;
    smoke: SmokeStatusType;
  };
  photo?: string[];
}

export interface idalTypeContent {
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
  wellness?: {
    drink: DrinkStatusType;
    smoke: SmokeStatusType;
  };
}

export interface faceAuthContent {
  image: string;
}

export interface OnboardingData {
  profile?: ProfileContent;
  idealType?: idalTypeContent;
  faceAuth?: faceAuthContent;
}
