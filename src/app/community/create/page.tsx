'use client';

import BottomNavBar from '@/components/BottomNavBar';
import Button from '@/components/common/Button';
import ActionModal from '@/components/modal/ActionModal';
import { useModal } from '@/hooks/useModal';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ExclamationIcon from '/public/assets/icons/alert_exclamationMark.svg';
import BackIcon from '/public/assets/icons/header_back.svg';

export default function PostCreate() {
  const [content, setContent] = useState(''); // 글자 수 상태 관리
  const maxLength = 80;
  const outModal = useModal(false);
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 헤더 */}
      <div className="flex flex-row items-center p-5 shadow-md">
        <BackIcon onClick={outModal.openModal} />
        <h1 className="text-22px font-bold flex-1 text-center">글작성</h1>
      </div>

      <ActionModal
        isOpen={outModal.isOpen}
        icon={<ExclamationIcon />}
        message="현재 페이지를 나가시겠습니까?"
        content="작성하신 글이 삭제됩니다."
        buttons={[
          {
            label: '취소',
            onClick: outModal.closeModal,
          },
          {
            label: '확인',
            onClick: () => {
              router.push('/community');
            },
            className: 'text-mainPink1',
          },
        ]}
      />

      {/* 글 작성 영역 */}
      <div className="flex flex-col p-5 space-y-4">
        {/* 제목 입력 */}
        <div>
          <p className="text-18px font-medium pb-2">제목</p>
          <input
            type="text"
            placeholder="제목을 작성해주세요."
            className="w-full p-3 border border-gray2 rounded-xl text-14px font-medium
            focus:outline-none focus:border-mainPink1"
          />
        </div>

        {/* 내용 입력 */}
        <div className="relative">
          <p className="text-18px font-medium pb-2">내용</p>
          <textarea
            placeholder="글을 작성해주세요."
            value={content}
            onChange={(e) => {
              if (e.target.value.length <= maxLength) {
                setContent(e.target.value);
              }
            }}
            className="w-full h-36 p-3 border border-gray2 rounded-xl text-14px font-medium resize-none
            focus:outline-none focus:border-mainPink1 pr-10"
          />
          {/* 글자 수 카운트 */}
          <p className="absolute bottom-3 right-3 text-gray1 text-12px">
            {content.length}/{maxLength}
          </p>
        </div>
      </div>

      {/* 사진 등록 영역 */}
      <div className="flex flex-col p-5 space-y-4">
        <p className="text-18px font-medium pb-2">사진 등록</p>
      </div>

      {/* 등록 버튼 */}
      <div className="p-5">
        <Button shape="rectangle" variant="filled" className="w-full py-3">
          등록
        </Button>
      </div>

      {/* 하단 바 */}
      <BottomNavBar />
    </div>
  );
}
