import KeywordList from './KeywordList';

interface KeywordRecommendationProps {
  keywords: { icon: React.ReactNode; title: string }[];
}

export default function KeywordRecommendation({
  keywords,
}: KeywordRecommendationProps) {
  return (
    <div className="w-80 p-5 bg-white rounded-xl shadow-md border m-auto">
      {/* 상단 타이틀 */}
      <p className="text-gray1 text-lg font-18-bold mb-8">맞춤 추천 키워드</p>
      <KeywordList keywords={keywords} />
    </div>
  );
}
