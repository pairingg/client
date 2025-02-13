'use client';

import BottomNavBar from '@/components/BottomNavBar';
import Tab from '@/components/common/Tab';

export default function Community() {
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

        <Tab.Content value="tab1">내용</Tab.Content>
        <Tab.Content value="tab2">두 번째 탭 내용</Tab.Content>
      </Tab.Group>

      <BottomNavBar />
    </div>
  );
}
