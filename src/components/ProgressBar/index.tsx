'use client';

import { useState } from 'react';

export default function ProgressBar() {
  const steps = Array.from({ length: 8 }, (_, i) => i + 1);
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Progress Bar */}
      <div className="relative w-full h-2 bg-gray2 rounded-full overflow-hidden my-4">
        <div
          className="absolute top-0 left-0 h-full bg-mainPink1 transition-all"
          style={{ width: `${(currentStep / steps.length) * 100}%` }}
        ></div>
      </div>

      {/* 버튼 */}
      <div className="mt-4 flex gap-4">
        <button
          onClick={() => {
            if (currentStep > 1) {
              setCurrentStep((prev) => prev - 1);
            }
          }}
          disabled={currentStep === 1}
        >
          {'<'}
        </button>
        <button
          onClick={() => {
            if (currentStep === steps.length) {
              setComplete(true);
            } else {
              setCurrentStep((prev) => prev + 1);
            }
          }}
        >
          {currentStep === steps.length ? '완료' : '다음'}
        </button>
      </div>
    </div>
  );
}
