"use client";
import user from "@/app/user.png";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [task, settask] = useState(false);

  return (
    <div className=" ps-20">
      <div className="w-full p-5 font-semibold text-2xl border bg-white">
        <p>All Developers</p>
      </div>

      <div className="space-y-4 my-5 ">
        {/* single user  */}
        <div className="w-10/12 mx-auto p-2 rounded-md border bg-white flex items-center  gap-4 px-5 ">
          <Image
            src={user}
            wigth="50"
            height="50"
            className="border rounded-full"
          />
          <p className="font-semibold text-sm  w-5/12">Raza miya</p>
          <p className="font-semibold text-sm  text-gray-500 w-4/12 ">
            Raza@gmail.com
          </p>{" "}
          <p className="font-semibold  text-gray-600 text-sm">90%</p>
          <p className="font-semibold text-sm  text-white px-2 rounded-md py-1 bg-green-400 ">
            Toper
          </p>
          <p className="font-semibold text-sm  text-white px-2 rounded-md bg-indigo-400">
            1
          </p>
        </div>
        {/* single user  */}
        {/* single user  */}
        <div className="w-10/12 mx-auto p-2 rounded-md border bg-white flex items-center  gap-4 px-5 ">
          <Image
            src={user}
            wigth="50"
            height="50"
            className="border rounded-full"
          />
          <p className="font-semibold text-sm  w-5/12">anis ahad</p>
          <p className="font-semibold text-sm  text-gray-500 w-4/12 ">
            anis@gmail.com
          </p>{" "}
          <p className="font-semibold  text-gray-600 text-sm">90%</p>
          <p className="font-semibold text-sm  text-white px-2 rounded-md py-1 bg-green-400 ">
            Toper
          </p>
          <p className="font-semibold text-sm  text-white px-2 rounded-md bg-indigo-400">
            2
          </p>
        </div>
        {/* single user  */}
      </div>
    </div>
  );
}
