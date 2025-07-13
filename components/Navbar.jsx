"use client";

import { SignOutButton, UserButton, useClerk, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16 flex items-center px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <h1 className="text-3xl font-extrabold text-green-600 hover:text-green-700 transition cursor-pointer select-none">
            Logo
          </h1>
        </Link>

        {/* Nav actions */}
        <div className="flex items-center gap-4">
          {isSignedIn ? (
            <>
              <SignOutButton>
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition select-none"
                >
                  Déconnexion
                </button>
              </SignOutButton>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-10 h-10 rounded-full",
                  },
                }}
              />
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <button className="px-4 py-2 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 transition select-none">
                  Se connecter
                </button>
              </Link>
              <Link href="/sign-up">
                <button className="px-4 py-2 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700 transition select-none">
                  S&apos;inscrire
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
