import Link from 'next/link';
import ChatIcon from '/public/assets/icons/navBar_chat.svg';
import ChatActiveIcon from '/public/assets/icons/navBar_chat_active.svg';
import CommunityIcon from '/public/assets/icons/navBar_community.svg';
import CommunityActiveIcon from '/public/assets/icons/navBar_community_active.svg';
import HomeIcon from '/public/assets/icons/navBar_home.svg';
import HomeActiveIcon from '/public/assets/icons/navBar_home_active.svg';
import MypageIcon from '/public/assets/icons/navBar_mypage.svg';
import MypageActiveIcon from '/public/assets/icons/navBar_mypage_active.svg';
import NotificationIcon from '/public/assets/icons/navBar_notification.svg';
import NotificationActiveIcon from '/public/assets/icons/navBar_notification_active.svg';

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label?: any;
  activeIcon: React.ReactNode;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  icon,
  label,
  activeIcon,
  isActive,
}) => (
  <Link
    href={href}
    className={`flex flex-col items-center ${isActive ? 'text-mainPink1' : 'text-black'}`}
  >
    {isActive ? activeIcon : icon}
    <span className="text-12px mt-1">{label}</span>
  </Link>
);

export default function ButtomNavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-2 pb-4 rounded-r-3xl rounded-l-3xl">
      <div className="flex justify-around items-center max-w-md mx-3">
        <NavItem
          href="#"
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
          label="홈"
          isActive={false}
        />
        <NavItem
          href="#"
          icon={<ChatIcon />}
          activeIcon={<ChatActiveIcon />}
          label="채팅"
          isActive={false}
        />
        <NavItem
          href="#"
          icon={<CommunityIcon />}
          activeIcon={<CommunityActiveIcon />}
          label="커뮤니티"
          isActive={false}
        />
        <NavItem
          href="#"
          icon={<NotificationIcon />}
          activeIcon={<NotificationActiveIcon />}
          label="알림"
          isActive={false}
        />
        <NavItem
          href="#"
          icon={<MypageIcon />}
          activeIcon={<MypageActiveIcon />}
          label="마이프로필"
          isActive={false}
        />
      </div>
    </nav>
  );
}
