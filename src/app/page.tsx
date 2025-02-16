import Script from 'next/script';

export default function Home() {
  return (
    <div>
      <Script
        defer
        src="https://cdn.swygbro.com/public/widget/swyg-widget.js"
      ></Script>
    </div>
  );
}
