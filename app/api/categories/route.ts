import { NextRequest, NextResponse } from "next/server";

import prisma from "@/utils/connect";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    //Get All Categories
    const categories = await prisma.category.findMany({});

    return NextResponse.json(categories);
  } catch (error) {
    console.log("Error Getting Categories: ", error);
    return NextResponse.json(
      { error: "Error Getting Categories" },
      { status: 500 }
    );
  }
}
