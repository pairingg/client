'use client';

import { type ReactElement } from 'react';

import type { StepChildProps } from '@/hooks/useFunnel';
import { useFunnel } from '@/hooks/useFunnel';

import Address from './Address';
import Age from './Age';
import Complete from './Complete';
import Mbti from './Mbti';
import Start from './Start';
import Wellness from './Wellness';

const steps = ['start', 'mbti', 'address', 'age', 'wellness', 'complete'];

export default function IdealTypeOnboarding() {
  const { Funnel, Step, currentStep } = useFunnel(steps);

  const stepComponents: Record<
    (typeof steps)[number],
    ReactElement<StepChildProps>
  > = {
    start: <Start />,
    mbti: <Mbti />,
    address: <Address />,
    age: <Age />,
    wellness: <Wellness />,
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
