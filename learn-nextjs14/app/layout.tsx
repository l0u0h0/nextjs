import Navigation from "../components/navigation";

export const metadata = {
  title: "Next.js",
  description: "Learning Next.js 14 version Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
