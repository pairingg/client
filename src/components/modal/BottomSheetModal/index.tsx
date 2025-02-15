import Button from '@/components/common/Button';

interface BottomSheetModalProps {
  isOpen: boolean;
  isClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function BottomSheetModal({
  isOpen,
  isClose,
  title,
  children,
}: BottomSheetModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 w-full max-w-[520px] mx-auto">
      {/* 배경 오버레이 */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={isClose} />
      {/* 바텀시트 컨텐츠 */}
      <div className="relative bg-white rounded-t-2xl overflow-hidden">
        {/* 바텀시트 핸들 */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 bg-gray2 rounded-full" />
        </div>

        {/* 헤더 */}
        <div className="flex flex-row items-center justify-center py-3">
          <h2 className="text-center pl-3">
            <span className="text-24px font-bold">{title}</span>
          </h2>
        </div>

        {/* 모달 내부에 들어갈 내용*/}
        <div className="p-6">{children}</div>

        {/* 닫기 버튼 */}
        <div className="p-6 bg-white">
          <Button
            shape="rectangle"
            variant="filled"
            className="w-full py-3"
            onClick={isClose}
          >
            닫기
          </Button>
        </div>
      </div>
    </div>
  );
}
