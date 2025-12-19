import "./globals.css";

export const metadata = {
  title: "Environment Variable",
  description: "Environment Variable In Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
