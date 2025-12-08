// 'use client'
import Navbar from "@/components/Navbar";
import fs from "fs/promises";

export default function Home() {
  // Notes:- Yaha BackEnd wala logic likh skte ho, Agar aapka server components hai like below.
  console.log("Hey I am Ankit");
  let a = fs.readFile(".gitignore");
  a.then((e) => console.log(e.toString()));

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl text-center">I am a Components</h1>
    </div>
  );
}

/*
Notes: 
(1) Nextjs me bydefault Sab Server Components hai.
(2) Server me dikhega jo likhe hai server wala logic. Agar client components hota toh hm log use nhi kr paate..
(3) Serevr wala answer terminal me dikhega aur console me Server likh ke..
(4) Maan lo aapko Navbar me hook use krna hai.. jo ke client components hai, toh Shirf Navbar ko use client bana ke serevr components me jake Embedded kr skte hai..
*/
