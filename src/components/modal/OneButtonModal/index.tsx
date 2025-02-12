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
      <div className="bg-white rounded-2xl p-0 w-80 shadow-lg text-center overflow-hidden">
        {/* 아이콘 */}
        <div className="flex justify-center pt-6">{icon}</div>

        {/* 메시지 */}
        <p className="text-24px font-medium py-2">{message}</p>

        {/* 버튼 */}
        <div className="mt-6">
          <button
            className="w-full py-4 pt-4 font-18-medium border-t"
            onClick={onClick}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
