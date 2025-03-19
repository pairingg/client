'use client';

import { useEffect, useState } from 'react';

import AiButton from '@/components/buttons/AiButton/index';
import ChatBubble from '@/components/chat/ChatBubble';
import ChatInput from '@/components/chat/ChatInput';
import ChatRoomHeader from '@/components/header/ChatRoomHeader';

interface ChatMessage {
  chatroomId: number;
  senderId: number;
  receiverId: number;
  message: string;
  readUsers: number[];
  createdAt: string;
  _id: string;
  chattingId: number;
}

export default function ChatRoom() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    // WebSocket 연결 생성
    const ws = new WebSocket('ws://110.165.17.254:8083/chat');

    ws.onopen = () => {
      console.log('WebSocket Connected');

      // 테스트 메시지 전송
      const testMessage = {
        chatroomId: 1,
        senderId: 1,
        receiverId: 2,
        message: '테스트 메시지입니다!',
      };
      console.log('Sending test message:', testMessage);
      ws.send(
        JSON.stringify({
          event: 'sendChatting',
          data: testMessage,
        }),
      );
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.event === 'receiveChatting') {
        console.log('Received message:', data.data);
        setMessages((prev) => [...prev, data.data]);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = (event) => {
      console.log('WebSocket disconnected:', event);
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const handleSendMessage = (message: string) => {
    if (!socket) return;

    const chatData = {
      chatroomId: 1,
      senderId: 1,
      receiverId: 2,
      message,
    };

    console.log('Sending message:', chatData);
    socket.send(
      JSON.stringify({
        event: 'sendChatting',
        data: chatData,
      }),
    );
  };

  const formatDate = (date: Date) =>
    date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });

  return (
    <div className="relative h-screen flex flex-col w-full mx-auto">
      <ChatRoomHeader profileImage="/images/profile.png" name="김이름" />

      <div className="flex-1 overflow-y-auto p-5">
        {messages.map((item, index) => {
          const isNewDay =
            index === 0 ||
            formatDate(new Date(messages[index - 1].createdAt)) !==
              formatDate(new Date(item.createdAt));
          return (
            <div key={item._id}>
              {isNewDay && (
                <div className="text-center text-gray1 font-14-medium my-4">
                  {formatDate(new Date(item.createdAt))}
                </div>
              )}
              <ChatBubble
                time={new Date(item.createdAt)}
                isMe={item.senderId === 1} // 실제 사용자 ID로 변경 필요
                isRead={item.readUsers.includes(2)} // 실제 수신자 ID로 변경 필요
              >
                {item.message}
              </ChatBubble>
            </div>
          );
        })}
        <div
          className={`absolute bottom-20 left-1/2 -translate-x-1/2 transition-all ${
            isMenuOpen ? 'z-0' : 'z-10'
          }`}
        >
          <AiButton />
        </div>
      </div>

      <div className="w-full relative z-20">
        <div className="w-full max-w-[520px] mx-auto">
          <ChatInput
            onSendMessage={handleSendMessage}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </div>
    </div>
  );
}
