import React from "react";
import Link from "next/link";
import { userAuthDispatch, userAuthState } from "../context/auth";
import axios from "axios";
import Image from "next/image";

const NavBar: React.FC = () => {
  const { loading, authenticated } = userAuthState();
  const dispatch = userAuthDispatch();

  const handleLogout = () => {
    axios
      .post("/auth/logout")
      .then(() => {
        // context에 들어있는 User 정보 업데이트
        dispatch("LOGOUT");
        // page refresh
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-between h-13 px-5 bg-white">
      <div className="text-2xl font-semibold text-gray-400">
        <Link legacyBehavior href="/">
          <a className="cursor-pointer">
            <Image src="/reddit-logo.png" alt="logo" width={45} height={45} />
          </a>
        </Link>
      </div>

      <div className="max-w-full px-4">
        <div className="relative flex items-center bg-gray-100 border rounded hover:border-gray-700 hover:bg-white">
          <i className="pl-4 pr-3 text-gray-400 fas fa-search"></i>
          <input
            type="text"
            placeholder="Search Reddit"
            className="px-3 py-1 bg-transparent h-7 rounded focus:outline-none"
          />
        </div>
      </div>

      <div className="flex">
        {!loading &&
          (authenticated ? (
            <button
              className="w-20 h-7 text-sm px-2 mr-2 text-center text-white bg-gray-400 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link legacyBehavior href="/login">
                <a className=" w-20 px-2 text-sm pt-1 mr-2 h-7 text-center text-blue-500">
                  log in
                </a>
              </Link>
              <Link legacyBehavior href="/register">
                <a className="w-20 px-2 text-sm pt-1 text-center h-7 text-white bg-gray-400 rounded">
                  sign up
                </a>
              </Link>
            </>
          ))}
      </div>
    </div>
  );
};

export default NavBar;
