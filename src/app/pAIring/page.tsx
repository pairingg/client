import BottomNavBar from '@/components/BottomNavBar';
import ProfileCard from '@/components/ProfileCard';
import LogoIcon from '/public/assets/icons/logo_letter.svg';

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
      </div>

      <div>
        <BottomNavBar />
      </div>
    </main>
  );
}
