interface ProfileInfoItem {
  icon: React.ReactNode;
  title: string;
  description?: string;
  tags?: string[];
}

interface MypageProfileInfoProps {
  onEdit?: () => void;
  profileInfoItems: ProfileInfoItem[];
}

export default function MypageProfileInfo({
  onEdit,
  profileInfoItems,
}: MypageProfileInfoProps) {
  return (
    <div
      className="w-full rounded-[14px] p-[19px] bg-white flex flex-col gap-[10px]
      shadow-[0px_6px_6px_rgba(0,0,0,0.02),_0px_-6px_6px_rgba(0,0,0,0.02),
      _6px_0px_6px_rgba(0,0,0,0.02),_-6px_0px_6px_rgba(0,0,0,0.02)]"
    >
      {/* 컨테이너 정보 */}
      <div className="flex justify-between items-center pb-4">
        <div className="text-gray1 font-bold text-[20px]">내 정보</div>
        {onEdit && (
          <button
            onClick={onEdit}
            className="px-3 py-1 rounded-[25px] border border-gray1 text-gray1 font-14-medium"
          >
            수정
          </button>
        )}
      </div>

      {/* 정보 목록 */}
      {profileInfoItems.map(({ icon, title, description, tags }, index) => {
        // 마지막 아이템인지 체크
        const isLastItem = index === profileInfoItems.length - 1;

        return (
          <div
            key={title}
            className={`flex flex-col gap-2 ${
              !isLastItem ? 'border-b border-gray2 pb-4 mb-4' : ''
            }`}
          >
            {/* 타이틀 */}
            <div className="flex items-center space-x-[10px] h-[24px] text-20px text-mainPink1 font-medium">
              {icon}
              <span>{title}</span>
            </div>

            {/* description */}
            {description && <div className="text-18px">{description}</div>}

            {/* tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-[10px]">
                {tags.map((tag) => (
                  <div
                    key={tag}
                    className="text-18px bg-gray3 px-[12px] py-[3px] rounded-[20px]"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
