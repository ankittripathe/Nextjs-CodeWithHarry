import "./globals.css";

export const metadata = {
  title: "Layouts",
  description: "Layouts In Nextjs",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="text-center text-3xl">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;