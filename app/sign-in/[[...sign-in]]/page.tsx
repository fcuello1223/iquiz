import { SignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="h-[100vh] flex items-center justify-center">
      <SignIn />
    </main>
  );
}
