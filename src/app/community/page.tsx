'use client';

import BottomNavBar from '@/components/BottomNavBar';
import PlusButton from '@/components/buttons/PlusButton';
import Button from '@/components/common/Button';
import Tab from '@/components/common/Tab';
import PostCard from '@/components/PostCard/page';
import Link from 'next/link';
import GrayLogoIcon from '/public/assets/icons/pairing_logo_gray.svg';

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

  const myPosts = [
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
    <div className="flex flex-col pb-[70px] h-screen overflow-hidden relative">
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

          {/* 플로팅 버튼 */}
          <div className="absolute bottom-20 right-5 mb-6">
            <Link href="#">
              <PlusButton />
            </Link>
          </div>
        </Tab.Content>

        <Tab.Content value="tab2">
          {myPosts.length > 0 ? (
            <div className="flex flex-col pb-[200px] h-screen flex-grow overflow-y-auto">
              {/* 내가 작성한 글 없을 때 */}
              {myPosts.map((item, index) => (
                <PostCard
                  key={index}
                  title={item.title}
                  content={item.content}
                  time={item.time}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              {/* 내가 작성한 글 없을 때 */}
              <div className="-pb-10">
                <GrayLogoIcon />
              </div>
              <div className="flex flex-col items-center justify-center pb-4">
                <p className="font-18-medium text-gray1 py-1">
                  아직 작성하신 글이 없습니다.
                </p>
                <p className="font-14-regular text-gray1 py-1">
                  새로운 글을 작성해보세요!
                </p>
              </div>
              <Button shape="circle" variant="outline">
                글 작성
              </Button>
            </div>
          )}
        </Tab.Content>
      </Tab.Group>

      <BottomNavBar />
    </div>
  );
}
