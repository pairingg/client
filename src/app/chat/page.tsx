import BottomNavBar from '@/components/BottomNavBar';
import ChatListItem from '@/components/chat/ChatListItem';
import SearchInput from '@/components/SearchInput';

export default function Chat() {
  const chatListItems = [];
  return (
    <div>
      <div>
        <h1>채팅</h1>
      </div>
      <div>
        <SearchInput />
      </div>
      <div>
        <ChatListItem
          name="김이름"
          time={new Date()}
          message="채팅방 리스트"
          profileImage="/images/profile.png"
        />
      </div>

      <BottomNavBar />
    </div>
  );
}
