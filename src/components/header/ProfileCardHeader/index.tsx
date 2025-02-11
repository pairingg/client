import ListModal from '@/components/modal/\bListModal';
import OneButtonModal from '@/components/modal/OneButtonModal';
import TwoButtonMoal from '@/components/modal/TwoButtonModal';
import { useState } from 'react';
import ExclamationIcon from '/public/assets/icons/alert_exclamationMark.svg';
import FaceAuthIcon from '/public/assets/icons/face_auth.svg';
import MoreBlackIcon from '/public/assets/icons/more_black.svg';

interface ProfileCardHeaderProps {
  name: string;
  age: number;
}

export default function ProfileCardHeader({
  name,
  age,
}: ProfileCardHeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isBlockCheckModalOpen, setIsBlockCheckModalOpen] = useState(false);
  const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);

  return (
    <div className="m-7">
      <div className="flex items-center">
        <div className="flex items-center space-x-3">
          <span className="text-20px font-semiBold">{name}</span>
          <span className="text-20px font-semiBold">{age}</span>
          <FaceAuthIcon />
        </div>

        <button className="ml-auto" onClick={() => setIsModalOpen(true)}>
          <MoreBlackIcon />
        </button>
      </div>

      {/* 신고/차단 모달 */}
      <ListModal
        isOpen={isModalOpen}
        buttonList={[
          {
            label: '신고하기',
            onClick: () => {
              setIsModalOpen(false), setIsReportModalOpen(true);
            },
            color: 'text-mainPink1',
          },
          {
            label: '차단하기',
            onClick: () => {
              setIsModalOpen(false), setIsBlockCheckModalOpen(true);
            },
          },
        ]}
        oneButton={{ label: '취소', onClick: () => setIsModalOpen(false) }}
      />

      {/* 신고하기 상세 모달 */}
      <ListModal
        isOpen={isReportModalOpen}
        buttonList={[
          { label: '허위 인증', onClick: () => console.log('허위 인증') },
          { label: '불쾌한 대화', onClick: () => console.log('불쾌한 대화') },
          { label: '허위 프로필', onClick: () => console.log('허위 프로필') },
        ]}
        oneButton={{
          label: '신고하기',
          onClick: () => setIsReportModalOpen(false),
          color: 'text-mainPink1',
        }}
      />

      {/* 차단하기 여부 모달 */}
      <TwoButtonMoal
        isOpen={isBlockCheckModalOpen}
        icon={<ExclamationIcon />}
        message="차단 하시겠습니까?"
        leftButtonLabel="취소"
        rightButtonLabel="확인"
        rightOnClick={() => {
          setIsBlockCheckModalOpen(false), setIsBlockModalOpen(true);
        }}
        leftOnClick={() => setIsBlockCheckModalOpen(false)}
      />

      {/* 차단하기 확인 모달 */}
      <OneButtonModal
        isOpen={isBlockModalOpen}
        icon={<ExclamationIcon />}
        message="차단 되었습니다."
        buttonLabel="닫기"
        onClick={() => setIsBlockModalOpen(false)}
      />
    </div>
  );
}
