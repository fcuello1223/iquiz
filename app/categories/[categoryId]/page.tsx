import React from "react";
import { auth } from "@clerk/nextjs/server";

import prisma from "@/utils/connect";
import { IQuiz } from "@/types/types";
import QuizCard from "@/components/quiz/QuizCard";

async function page({ params }: any) {
  const { categoryId } = await params;

  const { userId } = await auth();

  if (!categoryId) {
    return null;
  }

  const quizzes = await prisma.quiz.findMany({
    where: { categoryId: categoryId },
    include: {
      questions: {
        select: {
          id: true,
          text: true,
          difficulty: true,
          options: {
            select: {
              id: true,
              text: true,
              isCorrect: true,
            },
          },
        },
      },
    },
    orderBy: {
      id: "asc",
    },
  });

  return (
    <div>
      <h1 className="mb-6 text-4xl font-bold">All Quizzes</h1>
      {quizzes.length > 0 ? (
        <div className="mb-8 grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6">
          {quizzes.map((quiz) => {
            return (
              <QuizCard key={quiz.id} quiz={quiz} />
            )
          })}
        </div>
      ) : (
        <h1 className="text-2xl text-center mt-4">No Quizzes Found For This Category</h1>
      )}
    </div>
  );
}

export default page;
