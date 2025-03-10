'use client';
import Image from "next/image";
import { useState } from "react";
import { ChevronRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function Page() {
  return (

    <div className="min-h-screen bg-[#FFF8E6] flex flex-col items-center  ">
      {/* Main Content with exact measurements applied */}
      <header className="w-screen fixed top-0 left-0 bg-[#1C6999] py-2 px-6 flex items-center justify-between  ">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logoII.svg"
            alt="ONYVA Logo"
            width={70} // Adjusted smaller size
            height={35}
            className="object-contain"
          />
        </div>

        {/* Right: Language & Login */}
        <div className="flex items-center gap-3 ">
          <button className="bg-white border border-black px-3 py-1 rounded-full text-black text-sm">
            English ▼
          </button>
          <Link href="/login2">
            <button className="bg-white border border-black px-3 py-1 rounded-full text-black text-sm">
              Login
            </button>
          </Link>
        </div>
      </header>
      <div className="flex justify-center items-center w-full mt-10 px-0">
        {/* Map Image - Applying the same width and spacing */}
        <div className="w-1/2 flex flex-col items-center justify-center mr-20 mt-20">
          <Image
            src="./images/Algeria.svg"
            alt="Decorative Circle"
            width={300}
            height={700}
          />
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#FF0D0D] mt-6 text-center drop-shadow-lg tracking-wide ml-10">
            Register Now  <span className="text-[#000000]">& Step out of your <span className="text-[#134666]">bubble!</span></span>
          </h1>

        </div>


        {/* Login Form - Using the same spacing and layout */}
        <div className="w-1/3 p-6 border border-black rounded-xl bg-white shadow-lg mt-20">
  <h2 className="text-xl font-bold mb-4">Login</h2>

  <div className="mb-4">
    <label className="block font-semibold">Email</label>
    <input
      type="email"
      id="email"
      placeholder="type ..."
      className="w-full bg-blue-200 p-2 rounded-md border border-black mt-1"
    />
  </div>

  <div className="mb-4">
    <label className="block font-semibold">Password</label>
    <input
      type="password"
      id="password"
      placeholder="type ..."
      className="w-full bg-blue-200 p-2 rounded-md border border-black mt-1"
    />
  </div>

  <p id="errorMessage" className="text-red-600 text-sm mb-2 hidden">
    Please enter both email and password.
  </p>

  <button
    onClick={(e) => {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const errorMessage = document.getElementById("errorMessage");

      if (!email || !password) {
        e.preventDefault(); // Prevent navigation
        errorMessage.classList.remove("hidden"); // Show error message
      } else {
        errorMessage.classList.add("hidden"); // Hide error if valid
        window.location.href = "/"; // Redirect if both fields are filled
      }
    }}
    className="w-100px bg-blue-800 text-white py-2 rounded-full text-lg font-semibold p-5 ml-20"
  >
    Login
  </button>

  <div className="flex items-center mt-4">
    <input type="checkbox" id="remember" className="mr-2" />
    <label htmlFor="remember">Remember me</label>
  </div>

  <p className="mt-4 text-sm">
    Dont have an account?
    <Link href="/login1">
      <button className="text-blue-600 font-bold"> Sign up</button>
    </Link>
  </p>
</div>

      </div>
    </div>
  );
}
