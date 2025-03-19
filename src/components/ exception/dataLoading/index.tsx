export default function DataLoading() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <p className="mb-2 text-gray1 font-bold">데이터 로딩중</p>
      <div className="flex space-x-2">
        {/* 첫 번째 점 */}
        <span className="animate-bounce text-gray1 font-bold">.</span>
        {/* 두 번째 점 */}
        <span
          className="animate-bounce text-gray1 font-bold"
          style={{ animationDelay: '0.2s' }}
        >
          .
        </span>
        {/* 세 번째 점 */}
        <span
          className="animate-bounce text-gray1 font-bold"
          style={{ animationDelay: '0.4s' }}
        >
          .
        </span>
      </div>
    </div>
  );
}
