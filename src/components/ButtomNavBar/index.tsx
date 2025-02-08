import Link from 'next/link';
import ChatIcon from '/public/assets/icons/navBar_chat.svg';
import CommunityIcon from '/public/assets/icons/navBar_community.svg';
import HomeIcon from '/public/assets/icons/navBar_home.svg';
import MypageIcon from '/public/assets/icons/navBar_mypage.svg';
import NotificationIcon from '/public/assets/icons/navBar_notification.svg';

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label?: any;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, label }) => (
  <Link href={href} className="flex flex-col items-center">
    {icon}
    <span className="text-12px mt-1">{label}</span>
  </Link>
);

export default function ButtomNavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-2 pb-4 rounded-r-3xl rounded-l-3xl">
      <div className="flex justify-around items-center max-w-md mx-3">
        <NavItem href="#" icon={<HomeIcon />} label="홈" />
        <NavItem href="#" icon={<ChatIcon />} label="채팅" />
        <NavItem href="#" icon={<CommunityIcon />} label="커뮤니티" />
        <NavItem href="#" icon={<NotificationIcon />} label="알림" />
        <NavItem href="#" icon={<MypageIcon />} label="마이프로필" />
      </div>
    </nav>
  );
}
