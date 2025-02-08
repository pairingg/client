import NotificationCard from '@/components/NotificationCard';

export default function Home() {
  return (
    <NotificationCard
      profileImg="/images/profile.png"
      name="김이름"
      age={20}
      location="서울시 용산구"
      time="PM 9:30"
    />
  );
}
