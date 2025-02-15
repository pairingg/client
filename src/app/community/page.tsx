'use client';

import BottomNavBar from '@/components/BottomNavBar';
import Tab from '@/components/common/Tab';
import PostCard from '@/components/PostCard/page';

export default function Community() {
  const posts = [
    {
      title: '제목 제목제목',
      content:
        '글 내용 가나다라마바사 아자차카타파하 가나 다라 마바사 아자차카 타파하 가나다라마 바사 아자차카 타파하가 나다라마바사.',
      time: new Date(),
    },
    {
      title: '제목 제목제목',
      content:
        '글 내용 가나다라마바사 아자차카타파하 가나 다라 마바사 아자차카 타파하 가나다라마 바사 아자차카 타파하가 나다라마바사.',
      time: new Date(),
    },
    {
      title: '제목 제목제목',
      content:
        '글 내용 가나다라마바사 아자차카타파하 가나 다라 마바사 아자차카 타파하 가나다라마 바사 아자차카 타파하가 나다라마바사.',
      time: new Date(),
    },
    {
      title: '제목 제목제목',
      content:
        '글 내용 가나다라마바사 아자차카타파하 가나 다라 마바사 아자차카 타파하 가나다라마 바사 아자차카 타파하가 나다라마바사.',
      time: new Date(),
    },
  ];

  return (
    <div className="flex flex-col pb-[70px] h-screen">
      <div className="px-7 pt-3 py-3">
        <p className="text-24px font-bold">커뮤니티</p>
      </div>

      <Tab.Group initialTab="tab1">
        <Tab.Header>
          <Tab.Item value="tab1">글 목록</Tab.Item>
          <Tab.Item value="tab2">내가 쓴 글</Tab.Item>
        </Tab.Header>

        <Tab.Content value="tab1">
          <div className="flex flex-col pb-[200px] h-screen flex-grow overflow-y-auto">
            {posts.map((item, index) => (
              <PostCard
                key={index}
                title={item.title}
                content={item.content}
                time={item.time}
              />
            ))}
          </div>
        </Tab.Content>
        <Tab.Content value="tab2">두 번째 탭 내용</Tab.Content>
      </Tab.Group>

      <BottomNavBar />
    </div>
  );
}
