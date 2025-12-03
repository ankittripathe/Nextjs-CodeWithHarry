import "./globals.css";

export const metadata = {
  title: "client Components",
  description: "How to use client Components in Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
