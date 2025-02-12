'use client';

import type { ReactElement } from 'react';

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

export default function ProfileOnboarding() {
  const { Funnel, Step, currentStep, currentStepNumber, totalStepsNumber } =
    useFunnel(steps);

  const stepComponents: Record<
    (typeof steps)[number],
    ReactElement<StepChildProps>
  > = {
    name: <Name />,
    gender: <Gender />,
    birth: <BirthDay />,
    address: <Address />,
    hobby: <Hobby />,
    mbti: <Mbti />,
    wellness: <Wellness />,
    photo: <MyImage />,
    complete: <Complete />,
  } as const;

  return (
    <div>
      <Funnel>
        <Step name={currentStep}>{stepComponents[currentStep]}</Step>
      </Funnel>
    </div>
  );
}
