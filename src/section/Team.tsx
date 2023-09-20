
import React from "react";
import Image from "next/image";
import { faculties, members } from "@/components/info/Objects";

const team = [
  {
    name: members[6].name,
    role: "Coordinator",
    image: members[6].img,
  },
  {
    name: members[3].name,
    role: "Coordinator",
    image: members[3].img,
  },
  {
    name: members[9].name,
    role: "Design Head",
    image: members[9].img,
  },
  {
    name: members[11].name,
    role: "Design Head",
    image: members[11].img,
  },
  {
    name: members[0].name,
    role: "Design Head",
    image: members[0].img,
  },
  {
    name: members[8].name,
    role: "Design Head",
    image: members[8].img,
  },
  {
    name: members[4].name,
    role: "Design Head",
    image: members[4].img,
  },
  {
    name: members[13].name,
    role: "Design Head",
    image: members[13].img,
  },
];

const Team = () => {
  return (
    <section className="py-24 sm:py-32 xl:py-56 px-6 md:px-32" id="team">
      <h2 className="text-center text-4xl md:text-6xl 2xl:text-7xl text-orange-100 sub-head">
        Team
      </h2>
      <div className="mt-24 md:mt-44 mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl text-center md:text-left">
          <h3 className="text-2xl md:text-3xl md:font-semibold 2xl:font-bold tracking-tight sm:text-4xl">
            Faculty Members
          </h3>
          <p className="mt-6 text-sm md:text-lg leading-8">
            Our teachers, pillars of knowledge and guidance, have been
            instrumental in shaping this tech extravaganza. Their contribution
            is invaluable.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {faculties.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  className="h-16 w-16 rounded-full"
                  src={person.img}
                  alt={person.name}
                  height={100}
                  width={100}
                />
                <div>
                  <h4 className="text-base md:font-semibold leading-7 tracking-tight">
                    {person.name}
                  </h4>
                  <p className="text-sm md:font-semibold leading-6 text-orange-400">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 md:mt-24 -mb-8 mx-auto bg-white h-1 w-2/3 2xl:w-1/2 rounded-full shadow-[0px_0px_10px_4px_#FFA500]"></div>

      <div className="mt-24 md:mt-44 mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl text-center md:text-left">
          <h3 className="text-2xl md:text-3xl md:font-semibold 2xl:font-bold tracking-tight sm:text-4xl">
            Student Organizers
          </h3>
          <p className="mt-6 text-sm md:text-lg leading-8">
            We all are tech enthusiasts, we&apos;re organizing a vibrant event
            featuring coding, gaming, hacking, and project presentations. Our
            shared passion drives us.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {team.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  className="h-16 w-16 rounded-full"
                  src={person.image}
                  alt={person.name}
                  height={100}
                  width={100}
                />
                <div>
                  <h4 className="text-base md:font-semibold leading-7 tracking-tight">
                    {person.name}
                  </h4>
                  <p className="text-sm md:font-semibold leading-6 text-orange-400">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
