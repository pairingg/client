import PlusIcon from '/public/assets/icons/plus.svg';

export default function PlusButton() {
  return (
    <button className="flex items-center bg-white/80 rounded-full size-[62px] p-4">
      <PlusIcon />
    </button>
  );
}
