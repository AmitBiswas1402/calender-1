import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function ClerkLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { userId } = await auth();
  if (userId != null) redirect("/");

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div>{children}</div>
    </div>
  );
}
