let prismaQuizzes: any;

const { PrismaClient: PrismaClientQuizzes } = require("@prisma/client");

const quizzes = [
  {
    title: "Inorganic Chemistry",
    description: "Test your knowledge of inorganic chemistry",
    categoryId: "683b5638d3244f7f3821fbb9",
  },
  {
    title: "Organic Chemistry",
    description: "Test your knowledge of organic chemistry",
    categoryId: "683b5638d3244f7f3821fbb9",
  },
  {
    title: "Biochemistry",
    description: "Test your knowledge of biochemistry",
    categoryId: "683b5638d3244f7f3821fbb9",
  },
  {
    title: "Cell Biology",
    description: "Test your knowledge of cell biology",
    categoryId: "683b5638d3244f7f3821fbb8",
  },
  {
    title: "Genetics",
    description: "Test your knowledge of genetics",
    categoryId: "683b5638d3244f7f3821fbb8",
  },
  {
    title: "Anatomy and Physiology",
    description: "Test your knowledge of human anatomy and physiology",
    categoryId: "683b5638d3244f7f3821fbb8",
  },
  {
    title: "Microbiology",
    description: "Test your knowledge of microbiology",
    categoryId: "683b5638d3244f7f3821fbb8",
  },
  {
    title: "Classical Mechanics",
    description: "Test your knowledge of classical mechanics",
    categoryId: "683b5638d3244f7f3821fbb7",
  },
  {
    title: "Thermodynamics",
    description: "Test your knowledge of Thermodynamics",
    categoryId: "683b5638d3244f7f3821fbb7",
  },
  {
    title: "Electricity and Magnetism",
    description: "Test your knowledge of Electricity and Magnetism",
    categoryId: "683b5638d3244f7f3821fbb7",
  },
  {
    title: "Astronomy",
    description: "Test your knowledge of Astronomy",
    categoryId: "683b5638d3244f7f3821fbba",
  },
  {
    title: "Geology",
    description: "Test your knowledge of Geology",
    categoryId: "683b5638d3244f7f3821fbba",
  },
  {
    title: "Meteorology",
    description: "Test your knowledge of Meteorology",
    categoryId: "683b5638d3244f7f3821fbba",
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
