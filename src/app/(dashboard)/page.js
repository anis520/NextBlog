import Image from "next/image";
import Link from "next/link";
import {
  MdAccountBox,
  MdCoPresent,
  MdDvr,
  MdFactCheck,
  MdHome,
  MdMarkAsUnread,
  MdNotificationsActive,
  MdPublishedWithChanges,
  MdSupervisorAccount,
} from "react-icons/md";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
export default function Home() {
  return (
    <div className="  ps-20">
      {/* review date  */}

      <div className="p-5 flex bg-white border justify-between">
        <div className="space-y-2">
          <p className=" font-semibold text-4xl  ">100 Days callange</p>

          <p className="border w-fit bg-white text-gray-500 font-semibold px-2 rounded-md cursor-pointer">
            {" "}
            Learn more
          </p>
        </div>
        <div className=" border w-40 h-fit p-2 bg-indigo-400  rounded-md flex  items-center justify-center">
          <p className="font-semibold text-white">90 Days left</p>
        </div>
      </div>
      {/* review date  */}

      {/* home start  */}

      <div className=" p-5 w-full grid grid-cols-1 gap-4   md:grid-cols-4 ">
        <Link href={"/tasks"}>
          <div className=" border bg-white items-center justify-center gap-4  p-5 rounded-md shadow-md flex cursor-pointer">
            <MdPublishedWithChanges className="text-green-400 text-2xl" />
            <p className="text-slate-600 font-semibold text-xl">Today Tasks</p>
          </div>
        </Link>
        <Link href="/quiz">
          <div className=" border bg-white items-center justify-center gap-4  p-5 rounded-md shadow-md flex cursor-pointer">
            <MdDvr className="text-red-400 text-2xl" />
            <p className="text-slate-600 font-semibold text-xl">Today Quiz</p>
          </div>
        </Link>
        <Link href="/position">
          <div className=" border bg-white items-center justify-center gap-4  p-5 rounded-md shadow-md flex cursor-pointer">
            <MdCoPresent className="text-cyan-400  text-2xl" />
            <p className="text-slate-600 font-semibold text-xl">Position</p>
            <p className="text-slate-600 font-semibold text-xl border px-2 rounded-md">
              2/20
            </p>
          </div>
        </Link>
      </div>

      {/* home end   */}
    </div>
  );
}
