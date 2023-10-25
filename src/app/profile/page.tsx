"use client";

import axios, { AxiosError } from "axios";
import { UserCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { logOut } from "@/components/database/DeleteCookie";
import React, { useState, useEffect } from "react";

function JSONToTable({ data }: { data: { [key: string]: any } }) {
  const excludedKeys = ["iat", "exp"];
  const columns = Object.keys(data).filter(
    (key) => !excludedKeys.includes(key)
  );

  return (
    <table className="table-fixed">
      <tbody>
        {columns.map((column, index) => (
          <tr key={index} className="">
            <th className="md:px-4 p-2 text-sm md:text-base border-r border-cyan-500">
              {column.toUpperCase()}
            </th>
            <td className="md:px-4 p-2 text-xs md:text-sm text-center w-40 md:w-56">
              {data[column]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const Page = () => {
  const router = useRouter();
  const [isAdmin, setisAdmin] = useState(false);
  const [id, setID] = useState("");
  const [json, setJSON] = useState({});

  async function logOutUser() {
    await logOut();
    router.push("/auth/login");
  }

  useEffect(() => {
    const checkRegistration = async () => {
      try {
        const result = await axios("/api/auth/verify");
        if (result.status === 200) {
          const payload = result.data.payload;
          setJSON(payload);
          setID(payload.id);
          if (!payload.id.startsWith("PRC#")) {
            setisAdmin(true);
          }
        } else {
          router.push("/auth/login");
        }
      } catch (error) {
        const e = error as AxiosError;
        console.error("Recieved Error: ", e);
        router.push("/auth/login");
      }
    };

    checkRegistration();
  }, [router]);

  return (
    <main className="min-h-screen flex flex-col items-center text-center bg-gradient-to-b from-slate-800 to-black">
      {id ? (
        <>
          <div className="mt-32">
            <UserCircle2
              size={150}
              strokeWidth={0.5}
              className={` ${isAdmin ? "text-indigo-600" : "text-cyan-500"}`}
            />
            <p
              className={`p-1 my-2 text-xs rounded-md text-white ${
                isAdmin ? "bg-indigo-600" : "bg-cyan-500"
              }`}
            >
              {isAdmin ? "Admin" : "Participant"}
            </p>
          </div>
          <div className="p-2 md:p-4 text-black bg-white rounded-lg my-14 text-md text-center border-b-4 border-cyan-600">
            <JSONToTable data={json} />
          </div>
          <div className="flex flex-row mb-12 px-6 md:px-0">
            <button id="btn" onClick={logOutUser} className="md:mr-16 mr-8">
              Log Out
            </button>

            {isAdmin ? (
              <a id="btn" className="md:ml-16 ml-8" href="/admin-panel">
                Control Panel
              </a>
            ) : (
              <a id="btn" className="md:ml-16 ml-8" href="/#events">
                Events
              </a>
            )}
          </div>
        </>
      ) : (
        <p className="text-xl md:text-2xl my-auto">Loading Profile ...</p>
      )}
    </main>
  );
};

export default Page;
