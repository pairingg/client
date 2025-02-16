import BottomNavBar from '@/components/BottomNavBar';
import PageHeader from '@/components/header/PageHeader';
import NotificationCard from '@/components/NotificationCard';

export default function Notifications() {
  const notificationList = [
    {
      profileImg: '/images/profile.png',
      name: '김이름',
      age: 20,
      location: '서울시',
      time: new Date(),
      isHeart: true,
      isMe: false,
    },
    {
      profileImg: '/images/profile.png',
      name: '김이름',
      age: 20,
      location: '서울시',
      time: new Date(),
      isHeart: true,
      isMe: false,
    },
    {
      profileImg: '/images/profile.png',
      name: '김이름',
      age: 20,
      location: '서울시',
      time: new Date(),
      isHeart: false,
      isMe: true,
    },
  ];

  return (
    <div>
      <div className="shadow-md">
        <PageHeader title="알림" />
      </div>

      <div>
        {notificationList.map((item, index) => (
          <NotificationCard
            key={index}
            profileImg={item.profileImg}
            name={item.name}
            age={item.age}
            location={item.location}
            time={item.time}
            isHeart={item.isHeart}
            isMe={item.isMe}
          />
        ))}
      </div>

      <BottomNavBar />
    </div>
  );
}
