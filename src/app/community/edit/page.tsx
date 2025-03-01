'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import BottomNavBar from '@/components/BottomNavBar';
import Button from '@/components/common/Button';
import ImageUploader from '@/components/common/ImageUploader';
import ActionModal from '@/components/modal/ActionModal';
import type { PostUpdateWithFile } from '@/hooks/apis/community/usePutPost';
import { useUpdatePostWithS3 } from '@/hooks/apis/community/usePutPost';
import { useModal } from '@/hooks/useModal';

import ExclamationIcon from '/src/assets/icons/alert_exclamationMark.svg';
import BackIcon from '/src/assets/icons/header_back.svg';

interface PostEditProps {
  postId: number;
  initialContent: string;
  initialImageUrl: string;
}

export default function PostEdit({
  postId,
  initialContent,
  initialImageUrl,
}: PostEditProps) {
  const router = useRouter();
  const outModal = useModal(false);

  const [content, setContent] = useState(initialContent);

  const [file, setFile] = useState<File | null>(null);

  const maxLength = 80;
  const { mutate: updatePost } = useUpdatePostWithS3();

  const handleImageUpload = (selectedFile: File) => {
    setFile(selectedFile);
  };

  const handleImageDelete = () => {
    setFile(null);
  };

  // 수정 완료 버튼 클릭 시
  const handleSubmit = () => {
    const updateData: PostUpdateWithFile = {
      content,
      imageUrl: initialImageUrl,
      file: file ?? undefined,
    };

    updatePost({ postId, data: updateData });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 헤더 */}
      <div className="relative flex flex-row items-center p-5 shadow-md">
        <button onClick={() => router.push('/community')} aria-label="뒤로가기">
          <BackIcon />
        </button>
        <h1 className="text-22px font-bold flex-1 text-center">글수정</h1>
      </div>

      {/* 페이지 이탈 모달 */}
      <ActionModal
        isOpen={outModal.isOpen}
        icon={<ExclamationIcon fill="#FF4F75" />}
        message="현재 페이지를 나가시겠습니까?"
        description="작성하신 내용이 저장되지 않습니다."
        buttons={[
          { label: '취소', onClick: outModal.closeModal },
          {
            label: '확인',
            onClick: () => router.push('/community'),
            className: 'text-mainPink1',
          },
        ]}
      />

      {/* 글 수정 영역 */}
      <div className="flex flex-col p-5 space-y-4">
        {/* 내용 입력 */}
        <div className="relative">
          <p className="text-18px font-medium pb-2">내용</p>
          <textarea
            placeholder="글을 수정해주세요."
            value={content}
            onChange={(e) => {
              if (e.target.value.length <= maxLength) {
                setContent(e.target.value);
              }
            }}
            className="w-full h-36 p-3 border border-gray2 rounded-xl text-14px font-medium resize-none focus:outline-none focus:border-mainPink1 pr-10"
          />
          <p className="absolute bottom-3 right-3 text-gray1 text-12px">
            {content.length}/{maxLength}
          </p>
        </div>
      </div>

      {/* 사진 등록 영역 */}
      <div className="flex flex-col p-5 space-y-4">
        <p className="text-18px font-medium pb-2">사진 등록</p>
        <ImageUploader
          onImageUpload={handleImageUpload}
          onImageDelete={handleImageDelete}
          image={file}
        />
      </div>

      {/* 하단 바 */}
      <BottomNavBar />

      {/* 수정 완료 버튼 */}
      <div className="fixed bottom-[80px] left-0 right-0 z-20">
        <div className="mx-auto max-w-[520px] px-5 pb-[30px]">
          <Button
            shape="rectangle"
            variant="filled"
            className="w-full py-3"
            onClick={handleSubmit}
          >
            수정 완료
          </Button>
        </div>
      </div>
    </div>
  );
}
