"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Nav() {
  const IsUserLoggedIn = true;
  const [toggleDropdown, setToggleDropdown] = useState(true);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex hgap-2 flex-center">
        <Image
          src="src\assets\images\logo.svg"
          width={30}
          height={30}
          alt="Logo"
          className="object-contain"
        ></Image>
        <p className="logo-text">Estagio</p>
      </Link>

      <div className="sm:flex hidden">
        {IsUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              {" "}
              Create Post
            </Link>

            <button type="button" className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src="assets\images\logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="Profile"
              ></Image>
            </Link>
          </div>
        ) : (
          <>
            <button type="button" className="outline_btn">
              Sign In
            </button>
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {IsUserLoggedIn ? (
          <div className="flex">
            <Image
              src="assets\images\logo.svg"
              width={37}
              height={37}
              className="rounded-full"
              alt="Profile"
              onClick={() => {
                setToggleDropdown((prev) => !prev);
              }}
            ></Image>

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button type="button" className="outline_btn">
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
}
