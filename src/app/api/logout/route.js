import { User } from "@/app/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const { connectDb } = require("@/app/helper/db");

export async function GET(request) {
  try {
    connectDb();
    const response = NextResponse.json({ message: "logout successfull" });
    response.cookies.set("authToken", null, {
      expiresIn: Date.now(0),
      httpOnly: true,
    });
    return response;
  } catch (error) {
    return NextResponse.json({
      message: "user logout faild",
    });
  }
}
