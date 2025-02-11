interface OneButtonModalProps {
  isOpen: boolean;
  icon: React.ReactNode;
  message: string;
  leftButtonLabel: string;
  rightButtonLabel: string;
  leftOnClick: () => void;
  rightOnClick: () => void;
}

export default function TwoButtonMoal({
  isOpen,
  icon,
  message,
  leftButtonLabel,
  rightButtonLabel,
  leftOnClick,
  rightOnClick,
}: OneButtonModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl p-6 w-80 shadow-lg text-center">
        {/* 아이콘 */}
        <div className="flex justify-center mb-4">{icon}</div>

        {/* 메시지 */}
        <p className="text-24px font-medium">{message}</p>

        {/* 버튼 영역 */}
        <div className="mt-6 flex border-t">
          {/* 왼쪽 버튼 (취소) */}
          <button className="w-1/2 pt-4 font-medium" onClick={leftOnClick}>
            {leftButtonLabel}
          </button>

          {/* 오른쪽 버튼 (확인) */}
          <button
            className="w-1/2 pt-4 font-medium text-mainPink1"
            onClick={rightOnClick}
          >
            {rightButtonLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
