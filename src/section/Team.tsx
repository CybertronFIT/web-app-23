/* eslint-disable @next/next/no-img-element */
import React from "react";

const people = [
  {
    name: "Ishani Bhowmick",
    role: "Co-Ordinator",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Rituraj Debnath",
    role: "Co-Ordinator",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Ankit Bose",
    role: "Co-Ordinator",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Sreejan Naru",
    role: "Co-Ordinator",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Avijit Sarkar",
    role: "Co-Ordinator",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Soumyadip Debnath",
    role: "Co-Ordinator",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const Team = () => {
  return (
    <section className="py-24 sm:py-32 xl:py-56 px-6" id="team">
      <h2 className="text-center text-4xl md:text-6xl 2xl:text-7xl text-cyan-500">
        Team
      </h2>
      <div className="mt-24 md:mt-44 mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h3 className="text-2xl md:text-3xl md:font-bold tracking-tight sm:text-4xl">
            Meet our Coordinators
          </h3>
          <p className="mt-6 text-sm md:text-lg leading-8">
            We are all tech enthusiasts, we&apos;re organizing a vibrant event
            featuring coding, gaming, hacking, and project presentations. Our
            shared passion drives us.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h4 className="text-base font-semibold leading-7 tracking-tight">
                    {person.name}
                  </h4>
                  <p className="text-sm font-semibold leading-6 text-cyan-500">
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
