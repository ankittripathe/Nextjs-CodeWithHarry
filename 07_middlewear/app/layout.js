import "./globals.css";

export const metadata = {
  title: "MiddleWear",
  description: "Middlewear in Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
