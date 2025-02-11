import type { ReactElement, ReactNode } from 'react';
import React, { useState } from 'react';

interface StepProps {
  name: string;
  children: ReactNode;
}

interface StepChildProps {
  onNext?: () => void;
  onPrev?: () => void;
}

interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

export const useFunnel = (steps: readonly string[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = steps[currentStepIndex];

  const next = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const goToStep = (stepName: string) => {
    const stepIndex = steps.indexOf(stepName);
    if (stepIndex !== -1) {
      setCurrentStepIndex(stepIndex);
    }
  };

  const Step = ({ name, children }: StepProps) => {
    if (name !== currentStep) return null;

    return (
      <div>
        {React.cloneElement(children as React.ReactElement<StepChildProps>, {
          onNext: next,
          onPrev: prev,
        })}
      </div>
    );
  };

  const Funnel = ({ children }: FunnelProps) => {
    return <>{children}</>;
  };

  return {
    Funnel, // 전체 퍼널을 감싸는 컴포넌트
    Step, // 각 단계를 나타내는 컴포넌트
    currentStep, // 현재 단계 이름
    next, // 다음 단계로 이동하는 함수
    prev, // 이전 단계로 이동하는 함수
    goToStep, // 특정 단계로 직접 이동하는 함수
    isFirstStep: currentStepIndex === 0, // 첫 단계인지 여부
    isLastStep: currentStepIndex === steps.length - 1, // 마지막 단계인지 여부
    currentStepIndex, // 현재 단계의 인덱스
  } as const;
};
