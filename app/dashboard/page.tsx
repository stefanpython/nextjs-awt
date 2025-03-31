"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signOut } from "next-auth/react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">Dashboard</h1>

        <div className="mb-6 rounded-lg bg-green-50 p-4 text-center">
          <p className="text-green-800">
            Welcome, {session?.user?.name || session?.user?.email}! You are
            successfully logged in.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-md bg-gray-50 p-4">
            <h2 className="mb-2 text-lg font-medium">Your Profile</h2>
            <p>
              <strong>Email:</strong> {session?.user?.email}
            </p>
            <p>
              <strong>Name:</strong> {session?.user?.name || "Not provided"}
            </p>
            <p>
              <strong>User ID:</strong> {session?.user?.id}
            </p>
          </div>

          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
