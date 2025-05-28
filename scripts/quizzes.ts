let prismaQuizzes: any;

const { PrismaClient: PrismaClientQuizzes } = require("@prisma/client");

const quizzes = [
  {
    title: "Computer Science Basics",
    description: "A quiz about fundamental computer science concepts.",
    categoryId: "68372bd88b2637b8e3a50941",
  },
  {
    title: "Programming Fundamentals",
    description: "Test your knowledge of basic programming concepts.",
    categoryId: "68372bd78b2637b8e3a50940",
  },
  {
    title: "Physics",
    description: "Test your knowledge of physics",
    categoryId: "68372bd88b2637b8e3a50946",
  },
  {
    title: "Biology",
    description: "Test your knowledge of biology",
    categoryId: "68372bd88b2637b8e3a50947",
  },
];

async function seedQuizzes() {
  prismaQuizzes = new PrismaClientQuizzes();

  console.log("Seeding Quizzes...");

  for (const quiz of quizzes) {
    const createdQuiz = await prismaQuizzes.quiz.create({ data: quiz });

    console.log("Created Quiz: ", `${createdQuiz.title}`);
  }

  console.log("Seeding Quizzes Completed!");
}

seedQuizzes()
  .catch((err) => {
    console.log("Error Seeding Quizzes: ", err);
  })
  .finally(async () => {
    await prismaQuizzes.$disconnect();
  });
