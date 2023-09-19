import React from "react";
import Link from "next/link";
import { members } from "@/components/info/Objects";

const contacts = [
  {
    name: members[4].name,
    mobile: members[4].mobile,
    img: members[4].img,
  },
  {
    name: members[3].name,
    mobile: members[3].mobile,
    img: members[3].img,
  },
  {
    name: members[1].name,
    mobile: members[1].mobile,
    img: members[1].img,
  },
];

const page = () => {
  return (
    <main
      id="hero"
      className="min-h-screen p-4 py-8 md:p-24 2xl:px-44 text-left"
    >
      <section className="backdrop-blur-sm px-8 py-6 rounded-2xl mt-20 md:mt-16">
        <h1 className="text-2xl md:text-4xl 2xl:text-6xl mt-8 md:mt-12 text-orange-400 text-center">
          Quizzard - Quiz Contest
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
              Mode of conduction:
            </span>{" "}
            Offline
          </h3>
          <h3 className="my-2">
            <span className="text-orange-200 text-base md:text-2xl 2xl:text-4xl">
              Venue:
            </span>{" "}
            Seminar Hall, FIT campus
          </h3>

          <h2 className="my-4 md:my-8">
            <span className="text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
              Registration Fee:
            </span>{" "}
            ₹50/-
          </h2>
          <h3 className="my-2">
            <span className="text-orange-200 text-base md:text-2xl 2xl:text-4xl">
              Team Size:
            </span>{" "}
            2 - 4 Participants
          </h3>
        </div>
        <div className="md:px-44 text-sm md:text-xl 2xl:text-2xl">
          <h2 className="my-4 md:my-8 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Rules:
          </h2>

          <ul className="list-disc text-sm md:text-lg">
            <li className="my-2">
              Participants can register themselves in a team of TWO-FOUR members
              (A group should not exceed{" "}
              <span className="text-red-600">FOUR members</span>)
            </li>
            <li className="my-2">
              One person cannot register in multiple teams or else those teams
              will be <span className="text-red-600">disqualified</span>.
            </li>
            <li className="my-2">
              The quiz will be based on the following topics:
              <ul className="list-decimal list-inside text-blue-400">
                <li className="my-2">Coding problems</li>
                <li className="my-2">Basic electronics</li>
                <li className="my-2">Basic cybersecurity</li>
                <li className="my-2">Quantitative problems</li>
              </ul>
            </li>
            <li className="my-2">
              There may be{" "}
              <span className="text-red-600">negative markings</span> for wrong
              answers
            </li>
            <li className="my-2">
              All teams must coordinate with the event coordinators{" "}
              <span className="text-red-600">present on the spot</span>
            </li>
            <li className="my-2 ">
              Failing to comply with rules may result in{" "}
              <span className="text-red-600">consequences</span> such as
              disqualification from events, removal from the premises, or other
              appropriate actions as determined by event organizers and
              authorities.
            </li>
          </ul>
          <h2 className="my-4 md:my-8 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Restrictions:
          </h2>
          <ul>
            <li className="list-disc text-sm md:text-lg">
              Any explicit controversial content or any form of content that
              could be offensive to any community will lead to{" "}
              <span className="text-red-600">disqualification</span>.
            </li>
          </ul>

          <h2 className="my-10 md:my-14 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Contact Details:
          </h2>

          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center gap-x-6 my-4">
              <img className="h-12 rounded-full" src={contact.img} alt="" />
              <div>
                <h4 className="text-base md:font-semibold leading-7 tracking-tight">
                  {contact.name}
                </h4>
                <p className="text-sm md:font-semibold leading-6 text-orange-400">
                  {contact.mobile}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="text-center my-4 md:my-8">
        <Link
          className="mx-auto p-4 text-black bg-orange-400 border-2 border-orange-500 shadow-lg hover:text-white shadow-orange-500 rounded-xl"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeaJPfNQjm9ml4bp2Z3xSBLdgTyQU82Nf4Y1DW9kWDwFmbRZQ/viewform?usp=sf_link"
        >
          Register Now
        </Link>
      </div>
    </main>
  );
};

export default page;
