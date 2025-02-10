import Button from '../common/Button';

interface KeywordListProps {
  keywords: { icon: React.ReactNode; title: string }[];
}

export default function KeywordList({ keywords }: KeywordListProps) {
  return (
    <div className="space-y-3">
      {keywords.map((item, index) => (
        <div key={index} className="flex items-center justify-between pb-1">
          {/* 키워드 추천 리스트 */}
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{item.icon}</span>
            <span className="text-gray-800">{item.title}</span>
          </div>
          {/* 버튼 */}
          <Button size="small" variant="filled">
            선택하기
          </Button>
        </div>
      ))}
    </div>
  );
}
