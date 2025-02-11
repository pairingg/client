import Image from 'next/image';
import LoginButtons from './OAuthButtons';

export default function Login() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full">
      <Image
        className="mb-44"
        src="/images/login_pairing_logo.png"
        alt="login"
        width={343}
        height={339}
      />
      <LoginButtons />
    </div>
  );
}
