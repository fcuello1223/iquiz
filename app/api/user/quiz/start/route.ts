import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  const { userId: clerkId } = await auth();
  const { categoryId } = await req.json();

  if (!clerkId) {
    return NextResponse.json(
      { error: "User Not Authorized!" },
      { status: 401 }
    );
  }

  try {
    const user = await prisma.user.findUnique({
      where: { clerkId: clerkId },
    });

    if (!user) {
      return NextResponse.json({ error: "User Not Found!" }, { status: 404 });
    }

    const userId = user.id;

    //Find or create a CategoryStat Entry
    let stat = await prisma.categoryStat.findUnique({
      where: {
        userId_categoryId: {
          userId: userId,
          categoryId: categoryId,
        },
      },
    });

    if (!stat) {
      stat = await prisma.categoryStat.create({
        data: {
          userId: userId,
          categoryId: categoryId,
          attempts: 1,
          lastAttempt: new Date(),
        },
      });
    } else {
      await prisma.categoryStat.update({
        where: {
          userId_categoryId: {
            userId: userId,
            categoryId: categoryId,
          },
        },
        data: {
          attempts: stat.attempts + 1,
          lastAttempt: new Date(),
        },
      });
    }

    return NextResponse.json(stat);
  } catch (error) {
    console.log("Error Starting Quiz: ", error);
    return NextResponse.json(
      { error: "Error Starting Quiz!" },
      { status: 500 }
    );
  }
}
