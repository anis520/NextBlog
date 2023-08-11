"use client";
import Link from "next/link";
import React from "react";
import {
  MdAccountBox,
  MdCoPresent,
  MdDvr,
  MdFactCheck,
  MdHome,
  MdLogout,
  MdMarkAsUnread,
  MdNotificationsActive,
  MdPublishedWithChanges,
  MdSupervisorAccount,
} from "react-icons/md";
import Router from "next/router";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { logout, me } from "@/app/service/userService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const route = useRouter();
  const [user, setuser] = useState();

  useEffect(() => {
    try {
      (async () => {
        const getme = await me();
        // console.log(getme + "done5454");

        console.log(getme.resut);
        localStorage.setItem("userinfo", JSON.stringify(getme.resut));
      })();
    } catch (error) {
      console.log(error.response.message);
    }
  }, []);

  const handlelogout = async () => {
    try {
      await logout();
      route.push("/login");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="w-20 bg-indigo-400 h-screen text-white flex flex-col  justify-center items-center gap-4 fixed top-0 left-0">
      <ProgressBar
        height="5px"
        color="#00ff00"
        options={{ showSpinner: false }}
      />
      <Link href="/">
        <div className="h-10 w-10  flex group relative items-center justify-center hover:bg-white hover:text-gray-500 rounded-md duration-100 cursor-pointer">
          <MdHome className="text-3xl " />
          <p className="absolute top-2 hidden group-hover:block  left-16 bg-slate-500 font-semibold text-sm w-16 rounded-md text-center  py-1 text-white">
            Home
          </p>
        </div>
      </Link>
      <Link href="/profile">
        <div className="h-10 w-10  flex group relative items-center justify-center hover:bg-white hover:text-gray-500 rounded-md duration-100 cursor-pointer">
          <MdAccountBox className="text-3xl " />
          <p className="absolute top-2 hidden group-hover:block  left-16 bg-slate-500 font-semibold text-sm w-16 rounded-md text-center  py-1 text-white">
            Profile
          </p>
        </div>
      </Link>
      <div className="h-10 relative w-10 group flex items-center justify-center hover:bg-white hover:text-gray-500 rounded-md duration-100 cursor-pointer">
        <p className="absolute top-2 hidden group-hover:block  left-16 bg-slate-500 font-semibold text-sm w-24 rounded-md text-center  p-1  text-white">
          Notifications
        </p>
        <MdNotificationsActive className="text-3xl " />
      </div>

      <Link href="/position">
        <div className="h-10 w-10  flex items-center relative group justify-center hover:bg-white hover:text-gray-500 rounded-md duration-100 cursor-pointer">
          <MdSupervisorAccount className="text-3xl " />
          <p className="absolute top-2 hidden group-hover:block  left-16 bg-slate-500 font-semibold text-sm w-16 rounded-md text-center  py-1 text-white">
            Friends
          </p>
        </div>
      </Link>
      <Link href="/tasks">
        <div className="h-10 relative group w-10  flex items-center justify-center hover:bg-white hover:text-gray-500 rounded-md duration-100 cursor-pointer">
          <p className="absolute top-2 hidden group-hover:block  left-16 bg-slate-500 font-semibold text-sm w-16 rounded-md text-center  py-1 text-white">
            Tasks
          </p>
          <MdFactCheck className="text-3xl " />
        </div>
      </Link>
      {/* <Link href="/login"> */}
      <div
        onClick={handlelogout}
        className="h-10 relative group w-10  flex items-center justify-center hover:bg-white hover:text-gray-500 rounded-md duration-100 cursor-pointer"
      >
        <p className="absolute top-2 hidden group-hover:block  left-16 bg-slate-500 font-semibold text-sm w-16 rounded-md text-center  py-1 text-white">
          Logout
        </p>
        <MdLogout className="text-3xl " />
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Navbar;
