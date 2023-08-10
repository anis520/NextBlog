"use client";

import { useState } from "react";
export default function Home() {
  const [task, settask] = useState(false);

  return (
    <div className=" ps-20">
      <div className="w-full p-5 font-semibold text-2xl border bg-white">
        <p>Your Today Quiz</p>
        <p className="text-sm bg-indigo-400 text-white w-fit py-1 px-2 rounded-md my-2">
          Date : 22/02/2023
        </p>
      </div>

      <div className="space-y-4 my-5 ">
        {/* single quiz  */}

        <div className="w-10/12 mx-auto p-5 rounded-md border bg-white ">
          <p className="font-semibold my-3">
            1 . Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
            hic ?
          </p>
          <div className="flex flex-col space-y-2">
            <p className="border  px-2 rounded-md hover:bg-green-400 hover:text-white font-semibold py-1 cursor-pointer">
              A . Car
            </p>
            <p className="border  px-2 rounded-md hover:bg-green-400 hover:text-white font-semibold py-1 cursor-pointer">
              B . Bus
            </p>
            <p className="border  px-2 rounded-md hover:bg-green-400 hover:text-white font-semibold py-1 cursor-pointer">
              C . Truck
            </p>
            <p className="border  px-2 rounded-md hover:bg-green-400 hover:text-white font-semibold py-1 cursor-pointer">
              D . Plane
            </p>
          </div>
        </div>

        {/* single quiz  */}
        {/* single quiz  */}

        <div className="w-10/12 mx-auto p-5 rounded-md border bg-white ">
          <p className="font-semibold my-3">
            1 . Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
            hic ?
          </p>
          <div className="flex flex-col space-y-2">
            <p className="border  px-2 rounded-md hover:bg-green-400 hover:text-white font-semibold py-1 cursor-pointer">
              A . Car
            </p>
            <p className="border  px-2 rounded-md hover:bg-green-400 hover:text-white font-semibold py-1 cursor-pointer">
              B . Bus
            </p>
            <p className="border  px-2 rounded-md hover:bg-green-400 hover:text-white font-semibold py-1 cursor-pointer">
              C . Truck
            </p>
            <p className="border  px-2 rounded-md hover:bg-green-400 hover:text-white font-semibold py-1 cursor-pointer">
              D . Plane
            </p>
          </div>
        </div>

        {/* single quiz  */}
        {/* single quiz  */}

        <div className="w-10/12 mx-auto p-5 rounded-md border bg-white ">
          <p className="font-semibold my-3">
            1 . Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
            hic ?
          </p>
          <div className="flex flex-col space-y-2">
            <p className="border  px-2 rounded-md hover:bg-green-400 hover:text-white font-semibold py-1 cursor-pointer">
              A . Car
            </p>
            <p className="border  px-2 rounded-md hover:bg-green-400 hover:text-white font-semibold py-1 cursor-pointer">
              B . Bus
            </p>
            <p className="border  px-2 rounded-md hover:bg-green-400 hover:text-white font-semibold py-1 cursor-pointer">
              C . Truck
            </p>
            <p className="border  px-2 rounded-md hover:bg-green-400 hover:text-white font-semibold py-1 cursor-pointer">
              D . Plane
            </p>
          </div>
        </div>

        {/* single quiz  */}
        {/* single quiz  */}

        <div className="w-10/12 mx-auto p-5 rounded-md border bg-white ">
          <p className="font-semibold my-3">
            1 . Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
            hic ?
          </p>
          <div className="flex flex-col space-y-2">
            <p className="border  px-2 rounded-md hover:bg-green-400 hover:text-white font-semibold py-1 cursor-pointer">
              A . Car
            </p>
            <p className="border  px-2 rounded-md hover:bg-green-400 hover:text-white font-semibold py-1 cursor-pointer">
              B . Bus
            </p>
            <p className="border  px-2 rounded-md hover:bg-green-400 hover:text-white font-semibold py-1 cursor-pointer">
              C . Truck
            </p>
            <p className="border  px-2 rounded-md hover:bg-green-400 hover:text-white font-semibold py-1 cursor-pointer">
              D . Plane
            </p>
          </div>
        </div>

        {/* single quiz  */}
      </div>

      <div className="flex justify-end mt-5  mb-10 w-10/12 mx-auto gap-4 ">
        <p className="bg-red-500 text-white font-semibold py-1 px-4 rounded-md cursor-pointer">
          Reset
        </p>
        <p className="bg-green-500 text-white font-semibold py-1 px-4 rounded-md cursor-pointer">
          Submit
        </p>{" "}
      </div>
    </div>
  );
}
