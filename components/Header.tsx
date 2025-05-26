"use client";
import React from "react";
import { chart, home, login } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { Button } from "./ui/button";

function Header() {
  const pathName = usePathname();

  const router = useRouter();

  const menu = [
    {
      name: "Home",
      icon: home,
      link: "/",
    },
    {
      name: "My Stats",
      icon: chart,
      link: "/stats",
    },
  ];
  return (
    <header className="min-h-[8vh] px-[10rem] xl:px-[15rem] border-b-2 flex items-center">
      <nav className="flex-1 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo3.png" alt="logo" height={60} width={60} />
          <h1 className="text-3xl font-bold text-indigo-400">IQuiz</h1>
        </Link>
        <ul className="flex items-center gap-8">
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className={`py-1 px-6 flex items-center gap-2 text-lg leading-none text-gray-400 rounded-lg ${
                  pathName === item.link
                    ? "bg-blue-500/20 text-indigo-400 border-2 border-indigo-400"
                    : ""
                }`}
              >
                <span className="text-2xl text-indigo-400">{item.icon}</span>
                <span
                  className={`font-bold uppercase ${
                    pathName === item.link ? "text-indigo-400" : "text-gray-400"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-12 h-12 border-2 border-gray-300 rounded-full",
                },
              }}
            />
          </SignedIn>
          <SignedOut>
            <Button
              onClick={() => router.push("/sign-in")}
              className="py-5 bg-indigo-400 flex items-center gap-2 font-semibold rounded-lg text-lg hover:bg-indigo-500/90 cursor-pointer"
            >
              {login} Log In / Sign Up
            </Button>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}

export default Header;
