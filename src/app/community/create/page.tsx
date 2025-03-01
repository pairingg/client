'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import BottomNavBar from '@/components/BottomNavBar';
import Button from '@/components/common/Button';
import ImageUploader from '@/components/common/ImageUploader';
import ActionModal from '@/components/modal/ActionModal';
import { useModal } from '@/hooks/useModal';

// 1) 게시글 생성 훅
import { usePostCreatePosts } from '@/hooks/apis/community/usePostCreatePosts';

// 2) 이미지 업로드 훅
import { uploadImageToNcloud } from '@/hooks/apis/upload/useUploadImageToNcloud';

import ExclamationIcon from '/src/assets/icons/alert_exclamationMark.svg';
import BackIcon from '/src/assets/icons/header_back.svg';

export default function PostCreate() {
  const router = useRouter();
  const outModal = useModal(false);

  // 글 내용 상태
  const [content, setContent] = useState('');
  // 선택된 파일 상태 (ImageUploader 컴포넌트에서 File 객체를 받아온다고 가정)
  const [file, setFile] = useState<File | null>(null);

  const maxLength = 80;

  // 게시글 생성 mutation 훅
  const { mutate: createPost, isLoading } = usePostCreatePosts();

  // ImageUploader에서 파일 선택 시 호출되는 핸들러
  const handleImageUpload = (selectedFile: File) => {
    setFile(selectedFile);
  };

  // ImageUploader에서 파일 삭제 시 호출되는 핸들러
  const handleImageDelete = () => {
    setFile(null);
  };

  // 등록 버튼 클릭 시
  const handleSubmit = async () => {
    try {
      let imageUrl = '';

      // 1) 파일이 존재하면 먼저 S3에 업로드
      if (file) {
        imageUrl = await uploadImageToNcloud({ file });
      }

      // 2) 게시글 생성 API 호출
      const postData = {
        content,
        imageUrl, // 업로드한 이미지 주소
      };
      createPost(postData); // 성공 시 내부 onSuccess에서 router.push('/community') 처리
    } catch (error) {
      console.error('이미지 업로드 또는 게시글 생성 실패:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 헤더 */}
      <div className="relative flex flex-row items-center p-5 shadow-md">
        <button onClick={outModal.openModal} aria-label="뒤로가기">
          <BackIcon />
        </button>
        <h1 className="text-22px font-bold flex-1 text-center">글작성</h1>
      </div>

      {/* 페이지 이탈 모달 */}
      <ActionModal
        isOpen={outModal.isOpen}
        icon={<ExclamationIcon fill="#FF4F75" />}
        message="현재 페이지를 나가시겠습니까?"
        description="작성하신 글이 삭제됩니다."
        buttons={[
          { label: '취소', onClick: outModal.closeModal },
          {
            label: '확인',
            onClick: () => router.push('/community'),
            className: 'text-mainPink1',
          },
        ]}
      />

      {/* 글 작성 영역 */}
      <div className="flex flex-col p-5 space-y-4">
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
          <p className="absolute bottom-3 right-3 text-gray1 text-12px">
            {content.length}/{maxLength}
          </p>
        </div>
      </div>

      {/* 사진 등록 영역 */}
      <div className="flex flex-col p-5 space-y-4">
        <p className="text-18px font-medium pb-2">사진 등록</p>
        <ImageUploader
          onImageUpload={handleImageUpload} // File 객체를 받아옴
          onImageDelete={handleImageDelete}
        />
      </div>

      {/* 하단 바 */}
      <BottomNavBar />

      {/* 등록 버튼 */}
      <div className="fixed bottom-[80px] left-0 right-0 z-20">
        <div className="mx-auto max-w-[520px] px-5 pb-[30px]">
          <Button
            shape="rectangle"
            variant="filled"
            className="w-full py-3"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? '등록 중...' : '등록'}
          </Button>
        </div>
      </div>
    </div>
  );
}
