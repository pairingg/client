import OAuthButton from '../OAuthButton';
import KakaoLogo from '/public/assets/icons/kakao_logo.svg';
import NaverLogo from '/public/assets/icons/naver_logo.svg';

interface LoginConfig {
  icon: React.ReactNode;
  text: string;
  bgColor: string;
  textColor: string;
  url: string;
}

export default function OAuthButtons() {
  const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;

  const loginConfigs: Record<'naver' | 'kakao', LoginConfig> = {
    naver: {
      icon: <NaverLogo />,
      text: '네이버 로그인',
      bgColor: 'bg-[#03CF5D]',
      textColor: 'text-white',
      url: `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=1234567890`,
    },
    kakao: {
      icon: <KakaoLogo />,
      text: '카카오 로그인',
      bgColor: 'bg-[#FFE812]',
      textColor: 'text-[#181600]',
      url: `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`,
    },
  };

  const handleLogin = (url: string) => () => {
    window.location.href = url;
  };

  return (
    <div className="absolute bottom-0 w-full">
      <div className="flex w-full flex-col gap-3">
        {Object.entries(loginConfigs).map(([key, config]) => (
          <OAuthButton
            key={key}
            onClick={handleLogin(config.url)}
            {...config}
          />
        ))}
      </div>
    </div>
  );
}
