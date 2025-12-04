import Script from "next/script";
// 
export const metadata = {
  title: "Contact Facebook - Connect with the World",
  description: "This is Contact Facebook Page",
};

const contact = () => {
  return (
    <div>
      {/* Script Components */}
      <Script>{`alert('Welcome to Contact Page')`}</Script>
      <h1>Contact Page</h1>
    </div>
  );
};

export default contact;
