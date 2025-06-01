let prismaCategories: any;

const { PrismaClient: PrismaClientCategories } = require("@prisma/client");

async function addCategories() {
  prismaCategories = new PrismaClientCategories();

  const categories = [
    {
      name: "Physics",
      description: "Unravel the laws governing the universe.",
    },
    { name: "Biology", description: "Study the science of all living organisms." },
    {
      name: "Chemistry",
      description: "Study the science of all matter on Earth",
    },
    {
      name: "Earth and Space Science",
      description: "Study the science of Earth itself and outer space",
    },
  ];

  console.log("Adding Categories...");

  for (const category of categories) {
    await prismaCategories.category.create({
      data: category,
    });
  }

  console.log("Categories Added Successfully!");
}

addCategories()
  .catch((err) => {
    console.log("Error Adding Categories: ", err);
  })
  .finally(async () => {
    await prismaCategories.$disconnect();
  });
