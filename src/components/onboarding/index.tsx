import { useFunnel } from '@/hooks/useFunnel';

import {
  Address,
  BirthDay,
  Complete,
  Gender,
  Hobby,
  Mbti,
  MyImage,
  Name,
  Wellness,
} from './Profile';

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

export default function Onboarding() {
  const { Funnel, Step, currentStep } = useFunnel(steps);

  return (
    <div>
      <div>현재 스텝: {currentStep}</div>
      <Funnel>
        <Step name="name">
          <Name />
        </Step>
        <Step name="gender">
          <Gender />
        </Step>
        <Step name="birth">
          <BirthDay />
        </Step>
        <Step name="address">
          <Address />
        </Step>
        <Step name="hobby">
          <Hobby />
        </Step>
        <Step name="mbti">
          <Mbti />
        </Step>
        <Step name="wellness">
          <Wellness />
        </Step>
        <Step name="photo">
          <MyImage />
        </Step>
        <Step name="complete">
          <Complete />
        </Step>
      </Funnel>
    </div>
  );
}
