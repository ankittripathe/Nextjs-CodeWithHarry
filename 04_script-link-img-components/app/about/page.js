import Image from "next/image";
export const metadata = {
  title: "About Facebook - Connect with the World",
  description: "This is About Facebook Page",
};

const about = () => {
  return (
    <div className="container my-2 size-80 bg-red-300 relative object-contain">
      <Image
        fill={true}
        className="mx-auto"
        src="https://live.staticflickr.com/3716/11924762773_af69c9d5f4_z.jpg"
        alt=""
      />

      <h1 className="text-center">About page</h1>
    </div>
  );
};

export default about;
