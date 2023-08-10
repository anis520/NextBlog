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
    const { email, password } = await request.json();
    //   const hash = await bcrypt.hash(password, 10);
    const user = await User.findOne({ email: email });

    if (user == null) {
      throw new Error("user not found");
    }

    const passwordmatch = bcrypt.compareSync(password, user.password);
    if (!passwordmatch) {
      throw new Error("Password not match");
    }

    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.ACCESS_TOKEN
    );
    const response = NextResponse.json({ message: "loging successfull", user });
    response.cookies.set("authToken", token, {
      expiresIn: "5d",
      httpOnly: true,
    });
    return response;
  } catch (error) {
    return NextResponse.json({
      message: "user login faild",
    });
  }
}
