import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <span className="text-20px font-semiBold">김이름이름</span>
        <span className="text-20px font-semiBold">20</span>
        <Image
          src="/images/face-auth.png"
          alt="Face Auth Certification"
          width={16}
          height={16}
        />
      </div>
    </div>
  );
}
