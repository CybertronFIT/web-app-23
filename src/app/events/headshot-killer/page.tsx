import React from "react";
import Link from "next/link";
import Image from "next/image";
import { members } from "@/components/info/Objects";

const contacts = [
  {
    name: members[0].name,
    mobile: members[0].mobile,
    img: members[0].img,
  },
  {
    name: members[9].name,
    mobile: members[9].mobile,
    img: members[9].img,
  },
  {
    name: members[10].name,
    mobile: members[10].mobile,
    img: members[10].img,
  },
];

const style = {
  background: "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.65)), url(/backgrounds/events/headshot-killer.webp)",
  backgroundPosition: "center",
  backgroundSize: "cover"
}

const page = () => {
  return (
    <main
      style={style}
      className="min-h-screen p-4 py-8 md:p-24 2xl:px-56 text-left"
    >
      <section className="backdrop-blur-md px-8 py-6 rounded-2xl mt-20 md:mt-16">
        <h1 className="text-2xl md:text-4xl 2xl:text-6xl mt-8 md:mt-12 text-orange-400 text-center">
          Headshot Killer (Free Fire)
        </h1>
        <div className="my-16 md:my-24 md:px-44 text-sm md:text-xl 2xl:text-2xl">
          <h3 className="my-2">
            <span className="text-orange-200 text-base md:text-2xl 2xl:text-4xl">
              Event Date:
            </span>{" "}
            26th September
          </h3>
          <h3 className="my-2">
            <span className="text-orange-200 text-base md:text-2xl 2xl:text-4xl">
              Mode of Conduction:
            </span>{" "}
            Offline
          </h3>
          <h3 className="my-2">
            <span className="text-orange-200 text-base md:text-2xl 2xl:text-4xl">
              Game Mode:
            </span>{" "}
            Multiplayer
          </h3>
          <h3 className="my-2">
            <span className="text-orange-200 text-base md:text-2xl 2xl:text-4xl">
              Team Size:
            </span>{" "}
            4 Players (MAX)
          </h3>
          <h2 className="my-4 md:my-8">
            <span className="text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
              Registration Fee:
            </span>{" "}
            ₹100/- per team
          </h2>
          <h2 className="my-4 md:my-8">
            <span className="text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
              Winner Prize:
            </span>{" "}
            ₹150/- per match ( instant 🔥 )
          </h2>
        </div>
        <div className="md:px-44 text-sm md:text-xl 2xl:text-2xl">
          <h2 className="my-4 md:my-8 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Rules:
          </h2>
          <ul className="2xl:text-xl">
            <li className="list-disc text-sm md:text-lg my-2">
              Any of the team members have to make a custom room for the match.
            </li>
            <li className="list-disc text-sm md:text-lg my-2">
              No limited ammo (Unlimited gloo walls, No grenades, and flash).
            </li>
            <li className="list-disc text-sm md:text-lg my-2">
              A custom Room will be Created for team vs. team match.
            </li>
            <li className="list-disc text-sm md:text-lg my-2">
              3 modes will be available (2vs2, 4vs4, 6vs6) depending upon the
              selection of Teams.
            </li>
            <li className="list-disc text-sm md:text-lg my-2">
              Gun skins and Character ability will be turned off.
            </li>
            <li className="list-disc text-sm md:text-lg my-2">
              NO HACKS, PANELS. Otherwise the team <span className="text-red-600">will be disqualified.</span>
            </li>
            <li className="list-disc text-sm md:text-lg my-2">
              No PC players (If we get 2 or 3 teams with pc players then
              different matches will be conducted).
            </li>
            <li className="list-disc text-sm md:text-lg my-2">
              Players has to use their own internet connection
            </li>
          </ul>

          <h2 className="my-10 md:my-14 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Contact Details:
          </h2>

          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center gap-x-6 my-4">
              <Image className="h-12 w-12 rounded-full" height={100} width={100} src={contact.img} alt={contact.name} />
              <div>
                <h4 className="text-base 2xl:text-xl md:font-semibold leading-7 tracking-tight">
                  {contact.name}
                </h4>
                <p className="text-sm 2xl:text-lg md:font-semibold leading-6 text-orange-400">
                  {contact.mobile}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="text-center my-8 md:my-12">
        <Link
          className="mx-auto p-4 text-black bg-orange-400 border-2 border-orange-500 shadow-lg hover:text-white shadow-orange-500 rounded-xl"
          href="https://docs.google.com/forms/d/e/1FAIpQLSe9EdTOriQvlr54DxtBXWY2HtKNwewPFFVGhUqqJOuhSZ50Pw/viewform"
        >
          Register Now
        </Link>
      </div>
    </main>
  );
};

export default page;
