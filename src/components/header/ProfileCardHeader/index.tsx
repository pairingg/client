import BlockModal from '@/components/\bBlockModal';
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
      <BlockModal
        isOpen={isModalOpen}
        buttonList={[
          { label: '신고하기', onClick: () => console.log('신고하기 클릭') },
          { label: '차단하기', onClick: () => console.log('차단하기 클릭') },
        ]}
        oneButton={{ label: '취소', onClick: () => setIsModalOpen(false) }}
      />
    </div>
  );
}
