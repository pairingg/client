interface BlockModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BlockModal({ isOpen, onClose }: BlockModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-end justify-center bg-black bg-opacity-50 z-50 space-y-3">
      <div className="w-full max-w-sm pb-5 px-4">
        <div className="bg-white rounded-2xl p-4 w-80 shadow-lg">
          <button
            className="text-mainPink1 w-full py-2 font-bold border-b"
            onClick={onClose}
          >
            신고하기
          </button>
          <button className="w-full py-2 font-bold" onClick={onClose}>
            차단하기
          </button>
        </div>
        <div className="bg-white rounded-2xl mt-4 p-4 w-80  shadow-lg">
          <button className="w-full font-bold" onClick={onClose}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
