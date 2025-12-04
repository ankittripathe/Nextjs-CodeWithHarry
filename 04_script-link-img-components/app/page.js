import Image from "next/image";

const Home = () => {
  return (
    <div className="container my-2 size-90 bg-red-300">
      <Image
        className="mx-auto"
        width={800}
        height={700}
        src="https://live.staticflickr.com/3716/11924762773_af69c9d5f4_z.jpg"
        alt="HomePage-Image"
      />

      <h1 className="text-center">Welcome, Home page</h1>
    </div>
  );
};

export default Home;
