'use client';

export default function ProgressBar() {
  const steps = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Progress Bar */}
      <div className="relative w-full h-2 bg-gray2 rounded-full overflow-hidden my-4"></div>

      {/* 버튼 */}
      <div className="flex gap-4">
        <button>{'<'}</button>
        <button>다음</button>
      </div>
    </div>
  );
}
