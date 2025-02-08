import { PropsWithChildren } from 'react';

interface Props {
  time: string;
  isMe?: boolean;
  isRead?: boolean;
}

export default function ChatBubble({
  time,
  isMe = false,
  isRead = false,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className="flex flex-col max-w-[247px]">
      {/* 채팅 버블 */}
      <div
        className={`p-[10px] text-14px mb-[20px] w-fit ${
          isMe
            ? 'bg-mainPink1 rounded-[14px] rounded-br-[1px] text-white'
            : 'bg-gray3 rounded-[14px] rounded-bl-[1px] text-black'
        }`}
      >
        {children}
      </div>

      {/* 채팅 시간, 읽음 표시 */}
      <div
        className={`flex gap-[5px] text-black text-12px items-center ${
          isMe ? 'justify-end' : ''
        }`}
      >
        {isMe && (
          <div className="font-medium leading-[14px]">{isRead && '읽음'}</div>
        )}
        <div className="font-roboto translate-y-[0.5px]">{time}</div>
      </div>
    </div>
  );
}
