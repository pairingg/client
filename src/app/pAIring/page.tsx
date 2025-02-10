import KeywordRecommendation from '@/components/KeywordRecommendation';
import ProfileCard from '@/components/ProfileCard';
import AgeIcon from '/public/assets/icons/keyword_age.svg';
import BeerIcon from '/public/assets/icons/keyword_beer.svg';
import LocationIcon from '/public/assets/icons/keyword_location.svg';
import PersonalityIcon from '/public/assets/icons/keyword_personality.svg';
import LogoIcon from '/public/assets/icons/logo_letter.svg';

const keywords = [
  { icon: <PersonalityIcon />, title: '성격' },
  { icon: <LocationIcon />, title: '상대의 위치' },
  { icon: <AgeIcon />, title: '나이' },
  { icon: <BeerIcon />, title: '음주 스타일' },
];

export default function MainPage() {
  return (
    <main className="layout flex flex-col overflow-hidden shadow-lg">
      <div>
        <LogoIcon />
      </div>

      <div>
        <ProfileCard name="김이름" age={20} location="서울시 용산구" />
        <ProfileCard name="김이름" age={20} location="서울시 용산구" />
      </div>

      <div>
        <p>맞춤 추천</p>
        <KeywordRecommendation keywords={keywords} />
      </div>

      <div>{/* <BottomNavBar /> */}</div>
    </main>
  );
}
