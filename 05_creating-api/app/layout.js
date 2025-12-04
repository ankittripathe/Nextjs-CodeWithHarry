import "./globals.css";

export const metadata = {
  title: "Creating API",
  description: "Creating API in Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
