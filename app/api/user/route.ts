import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized!" }, { status: 401 });
    }

    //Check if User Exists in the Database
    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User Not Found!" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.log("Error Getting User: ", error);
    return NextResponse.json({ error: "Error Getting User!" }, { status: 500 });
  }
}
