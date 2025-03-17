import ExclamationIcon from '/src/assets/icons/alert_exclamationMark.svg';

export default function DataError() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <p className="mb-2 text-gray1 font-bold">데이터를 불러오지 못했습니다.</p>
      <ExclamationIcon fill="#D9D9D9" />
    </div>
  );
}
