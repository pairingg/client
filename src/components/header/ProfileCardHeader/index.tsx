import ListModal from '@/components/modal/\bListModal';
import { useState } from 'react';
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
          { label: '차단하기', onClick: () => console.log('차단하기 클릭') },
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
    </div>
  );
}
