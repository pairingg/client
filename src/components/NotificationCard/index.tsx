import formatTime from '@/utils/date';
import ProfileImage from '../common/ProfileImage';
import DeleteIcon from '/public/assets/icons/delete_small_gray.svg';

interface NotificationCardProps {
  profileImg: string;
  name: string;
  age: number;
  location: string;
  time: Date;
  isHeart: boolean; // true이면 하트 알림
  isMe: boolean; // true이면 저요 알림
}

export default function NotificationCard({
  profileImg,
  name,
  age,
  location,
  time,
  isHeart,
  isMe,
}: NotificationCardProps) {
  let messageText = '';
  let buttonText = '';

  // 조건처리
  if (isHeart) {
    // isHeart가 true면 "하트를 보냈어요."
    messageText = `${name}님이 하트를 보냈어요.`;
    buttonText = '프로필 보기';
  } else if (isMe) {
    // isMe가 true면 "저요를 보냈어요."
    messageText = `${name}님이 저요를 보냈어요.`;
    buttonText = '저요 목록 보기';
  }

  return (
    <div
      className="relative flex items-center bg-white rounded-xl m-4 
      shadow-[0px_4px_4px_rgba(0,0,0,0.07),_0px_-1px_1px_rgba(0,0,0,0.03),_3px_0px_3px_rgba(0,0,0,0.03),_-3px_0px_3px_rgba(0,0,0,0.03)]"
    >
      <div className="flex m-4">
        {/* 삭제 버튼 */}
        <button className="absolute top-2 right-2 m-1">
          <DeleteIcon />
        </button>

        {/* 프로필 이미지 */}
        <div className="mr-2">
          <ProfileImage src={profileImg} size={90} />
        </div>

        {/* 알림 내용 */}
        <div className="flex-1">
          <p className="text-sm font-semiBold pb-1">{messageText}</p>
          <p className="pb-3">
            <span>{age}, </span>
            <span>{location}</span>
          </p>
          <p className="text-12px text-gray1 mt-1">{formatTime(time)}</p>
        </div>

        {/* 버튼 (messageText가 있을 때만 표시) */}
        {messageText && (
          <button className="absolute bottom-3 right-4 text-14px font-bold text-gray1 bg-gray2 rounded-3xl px-3 py-1">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}
