import BottomNavBar from '@/components/BottomNavBar';
import ChatListItem from '@/components/chat/ChatListItem';
import SearchInput from '@/components/SearchInput';

export default function Chat() {
  const chatListItems = [
    {
      name: '김이름',
      time: new Date(),
      message: '채팅방 리스트',
      profileImage: '/images/profile.png',
      messageCnt: 2,
    },
    {
      name: '김이름',
      time: new Date(),
      message: '채팅방 리스트',
      profileImage: '/images/profile.png',
      messageCnt: 2,
    },
    {
      name: '김이름',
      time: new Date(),
      message: '채팅방 리스트',
      profileImage: '/images/profile.png',
      messageCnt: 2,
    },
    {
      name: '김이름',
      time: new Date(),
      message: '채팅방 리스트',
      profileImage: '/images/profile.png',
      messageCnt: 2,
    },
    {
      name: '김이름',
      time: new Date(),
      message: '채팅방 리스트',
      profileImage: '/images/profile.png',
      messageCnt: 2,
    },
    {
      name: '김이름',
      time: new Date(),
      message: '채팅방 리스트',
      profileImage: '/images/profile.png',
      messageCnt: 2,
    },
    {
      name: '김이름',
      time: new Date(),
      message: '채팅방 리스트',
      profileImage: '/images/profile.png',
      messageCnt: 2,
    },
    {
      name: '김이름',
      time: new Date(),
      message: '채팅방 리스트',
      profileImage: '/images/profile.png',
      messageCnt: 2,
    },
    {
      name: '김이름',
      time: new Date(),
      message: '채팅방 리스트',
      profileImage: '/images/profile.png',
      messageCnt: 2,
    },
  ];

  // 메시지 개수 총합 계산
  const totalMessageCount = chatListItems.reduce(
    (sum, item) => sum + item.messageCnt,
    0,
  );

  return (
    <div className="flex flex-col pb-[70px] h-screen">
      <div className="px-7 pt-3">
        <p className="text-24px font-bold">채팅</p>
      </div>
      <div className="p-5">
        <SearchInput />
      </div>
      <div className="flex-grow overflow-y-auto">
        {chatListItems.map((item, index) => (
          <ChatListItem
            key={index}
            name={item.name}
            time={item.time}
            message={item.message}
            profileImage={item.profileImage}
            messageCnt={item.messageCnt}
          />
        ))}
      </div>

      <BottomNavBar chatNotificationCount={totalMessageCount} />
    </div>
  );
}
