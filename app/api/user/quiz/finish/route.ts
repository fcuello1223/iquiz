import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId: clerkId } = await auth();

    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized!" }, { status: 401 });
    }

    const { categoryId, quizId, score, responses } = await req.json();

    //Validate the Fields
    if (!categoryId || !quizId || !score || !Array.isArray(responses)) {
      return NextResponse.json({ error: "Invalid Request" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { clerkId: clerkId }
    });

    if (!user) {
      return NextResponse.json({ error: 'User Not Found!' }, { status: 404 });
    }

    //Fetch or Create a CategoryStat Entry
    let stat = await prisma.categoryStat.findUnique({
      where: {
        userId_categoryId: {
          userId: user.id,
          categoryId: categoryId
        }
      }
    });

    //If the Stat Does not Exist, Create a New one
    if (stat) {
      //Calculate the Average Score
      const totalScore = (stat.averageScore || 0) * stat.completed + score;
      const newAverageScore = totalScore / (stat.completed + 1);

      //Update the CategoryStat Entry
      stat = await prisma.categoryStat.update({
        where: { id: stat.id },
        data: {
          completed: stat.completed + 1,
          averageScore: newAverageScore,
          lastAttempt: new Date()
        }
      })
    } else {
      //Create a New CategoryStat Entry
      stat = await prisma.categoryStat.create({
        data: {
          userId: user.id,
          categoryId: categoryId,
          attempts: 1,
          completed: 1,
          averageScore: score,
          lastAttempt: new Date()
        }
      })
    }

    return NextResponse.json(stat);
  } catch (error) {
    console.log("Error Finishing Quiz: ", error);
    return NextResponse.json(
      { error: "Error Finishing Quiz" },
      { status: 500 }
    );
  }
}
