import React from "react";
import { SignUp } from "@clerk/nextjs";

function page() {
  return (
    <main className="h-[100vh] flex items-center justify-center">
      <SignUp />
    </main>
  );
}

export default page;
