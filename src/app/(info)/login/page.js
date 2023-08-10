"use client";
import React from "react";
import "@/app/globals.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { login } from "@/app/service/userService";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const route = useRouter();
  const [input, setinput] = useState({
    email: "",
    password: "",
  });
  const handlelogin = async () => {
    try {
      const data = await login({
        email: input.email,
        password: input.password,
      });
      console.log(data);
      toast.success(data.message);
      route.push("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }

    if (input.email.trim() == "" || input.password.trim() == "") {
      toast.warn("all field");
    }
  };
  return (
    <div className="flex items-center justify-center bg-indigo-400 h-screen w-screen">
      <ToastContainer position="bottom-left" />

      <div className="p-5   rounded-md bg-white  w-4/12">
        <p className="font-semibold text-gray-600">User login</p>
        <hr className="my-3" />
        <p className="font-semibold text-gray-600">Email</p>
        <input
          value={input.email}
          type="text"
          onChange={(e) =>
            setinput({
              ...input,
              email: e.target.value,
            })
          }
          className="border focus:outline-none p-1 w-full rounded-md  my-2"
        />
        <p className="font-semibold  text-gray-600">Password</p>
        <input
          value={input.password}
          onChange={(e) =>
            setinput({
              ...input,
              password: e.target.value,
            })
          }
          type="password"
          className="border p-1 focus:outline-none w-full rounded-md  my-2"
        />
        <p
          onClick={handlelogin}
          className="bg-indigo-400 rounded-md text-white  font-semibold text-center py-2 cursor-pointer"
        >
          Login
        </p>
        <Link href="/register">
          <p className="text-indigo-400 text-center font-semibold mt-2 cursor-pointer ">
            Create An Accout ?
          </p>
        </Link>
      </div>
    </div>
  );
};

export default page;
