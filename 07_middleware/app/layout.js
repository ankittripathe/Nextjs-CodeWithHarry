import "./globals.css";

export const metadata = {
  title: "middleware",
  description: "Middlewear in Nextjs",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
