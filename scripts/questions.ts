const questions = require("../data/csQuestions.js");

let prismaQuestions: any;

const { PrismaClient: PrismaClientQuestions } = require("@prisma/client");

async function seedQuestions() {
  prismaQuestions = new PrismaClientQuestions();

  console.log("Seeding Questions...");

  for (const question of questions) {
    const createdQuestion = await prismaQuestions.question.create({
      data: {
        text: question.text,
        quizId: "68372c31478c10b54e96c80b",
        options: {
          create: question.options,
        },
        difficulty: question.difficulty,
      },
    });

    console.log(`Created Question: ${createdQuestion.text}`);
  }
  console.log("Seeding Questions Completed!");
}

seedQuestions()
  .catch((err) => {
    console.log("Error Seeding Questions: ", err);
  })
  .finally(async () => {
    await prismaQuestions.$disconnect();
  });
