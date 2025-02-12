'use client';

import { useState, type ReactElement } from 'react';

import type { StepChildProps } from '@/hooks/useFunnel';
import { useFunnel } from '@/hooks/useFunnel';

import Address from './Address';
import BirthDay from './BirthDay';
import Complete from './Complete';
import Gender from './Gender';
import Hobby from './Hobby';
import Mbti from './Mbti';
import MyImage from './MyImage';
import Name from './Name';
import Wellness from './Wellness';

const steps = [
  'name',
  'gender',
  'birth',
  'address',
  'hobby',
  'mbti',
  'wellness',
  'photo',
  'complete',
];

export interface Content {
  name?: string;
  gender?: string;
  birth?: string;
  address?: {
    city: string;
    district: string;
  };
  hobby?: string[];
  mbti?: string;
  wellness?: string;
  photo?: string;
}

export default function ProfileOnboarding() {
  const { Funnel, Step, currentStep, currentStepNumber, totalStepsNumber } =
    useFunnel(steps);
  const [content, setContent] = useState<Content>({ name: 'd' });

  console.log(content);

  const stepComponents: Record<
    (typeof steps)[number],
    ReactElement<StepChildProps>
  > = {
    name: <Name setContent={setContent} />,
    gender: <Gender setContent={setContent} />,
    birth: <BirthDay setContent={setContent} />,
    address: <Address setContent={setContent} />,
    hobby: <Hobby setContent={setContent} />,
    mbti: <Mbti setContent={setContent} />,
    wellness: <Wellness setContent={setContent} />,
    photo: <MyImage setContent={setContent} />,
    complete: <Complete setContent={setContent} />,
  } as const;

  return (
    <div>
      <Funnel>
        <Step name={currentStep}>{stepComponents[currentStep]}</Step>
      </Funnel>
    </div>
  );
}
