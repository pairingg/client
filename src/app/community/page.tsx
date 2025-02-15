'use client';

import BottomNavBar from '@/components/BottomNavBar';
import PlusButton from '@/components/buttons/PlusButton';
import Button from '@/components/common/Button';
import Tab from '@/components/common/Tab';
import ActionModal from '@/components/modal/ActionModal';
import ListModal from '@/components/modal/ListModal';
import PostCard from '@/components/PostCard/page';
import { useModal } from '@/hooks/useModal';
import Link from 'next/link';
import { useState } from 'react';
import CheckIcon from '/public/assets/icons/alert_checkMark.svg';
import ExclamationIcon from '/public/assets/icons/alert_exclamationMark.svg';
import GrayLogoIcon from '/public/assets/icons/pairing_logo_gray.svg';

export default function Community() {
  const reportcheckModal = useModal(); // 신고 체크 모달
  const reportModal = useModal(); // 신고하기 상세 모달

  // 신고 확인 모달 & 신고 완료 모달
  const reportConfirmModal = useModal();
  const reportSuccessModal = useModal();
  const [reportMessage, setReportMessage] = useState('');

  // 신고 항목 버튼 클릭 시 실행할 함수
  const handleReportClick = (reason: string) => {
    setReportMessage(`${reason} 항목으로 상대를 신고하시겠습니까?`);
    reportConfirmModal.openModal();
  };

  const myPostMenuModal = useModal(); // 수정/삭제 여부 모달
  // 신고 확인 모달 & 신고 완료 모달
  const deleteConfirmModal = useModal();
  const deleteSuccessModal = useModal();

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
                buttonText="저요"
                onMoreClick={reportcheckModal.openModal}
              />
            ))}
          </div>

          {/* 신고 모달 */}
          <ListModal
            isOpen={reportcheckModal.isOpen}
            buttonList={[
              {
                label: '신고하기',
                onClick: () => {
                  reportcheckModal.closeModal();
                  reportModal.openModal();
                },
                color: 'text-mainPink1',
              },
            ]}
            oneButton={{ label: '취소', onClick: reportcheckModal.closeModal }}
          />

          {/* 신고하기 항목 모달 */}
          <ListModal
            isOpen={reportModal.isOpen}
            buttonList={[
              {
                label: '허위 인증',
                onClick: () => handleReportClick('허위 인증'),
              },
              {
                label: '불쾌한 대화',
                onClick: () => handleReportClick('불쾌한 대화'),
              },
              {
                label: '허위 프로필',
                onClick: () => handleReportClick('허위 프로필'),
              },
            ]}
            oneButton={{
              label: '취소',
              onClick: reportModal.closeModal,
              color: 'text-mainPink1',
            }}
          />

          {/* 신고 확인 모달 */}
          <ActionModal
            isOpen={reportConfirmModal.isOpen}
            icon={<ExclamationIcon />}
            message={reportMessage}
            buttons={[
              {
                label: '취소',
                onClick: reportConfirmModal.closeModal,
              },
              {
                label: '확인',
                onClick: () => {
                  console.log('신고 처리 완료:', reportMessage);
                  reportConfirmModal.closeModal();
                  reportModal.closeModal();
                  reportSuccessModal.openModal();
                },
                className: 'text-mainPink1',
              },
            ]}
          />

          {/* 신고 완료 모달 */}
          <ActionModal
            isOpen={reportSuccessModal.isOpen}
            icon={<CheckIcon />}
            message="신고 되었습니다."
            buttons={[
              {
                label: '닫기',
                onClick: reportSuccessModal.closeModal,
                className: 'w-full',
              },
            ]}
          />

          {/* 플로팅 버튼 */}
          <div className="absolute bottom-20 right-5 mb-6">
            <Link href="/community/create">
              <PlusButton />
            </Link>
          </div>
        </Tab.Content>

        <Tab.Content value="tab2">
          {myPosts.length > 0 ? (
            <div className="flex flex-col pb-[200px] h-screen flex-grow overflow-y-auto">
              {/* 내가 작성한 글 있을 때 */}
              {myPosts.map((item, index) => (
                <PostCard
                  key={index}
                  title={item.title}
                  content={item.content}
                  time={item.time}
                  buttonText="저요 목록 보기"
                  onMoreClick={myPostMenuModal.openModal}
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
                <Link href="/community/create">글 작성</Link>
              </Button>
            </div>
          )}

          {/* 수정/삭제 여부 모달 */}
          <ListModal
            isOpen={myPostMenuModal.isOpen}
            buttonList={[
              {
                label: '수정하기',
                onClick: () => {
                  console.log('수정하기');
                },
              },
              {
                label: '삭제하기',
                onClick: () => {
                  myPostMenuModal.closeModal();
                  deleteConfirmModal.openModal();
                },
                color: 'text-mainPink1',
              },
            ]}
            oneButton={{ label: '취소', onClick: myPostMenuModal.closeModal }}
          />

          {/* 삭제 확인 모달 */}
          <ActionModal
            isOpen={deleteConfirmModal.isOpen}
            icon={<ExclamationIcon />}
            message="게시물을 삭제하시겠습니까?"
            buttons={[
              {
                label: '취소',
                onClick: deleteConfirmModal.closeModal,
              },
              {
                label: '확인',
                onClick: () => {
                  deleteConfirmModal.closeModal();
                  myPostMenuModal.closeModal();
                  deleteSuccessModal.openModal();
                },
                className: 'text-mainPink1',
              },
            ]}
          />

          {/* 삭제 완료 모달 */}
          <ActionModal
            isOpen={deleteSuccessModal.isOpen}
            icon={<CheckIcon />}
            message="삭제 되었습니다."
            buttons={[
              {
                label: '닫기',
                onClick: deleteSuccessModal.closeModal,
                className: 'w-full',
              },
            ]}
          />
        </Tab.Content>
      </Tab.Group>

      <BottomNavBar />
    </div>
  );
}
