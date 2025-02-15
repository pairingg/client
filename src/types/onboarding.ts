import type { DrinkStatusType, SmokeStatusType } from '@/constants/wellness';

export interface OnboardingProps {
  onNext?: () => void;
  onPrev?: () => void;
  currentStepNumber?: number;
  totalStepsNumber?: number;
}

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
    low: number;
    high: number;
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
  idalType?: idalTypeContent;
  faceAuth?: faceAuthContent;
}
