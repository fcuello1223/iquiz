"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";

import Loader from "./Loader";
import Image from "next/image";
import { formatTime } from "@/utils/formatTime";
import { checkAbc, crosshairs } from "@/utils/icons";
import CategoryBarChart from "./CategoryBarChart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { ICategoryStats } from "@/types/types";

function UserStats({ userStats }: any) {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <Loader />;
  }

  //Get the Most Recent Attempt Date
  const recentAttemptDate = userStats.categoryStats.reduce(
    (acc: any, curr: any) => {
      const currentDate = new Date(curr.lastAttempt);

      return currentDate > acc ? currentDate : acc;
    },
    new Date(0)
  );

  const totalAttempts = userStats.categoryStats.reduce(
    (acc: number, curr: any) => acc + curr.attempts,
    0
  );

  const totalCompleted = userStats.categoryStats.reduce(
    (acc: number, curr: any) => acc + curr.completed,
    0
  );

  //Show the 2 most Recent Attempts
  const latestStats = userStats?.categoryStats
    .slice(0, 2)
    .sort((a: any, b: any) => {
      return (
        new Date(b.lastAttempt).getTime() - new Date(a.lastAttempt).getTime()
      );
    });

  return (
    <div className="flex flex-col gap-4">
      <div className="h-[15rem] px-8 flex items-center justify-center border-2 rounded-xl shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)]">
        <Image
          src={user?.imageUrl || "/user.png"}
          alt="Profile Image"
          height={200}
          width={200}
          className="rounded-full border-2 shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)]"
        />
      </div>
      <div className="mt-4">
        <h1 className="font-bold text-2xl">Overview</h1>
        <p className="text-muted-foreground">
          A Summary of Your Recent Activity Performance
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 font-semibold">
        <div className="px-4 py-6 flex flex-col gap-1 border-2 rounded-lg shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)]">
          <h2 className="font-bold text-xl">{user?.lastName}</h2>
          <p className="text-gray-400 font-semibold">Recent Attempt</p>
          <p className="text-sm text-gray-400 font-semibold">
            {formatTime(recentAttemptDate)}
          </p>
        </div>
        <div className="px-4 py-6 flex flex-col gap-1 border-2 rounded-lg shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)]">
          <div className="text-2xl text-blue-400">{crosshairs}</div>
          <div>
            <p className="font-bold">Total Attempts</p>
            <p className="mt-2 font-bold text-3xl">{totalAttempts}</p>
          </div>
        </div>
        <div className="px-4 py-6 flex flex-col gap-1 border-2 rounded-lg shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)]">
          <div className="text-2xl text-blue-400">{checkAbc}</div>
          <div>
            <p className="font-bold">Total Completed</p>
            <p className="mt-2 font-bold text-3xl">{totalCompleted}</p>
          </div>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-6">
        {latestStats?.map((category: any) => (
          <CategoryBarChart key={category.id} categoryData={category} />
        ))}
      </div>
      <div className="mt-4">
        <h1 className="font-bold text-2xl">Detailed Category Stats</h1>
        <p className="text-muted-foreground">
          Breakdown of Performance by Category
        </p>
      </div>
      <div className="border-2 rounded-lg shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)]">
        <Table>
          <TableHeader className="text-base font-semibold">
            <TableRow>
              <TableHead className="py-4">Category</TableHead>
              <TableHead>Attempts</TableHead>
              <TableHead>Completed</TableHead>
              <TableHead>Average Score</TableHead>
              <TableHead>Last Attempt</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userStats?.categoryStats.map((category: ICategoryStats) => {
              return (
                <TableRow key={category.id}>
                  <TableCell className="font-semibold py-4">
                    {category.category.name}
                  </TableCell>
                  <TableCell>{category.attempts}</TableCell>
                  <TableCell>{category.completed}</TableCell>
                  <TableCell>
                    {category.averageScore !== null
                      ? category.averageScore.toFixed(2)
                      : "N/A"}
                  </TableCell>
                  <TableCell>{formatTime(category.lastAttempt)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default UserStats;
