import { User } from "@/app/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
const { connectDb } = require("@/app/helper/db");

connectDb();

export function GET() {
  return NextResponse.json({ user: "anis" });
}
export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    const hash = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hash });
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
