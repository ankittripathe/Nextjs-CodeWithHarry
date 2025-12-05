"use client";
import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  console.log("Run in Console Browser");

  return (
    <div>
      <h1 className="text-xl">Count:{count}</h1>
      <button className="bg-red-600 rounded-md p-1" onClick={() => {setCount(count + 1)}}>
        Increment
      </button>
    </div>
  );
};
export default Home;
// Notes: Next.js me By-default sab Server Components hai. Koie vi hook ko use krne ke liye usko client components bana padta hai. client components banane ke liye client mention krna hota hai at the Top.
