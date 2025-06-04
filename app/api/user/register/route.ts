import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized!" }, { status: 401 });
    }

    //Check if User Exists in the Database
    let user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    //If User Doesn't Exist, Create a New User
    if (!user) {
      user = await prisma.user.create({
        data: {
          clerkId: userId,
        },
      });
    } else {
      console.log('User Already Exists!');
      
    }

    return NextResponse.json(user);
  } catch (error) {
    console.log("Error Creating User: ", error);
    return NextResponse.json(
      { error: "Error Creating User!" },
      { status: 500 }
    );
  }
}
