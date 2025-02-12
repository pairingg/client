import ChatListItem from '@/components/chat/ChatListItem';

export default function Home() {
  return (
    <ChatListItem
      name={'김이름'}
      time={new Date()}
      message={'안녕하세요'}
      profileImage={'/images/profile.png'}
      messageCnt={0}
    />
  );
}
