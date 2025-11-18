"use client";

import Link from "next/link";
import { useUserAuth } from "../../contexts/Authcontext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-bold text-center">
        Week 9 - Shopping List with GitHub Login
      </h1>

      {!user && (
        <>
          <p>Please log in with GitHub to get access to the shopping list.</p>
          <button onClick={handleLogin} className="px-4 py-2 border rounded-md">
            Login with GitHub
          </button>
        </>
      )}

      {user && (
        <div className="flex flex-col items-center gap-3">
          <p>
            Welcome, <strong>{user.displayName}</strong> ({user.email})
          </p>
          <div className="flex gap-3">
            <Link
              href="/week-9/shopping-list"
              className="px-4 py-2 border rounded-md"
            >
              Go to Shopping List
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 border rounded-md"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
