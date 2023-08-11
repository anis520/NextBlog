"use client";
import user from "@/app/user.png";
import Image from "next/image";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
export default function Home() {
  const [task, settask] = useState(false);

  return (
    <div className=" ps-20">
      <div className="w-full p-5 font-semibold text-2xl border bg-white">
        <p>welcome to Admin pannel</p>
      </div>
    </div>
  );
}
