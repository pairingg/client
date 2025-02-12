import ActionModal from '@/components/modal/ActionModal';
import ListModal from '@/components/modal/ListModal';
import { useModal } from '@/hooks/useModal';
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
  const checkModal = useModal(); // 신고/차단 체크 모달
  const reportModal = useModal(); // 신고하기 상세 모달
  const blockCheckModal = useModal(); // 차단 여부 확인 모달
  const blockModal = useModal(); // 차단 완료 모달

  return (
    <div className="m-7">
      <div className="flex items-center">
        <div className="flex items-center space-x-3">
          <span className="text-20px font-semiBold">{name}</span>
          <span className="text-20px font-semiBold">{age}</span>
          <FaceAuthIcon />
        </div>

        <button className="ml-auto" onClick={checkModal.openModal}>
          <MoreBlackIcon />
        </button>
      </div>

      {/* 신고/차단 모달 */}
      <ListModal
        isOpen={checkModal.isOpen}
        buttonList={[
          {
            label: '신고하기',
            onClick: () => {
              checkModal.closeModal();
              reportModal.openModal();
            },
            color: 'text-mainPink1',
          },
          {
            label: '차단하기',
            onClick: () => {
              checkModal.closeModal();
              blockCheckModal.openModal();
            },
          },
        ]}
        oneButton={{ label: '취소', onClick: checkModal.closeModal }}
      />

      {/* 신고하기 상세 모달 */}
      <ListModal
        isOpen={reportModal.isOpen}
        buttonList={[
          { label: '허위 인증', onClick: () => console.log('허위 인증') },
          { label: '불쾌한 대화', onClick: () => console.log('불쾌한 대화') },
          { label: '허위 프로필', onClick: () => console.log('허위 프로필') },
        ]}
        oneButton={{
          label: '신고하기',
          onClick: reportModal.closeModal,
          color: 'text-mainPink1',
        }}
      />

      {/* 차단하기 여부 모달 */}
      <ActionModal
        isOpen={blockCheckModal.isOpen}
        icon={<ExclamationIcon />}
        message="차단 하시겠습니까?"
        buttons={[
          {
            label: '취소',
            onClick: blockCheckModal.closeModal,
          },
          {
            label: '확인',
            onClick: () => {
              blockCheckModal.closeModal();
              blockModal.openModal();
            },
            className: 'text-mainPink1',
          },
        ]}
      />

      {/* 차단하기 확인 모달 */}
      <ActionModal
        isOpen={blockModal.isOpen}
        icon={<ExclamationIcon />}
        message="차단 되었습니다."
        buttons={[
          {
            label: '닫기',
            onClick: blockModal.closeModal,
            className: 'w-full',
          },
        ]}
      />
    </div>
  );
}
