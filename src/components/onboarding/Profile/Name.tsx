interface NameProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export default function Name({ onNext, onPrev }: NameProps) {
  return (
    <div>
      <h2>이름을 입력하세요</h2>
      <button onClick={onPrev} disabled={!onPrev}>
        이전
      </button>
      <button onClick={onNext} disabled={!onNext}>
        다음
      </button>
    </div>
  );
}
