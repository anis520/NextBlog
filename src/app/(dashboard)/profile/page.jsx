"use client";
import user from "@/app/user.png";
import Image from "next/image";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
export default function Home() {
  const [task, settask] = useState(false);
  const [userinfo, setuserinfo] = useState(
    JSON.parse(localStorage.getItem("userinfo"))
  );

  return (
    <div className=" ps-20">
      <div className="w-full p-5 font-semibold text-2xl border bg-white">
        <p>welcome to profile</p>
      </div>

      <div className="p-10 flex items-center  gap-5">
        <div className=" ">
          <Image
            width="120"
            className="object-cover rounded-full"
            height="120"
            alt="user"
            src={userinfo?.photo}
          />
        </div>
        <div className="py-6">
          <p className="font-semibold">
            Name : <span className="text-indigo-400">Anis</span>
          </p>
          <p className="font-semibold">
            Email : <span className="text-indigo-400">Anis@gmail.com</span>
          </p>
          <p className="font-semibold">
            Role : <span className="text-indigo-400">user</span>
          </p>
        </div>
        <MdEdit className="  bg-white border cursor-pointer ms-40 hover:ring-2 ring-offset-2 hover:scale-110 ring-indigo-400 rounded-md text-4xl" />
      </div>
      <hr className="" />
      <div className="space-y-4 my-5 ">
        {/* single day  */}
        <div className="w-10/12 mx-auto p-2 rounded-md border bg-white flex items-center  gap-4 px-5 ">
          <p className="font-semibold ">Day 01</p>
          <p className="font-semibold text-sm flex flex-col items-center justify-center  text-gray-500 w-4/12 ">
            Tasks <p className="text-black">80/100</p>
          </p>{" "}
          <p className="font-semibold text-sm flex flex-col items-center justify-center  text-gray-500 w-4/12 ">
            Quizs <p className="text-black">80/100</p>
          </p>{" "}
          <p className="font-semibold text-sm  text-white px-2 rounded-md py-1 bg-green-400 ms-auto ">
            Good
          </p>
          <p className="font-semibold text-sm  text-white px-2 rounded-md py-1 bg-green-400 ms-auto ">
            Completed
          </p>
        </div>
        {/* single day  */}
        {/* single day  */}
        <div className="w-10/12 mx-auto p-2 rounded-md border bg-white flex items-center  gap-4 px-5 ">
          <p className="font-semibold ">Day 02</p>
          <p className="font-semibold text-sm flex flex-col items-center justify-center  text-gray-500 w-4/12 ">
            Tasks <p className="text-black  blur-sm">80/100</p>
          </p>{" "}
          <p className="font-semibold text-sm  flex flex-col items-center justify-center  text-gray-500 w-4/12 ">
            Quizs <p className="text-black  blur-sm">80/100</p>
          </p>{" "}
          <p className="font-semibold text-sm  text-white px-2 rounded-md py-1 bg-green-400 blur-sm ms-auto ">
            Good
          </p>
          <p className="font-semibold text-sm  text-white px-2 rounded-md py-1 bg-red-400 ms-auto ">
            upcoming
          </p>
        </div>
        {/* single day  */}
      </div>
    </div>
  );
}
