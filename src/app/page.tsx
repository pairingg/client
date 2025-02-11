import Login from '@/components/login';

export default function Home({
  searchParams,
}: {
  searchParams: { code?: string };
}) {
  const { code } = searchParams;

  if (code) {
    console.log('Authorization code:', code);
  }

  return (
    <div className="h-full px-5 py-10">
      <Login code={code} />
    </div>
  );
}
