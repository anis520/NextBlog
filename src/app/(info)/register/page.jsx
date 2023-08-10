"use client";
import { useRouter } from "next/navigation";
import React from "react";
import "@/app/globals.css";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Singup } from "@/app/service/userService";
const page = () => {
  const route = useRouter();
  const [input, setinput] = useState({
    name: "",
    email: "",
    password: "",
    conpassword: "",
  });
  const handleregister = async () => {
    if (input.password == input.conpassword) {
      try {
        const data = await Singup({
          name: input.name,
          email: input.email,
          password: input.password,
        });
        console.log(data);
        toast.success(data.message);
        route.push("/login");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("Confrom password not match");
    }
    if (
      input.name.trim() == "" ||
      input.email.trim() == "" ||
      input.conpassword.trim() == "" ||
      input.password.trim() == ""
    ) {
      toast.warn("all field");
    }
  };
  return (
    <div className="flex items-center justify-center bg-indigo-400 h-screen w-screen">
      <ToastContainer position="bottom-left" />
      <div className="p-5   rounded-md bg-white  w-4/12">
        <p className="font-semibold text-gray-600">User Register</p>
        <hr className="my-3" />

        <p className="font-semibold text-gray-600">Name</p>
        <input
          value={input.name}
          onChange={(e) =>
            setinput({
              ...input,
              name: e.target.value,
            })
          }
          type="text"
          className="border focus:outline-none p-1 w-full rounded-md  my-2"
        />

        <p className="font-semibold text-gray-600">Email</p>
        <input
          value={input.email}
          onChange={(e) =>
            setinput({
              ...input,
              email: e.target.value,
            })
          }
          type="text"
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
        <p className="font-semibold  text-gray-600">Confrom password</p>
        <input
          value={input.conpassword}
          onChange={(e) =>
            setinput({
              ...input,
              conpassword: e.target.value,
            })
          }
          type="password"
          className="border p-1 focus:outline-none w-full rounded-md  my-2"
        />
        <p
          className="bg-indigo-400 rounded-md text-white  font-semibold text-center py-2 cursor-pointer"
          onClick={handleregister}
        >
          Register
        </p>
        <Link href="/login">
          <p className="text-indigo-400 text-center font-semibold mt-2 cursor-pointer ">
            Have An Accout ?
          </p>
        </Link>
      </div>
    </div>
  );
};

export default page;
