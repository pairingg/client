import AiLogoIcon from '/public/assets/icons/ai_logo.svg';

export default function AiButton() {
  return (
    <button
      className="flex items-center w-[160px] px-2 py-2 rounded-full 
    bg-gradient-to-r from-mainPink1 to-mainPink2 text-white font-semibold"
    >
      <div className="flex items-center justify-center rounded-full mr-2">
        <AiLogoIcon />
      </div>
      <p className="font-16-medium">대화 추천 받기</p>
    </button>
  );
}
