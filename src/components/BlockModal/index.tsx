interface BlockModalProps {
  isOpen: boolean;
  buttonList: { label: string; onClick: () => void }[];
  oneButton: { label: string; onClick: () => void };
}

export default function BlockModal({
  isOpen,
  buttonList,
  oneButton,
}: BlockModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-end justify-center bg-black bg-opacity-50 z-50">
      <div className="max-w-sm pb-5 mx-auto">
        {/* 버튼 리스트 */}
        <div className="bg-white rounded-2xl p-4 w-80 shadow-lg">
          {buttonList.map(({ label, onClick }, index) => (
            <button
              key={index}
              className={`w-full py-2 font-bold ${index !== buttonList.length - 1 ? 'border-b' : ''}`}
              onClick={onClick}
            >
              {label}
            </button>
          ))}
        </div>

        {/* 단일 버튼 */}
        <div className="bg-white rounded-2xl mt-4 p-4 w-80 shadow-lg">
          <button className="w-full font-bold" onClick={oneButton.onClick}>
            {oneButton.label}
          </button>
        </div>
      </div>
    </div>
  );
}
