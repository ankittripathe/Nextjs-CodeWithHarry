import Image from "next/image";
export const metadata = {
  title: "About Facebook - Connect with the World",
  description: "This is About Facebook Page",
};

const about = () => {
  return (
    <div className="flex gap-20">
      <div className="container my-2 size-60 bg-red-300 relative">
        <Image
          fill={true}
          className="mx-auto object-fill"
          src="https://live.staticflickr.com/3716/11924762773_af69c9d5f4_z.jpg"
          alt="AboutPage-Image"
        />
        <h1 className="text-center">About page</h1>
      </div>

      <div className="container my-2 size-60 bg-red-300 relative">
        <Image
          fill={true}
          className="mx-auto object-contain"
          src="https://live.staticflickr.com/3716/11924762773_af69c9d5f4_z.jpg"
          alt="AboutPage-Image"
        />
        <h1 className="text-center">About page</h1>
      </div>

      <div className="container my-2 size-60 bg-red-300 relative">
        <Image
          fill={true}
          className="mx-auto object-cover"
          src="https://live.staticflickr.com/3716/11924762773_af69c9d5f4_z.jpg"
          alt="AboutPage-Image"
        />
        <h1 className="text-center">About page</h1>
      </div>
    </div>
  );
};

export default about;
