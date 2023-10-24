"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const [id, setID] = useState("");

  const login = async () => {
    const apiUrl = "/api/auth/login";

    if (id === "" || !id.startsWith("PRC#")) {
      alert("Invalid ID");
      return;
    }

    try {
      const response = await axios(apiUrl, {
        method: "POST",
        data: {
          id: id,
          collection: "Participants",
        },
      });

      if (response) {
        router.push("/profile");
      } else {
        alert("Invalid Credentials !");
      }
    } catch (error) {
      const e = error as AxiosError;
      alert("Error: " + e);
    }
  };

  return (
    <section className="py-16 px-12 md:px-[23%] bg-gradient-to-b from-slate-700 to-black">
      <div className="p-6 md:px-4 bg-[#1b1b1b36] border border-gray-900 rounded-xl">
        <div className="flex flex-col items-center justify-center mt-16 mb-20">
          <form className="md:px-4 md:w-[60%]">
            <h2 className="text-center text-xl font-semibold my-4 mb-12">
              Enter Participant ID
            </h2>

            <div className="mt-24 mb-16">
              <div className="relative">
                <input
                  type="text"
                  className="block peer rounded-md my-4 py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                  id="cybertron-id"
                  placeholder="  "
                  value={id}
                  onChange={({ target }) => setID(target.value)}
                  required={true}
                />
                <label
                  className="text-white absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  htmlFor="cybertron-id"
                >
                  Participant ID
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <button
                id="btn"
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={login}
              >
                Login
              </button>

              <Link className="text-xs text-center mt-8" href={"/auth/signup"}>
                Not Registered ?{" "}
                <span className="underline text-cyan-500">Register Now</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
