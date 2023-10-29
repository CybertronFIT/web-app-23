import { User, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = async () => {
  return (
    <section className="min-h-screen flex flex-col items-center">
      <h2 className="text-center text-xl md:text-2xl mt-16 w-full">
        Control Panel for Admins
      </h2>
      <div className="flex flex-col md:flex-row gap-6 my-auto">
        <Link
          className="flex items-centerw-[64vw] md:w-[30vw] h-[26vh] md:h-[30vh] md:mr-6 bg-[#3a3a3a4d] border-b-2 border-cyan-700 rounded-lg"
          href={"/admin-panel/participants"}
        >
          <div className="flex items-center gap-2 text-cyan-500 mx-auto">
            Participants
            <User />
          </div>
        </Link>

        <Link
          className="flex items-center w-[64vw] md:w-[30vw] h-[26vh] md:h-[30vh] md:mr-6 bg-[#3a3a3a4d] border-b-2 border-cyan-700  rounded-lg"
          href={"/admin-panel/teams"}
        >
          <div className="flex items-center gap-2 text-cyan-500 mx-auto">
            Teams
            <Users />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Page;
