import { User } from "@/app/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const { connectDb } = require("@/app/helper/db");

connectDb();

// export function post() {
//   return NextResponse.json({ user: "anis" });
// }
export async function POST(request) {
  try {
    console.log(request);
  } catch (error) {
    return NextResponse.json({
      message: "user login faild",
    });
  }
}
