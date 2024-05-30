import { fetchUsers, saveUser } from "@/utils/actions";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  // const { searchParams } = new URL(request.url);
  // const id = searchParams.get("id");
  // console.log(id);

  console.log(request.url);
  console.log(request.nextUrl.searchParams.get("id"));

  const users = await fetchUsers();
  return Response.json(users);
  // return NextResponse.redirect(new URL("/", request.url));
};

export const POST = async (request: Request) => {
  // const user = await request.json();
  // const newUser = { ...user, id: Date.now().toString() };
  // await saveUser(newUser);
  return Response.json({ msg: "user created!" });
};
