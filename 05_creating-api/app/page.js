'use client'
import Image from "next/image";

const Home = () => {
  const handleClick = async () => {
    let data = {
      name: "Ankit",
      role: "Coder",
    };

    let a = await fetch("api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let res = await a.json();
    console.log('response', res);
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Next.js API routes demo</h1>
      <button className="bg-red-500 rounded-md p-1" onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
