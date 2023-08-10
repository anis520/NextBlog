"use client";
import Image from "next/image";
import Link from "next/link";
import {
  MdAccountBox,
  MdCheckCircle,
  MdCheckCircleOutline,
  MdCoPresent,
  MdDvr,
  MdFactCheck,
  MdHome,
  MdMarkAsUnread,
  MdNotificationsActive,
  MdPublishedWithChanges,
  MdSupervisorAccount,
} from "react-icons/md";
import { useState } from "react";
export default function Home() {
  const [task, settask] = useState(false);

  return (
    <div className=" ps-20">
      <div className="w-full p-5 font-semibold text-2xl border bg-white">
        <p>Your Today Tasks</p>
        <p className="text-sm bg-indigo-400 text-white w-fit py-1 px-2 rounded-md my-2">
          Date : 22/02/2023
        </p>
      </div>

      <div className="space-y-2 mt-5">
        {/* single task  */}

        <div
          className={`flex w-8/12 mx-auto bg-gray-300 rounded-md font-semibold p-5 items-center justify-between cursor-pointer  gap-2 ${
            task && "bg-green-400 text-white"
          } `}
        >
          <p className="w-11/12">
            Add some letters Lorem ipsum dolor sit amet consectetur, adipisicing
            nde aspernatur, nesciunt vero laboriosam quam
          </p>
          <div className="w-1/12 flex items-center justify-center">
            {task ? (
              <MdCheckCircle
                onClick={() => settask(!task)}
                className="text-2xl"
              />
            ) : (
              <MdCheckCircleOutline
                onClick={() => settask(!task)}
                className="text-2xl"
              />
            )}
          </div>
        </div>
        {/* single task  */}
      </div>
    </div>
  );
}
