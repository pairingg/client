import formatTime from '@/utils/date';
import Button from '../common/Button';
import UserProfile from '../profiles/UserProfile';
import MoreGrayIcon from '/public/assets/icons/more_gray.svg';

interface PostCardProps {
  name: string;
  age: number;
  location: string;
  title: string;
  content: string;
  time: Date;
  buttonText: string;
  onMoreClick: () => void;
  onButtonClick: () => void;
}

export default function PostCard({
  name,
  age,
  location,
  title,
  content,
  time,
  buttonText,
  onMoreClick,
  onButtonClick,
}: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-1 m-6">
      {/* 헤더 */}
      <UserProfile
        name={name}
        age={age}
        location={location}
        imageSize={80}
        buttonComponent={
          <button className="absolute right-0 top-0 p-2" onClick={onMoreClick}>
            <MoreGrayIcon />
          </button>
        }
      />

      <div className="m-4 border-t py-2">
        {/* 게시글 내용 */}
        <div className="flex flex-col">
          <h1 className="font-18-medium py-2">{title}</h1>
          <p className="font-16-regular py-1">{content}</p>
        </div>

        {/* 하단 */}
        <div className="flex justify-between pt-6">
          <p className="font-14-regular font-roboto text-gray1">
            {formatTime(time)}
          </p>
          {/* 분홍색 버튼 (원형) */}
          <Button
            shape="circle"
            variant="filled"
            className="px-[16px] py-[6px]"
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
