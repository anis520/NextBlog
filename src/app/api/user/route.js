import { User } from "@/app/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
const { connectDb } = require("@/app/helper/db");

export function GET() {
  connectDb();
  return NextResponse.json({ user: "anis" });
}
export async function POST(request) {
  try {
    connectDb();
    const { name, email, password, role } = await request.json();
    const hash = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hash, role });
    const createdUser = await user.save();

    return NextResponse.json({
      message: "user register Successfull",
      user: createdUser,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Register failed",
    });
  }
}
