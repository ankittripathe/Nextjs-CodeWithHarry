import "./globals.css";

export const metadata = {
  title: "next auth",
  description: "next auth.js in nextjs",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
