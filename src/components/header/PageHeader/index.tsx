interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="px-7 pt-3">
      <p className="text-24px font-bold">{title}</p>
    </div>
  );
}
