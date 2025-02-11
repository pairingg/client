interface OneButtonModalProps {
  isOpen: boolean;
  icon: React.ReactNode;
  message: string;
  buttonLabel: string;
  onClick: () => void;
}

export default function OneButtonModal({
  isOpen,
  icon,
  message,
  buttonLabel,
  onClick,
}: OneButtonModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl p-6 w-80 shadow-lg text-center">
        {/* 아이콘 */}
        <div className="flex justify-center mb-4">{icon}</div>

        {/* 메시지 */}
        <p className="text-24px font-medium">{message}</p>

        {/* 버튼 */}
        <div className="mt-6">
          <button
            className="w-full pt-4 font-18-medium border-t"
            onClick={onClick}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
