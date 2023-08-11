import { User } from "@/app/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const { connectDb } = require("@/app/helper/db");

export async function GET(request) {
  try {
    connectDb();
    const authToken = request.cookies.get("authToken")?.value;

    console.log(authToken);

    const verfiy = jwt.verify(authToken, process.env.ACCESS_TOKEN);

    const finduserinfo = await User.findOne({ email: verfiy.email }).select(
      "-password"
    );

    return NextResponse.json({
      token: authToken,
      resut: finduserinfo,
    });
  } catch (error) {
    return NextResponse.json({
      message: "User not loging",
    });
  }
}
