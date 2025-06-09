import React from "react";
import { auth } from "@clerk/nextjs/server";

import prisma from "@/utils/connect";
import UserStats from "@/components/UserStats";

async function Stats() {
  const { userId } = await auth();

  if (!userId) {
    return { error: "You Need to be Logged In to View this Page!" };
  }

  //Get User Data & Populate the CategoryStats Using CategoryId
  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: {
      categoryStats: {
        include: {
          category: true, //Populate the Category
        },
      },
    },
  });

  return (
    <div>
      <UserStats userStats={user} />
    </div>
  );
}

export default Stats;
