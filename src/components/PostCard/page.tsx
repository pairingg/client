import formatTime from '@/utils/date';
import Button from '../common/Button';
import PostCardHeader from '../header/PostCardHeader';

interface PostCardProps {
  title: string;
  content: string;
  time: Date;
}

export default function PostCard({ title, content, time }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-1 m-6">
      {/* 헤더 */}
      <PostCardHeader name="김이름" age={20} location="서울시" />

      <div className="m-4 border-t py-2">
        {/* 게시글 내용 */}
        <div className="flex flex-col">
          <h1 className="font-18-medium py-2">{title}</h1>
          <p className="font-16-regular py-1">{content}</p>
        </div>

        {/* 하단 */}
        <div className="flex justify-between pt-6">
          <p className="font-14-regular text-gray1">{formatTime(time)}</p>
          {/* 분홍색 버튼 (원형) */}
          <Button shape="circle" variant="filled">
            버튼
          </Button>
        </div>
      </div>
    </div>
  );
}
