"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { ICategory } from "@/types/types";

interface Props {
  category: ICategory;
}

function HomeCard({ category }: Props) {
  const router = useRouter();

  return (
    <div
      className="cursor-pointer border-2 rounded-xl p-1 shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform duration-300 ease-in-out"
      onClick={() => router.push(`/categories/${category.id}`)}
    >
      <div className="flex items-center justify-center w-full h-auto px-4">
        <Image
          src={
            category.image
              ? category.image
              : `/categories/image--${category.name
                  .toLowerCase()
                  .split(" ")
                  .join("-")}.png`
          }
          width={220}
          height={150}
          alt={category.name}
          className="object-contain"
        />
      </div>
      <div className="py-2 px-6 flex flex-col gap-4">
        <div>
          <h2 className="text-xl font-bold">{category.name}</h2>
          <p className="text-gray-600 text-sm leading-none font-semibold">
            {category.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
