import React from "react";
import Link from "next/link";
import Image from "next/image";
import { members } from "@/components/info/Objects";

const contacts = [
  {
    name: members[7].name,
    mobile: members[7].mobile,
    img: members[7].img,
  },
  {
    name: members[8].name,
    mobile: members[8].mobile,
    img: members[8].img,
  },
  {
    name: members[12].name,
    mobile: members[12].mobile,
    img: members[12].img,
  },
  {
    name: members[13].name,
    mobile: members[13].mobile,
    img: members[13].img,
  },
];

const style = {
  background: "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.65)), url(/backgrounds/events/flashPoint.webp)",
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
          FlashPoint (Valorant)
        </h1>
        <div className="my-16 md:my-24 md:px-44 text-sm md:text-xl 2xl:text-2xl">
          <h3 className="my-2">
            <span className="text-orange-200 text-base md:text-2xl 2xl:text-4xl">
              Event Date:
            </span>{" "}
            25th September
          </h3>
          <h3 className="my-2">
            <span className="text-orange-200 text-base md:text-2xl 2xl:text-4xl">
              Mode of conduction:
            </span>{" "}
            Online
          </h3>
          <h3 className="my-2">
            <span className="text-orange-200 text-base md:text-2xl 2xl:text-4xl">
              Last date of registration:
            </span>{" "}
            24th September within 11:00am
          </h3>

          <h3 className="my-2">
            <span className="text-orange-200 text-base md:text-2xl 2xl:text-4xl">
              Team Size:
            </span>{" "}
            5 Participants (MAX)
          </h3>
          <h2 className="my-4 md:my-8">
            <span className="text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
              Registration Fee:
            </span>{" "}
            ₹200/- per team
          </h2>
          <h2 className="my-4 md:my-8">
            <span className="text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
              Prize Money:
            </span>{" "}
            ₹1000/- 🔥
          </h2>
        </div>
        <div className="md:px-44 text-sm md:text-xl 2xl:text-2xl">
          <h2 className="my-4 md:my-8 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Rules:
          </h2>

          <ul className="list-disc text-sm md:text-lg  2xl:text-xl">
            <li className="my-2">
              The gaming portal will be open the{" "}
              <span className="text-red-600"> whole day</span>.
            </li>
            <li className="my-2">
              Participants can register themselves in a team of{" "}
              <span className="text-red-600">FIVE members.</span>. (Make a team
              on your own)
            </li>
            <li className="my-2">
              <span className="text-red-600">Only the team leader</span> must
              register his/her team via the given registration link.
            </li>
            <li className="my-2">
              Payment should be done{" "}
              <span className="text-red-600">before 24th September</span> via
              UPI.
            </li>
            <li className="my-2">
              The time slots will be allotted to the respective teams
              beforehand, the teams must be ready at least{" "}
              <span className="text-red-600">15 minutes beforehand.</span>
            </li>
            <li className="my-2 ">
              The matches will be decided based on the number of players
              (unrated/spike rush/swift play).
            </li>
            <li className="my-2 ">
              No hacks, no emulator players are allowed otherwise Team will be
              disqualified.
            </li>
          </ul>
          <h2 className="my-4 md:my-8 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Restrictions:
          </h2>
          <ul className=" 2xl:text-xl">
            <li className="list-disc text-sm md:text-lg">
              All teams must coordinate with the event coordinators present on
              the spot. Failing to comply with rules may result in{" "}
              <span className="text-red-600">consequences</span> such as
              disqualification from events, or other appropriate actions as
              determined by event organizers and authorities.
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
          href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSeDU-XAsHJ83LLLPjnrv96q1MwDp16eqCGyELbuYyDafSh5vw/viewform?usp=sf_link"
        >
          Register Now
        </Link>
      </div>
    </main>
  );
};

export default page;
