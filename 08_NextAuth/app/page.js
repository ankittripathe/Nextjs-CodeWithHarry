import Image from "next/image";

const Home = () => {
  return (
    <div className="flex justify-center h-screen">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Nextjs logo"
        width={100}
        height={100}
        priority
      />
    </div>
  );
};
export default Home;
