"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const [id, setID] = useState("");
  const [secret, setSecret] = useState("");

  const login = async () => {
    const apiUrl = "/api/auth/login";

    try {
      if (secret !== "moyemoyecybertron") {
        alert("Invalid Credentials !");
        return;
      }
      const response = await axios(apiUrl, {
        method: "POST",
        data: {
          id: id,
          collection: "Members",
        },
      });

      if (response) {
        router.push("/admin-panel");
      } else {
        alert("Invalid Credentials !");
        return;
      }
    } catch (error) {
      const e = error as AxiosError;
      alert("Error: " + e);
    }
  };

  return (
    <section className="py-16 px-12 md:px-[23%] bg-gradient-to-b from-slate-700 to-black">
      <div className="p-6 md:px-4 bg-[#1b1b1b36] border border-gray-900 rounded-xl">
        <div className="flex flex-col items-center justify-center my-16">
          <form className="md:px-4 md:w-[60%]">
            <h2 className="text-center text-xl font-semibold my-4 mb-12">
              Enter Your Admin ID
            </h2>

            <div className="my-16">
              <input
                type="text"
                className="block py-2.5 px-4 w-full rounded-md text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                id="cybertron-id"
                placeholder="Admin ID"
                value={id}
                onChange={({ target }) => setID(target.value)}
                required={true}
              />
              <input
                type="password"
                className="block mt-8 py-2.5 px-4 w-full rounded-md text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                id="password"
                placeholder="Secret"
                value={secret}
                onChange={({ target }) => setSecret(target.value)}
                required={true}
              />
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

              <Link className="text-xs text-center mt-8" href={"https://wa.me/+918583007793"}>
                Don&apos;t Have ?{" "}
                <span className="underline text-cyan-500">Contact Sreejan</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
