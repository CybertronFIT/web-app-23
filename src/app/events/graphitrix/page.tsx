import React from "react";
import Link from "next/link";
import Image from "next/image";
import { members } from "@/components/info/Objects";

const contacts = [
  {
    name: members[6].name,
    mobile: members[6].mobile,
    img: members[6].img,
  },
];

const style = {
  background:
    "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.65)), url(/backgrounds/events/graphitrix.webp)",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const page = () => {
  return (
    <main
      style={style}
      className="min-h-screen p-4 py-8 md:p-24 2xl:px-56 text-left"
    >
      <section className="backdrop-blur-md px-8 py-6 rounded-2xl mt-20 md:mt-16">
        <h1 className="text-2xl md:text-4xl 2xl:text-6xl mt-8 md:mt-12 text-orange-400 text-center">
          Graphitrix - Poster Making Contest
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
            FIT campus
          </h3>

          <h3 className="my-2">
            <span className="text-orange-200 text-base md:text-2xl 2xl:text-4xl">
              Time Limit:
            </span>{" "}
            90 Minutes
          </h3>
          <h3 className="my-2">
            <span className="text-orange-200 text-base md:text-2xl 2xl:text-4xl">
              Team Size:
            </span>{" "}
            1 Participant
          </h3>
          <h2 className="my-4 md:my-8">
            <span className="text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
              Registration Fee:
            </span>{" "}
            ₹30/-
          </h2>
        </div>
        <div className="md:px-44 text-sm md:text-xl 2xl:text-2xl">
          <h2 className="my-4 md:my-8 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Rules:
          </h2>

          <ul className="list-disc text-sm md:text-lg 2xl:text-xl">
            <li className="my-2">
              Only art paper will be provided for competitors by the
              coordinators.
            </li>
            <li className="my-2">
              All additional required art supplies, such as pens, pencils,
              erasers, paints, paintbrushes, markers, drawing boards, etc.,
              should be{" "}
              <span className="text-red-600">brought by competitors.</span>
            </li>
            <li className="my-2">
              It is highly forbidden for participants to bring any type of image
              to the event, and doing so will result in their{" "}
              <span className="text-red-600">automatic disqualification.</span>
            </li>
            <li className="my-2">
              It is not permitted to use a stencil in any way.
            </li>
            <li className="my-2">
              The subject matter will be provided on the spot.
            </li>
          </ul>
          <h2 className="my-4 md:my-8 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Judgement Criteria:
          </h2>
          <ul className="2xl:text-xl">
            <li className="list-disc text-sm md:text-lg my-2">
              Creativity and Originality of the message and visual elements.
            </li>
            <li className="list-disc text-sm md:text-lg my-2">
              The use of innovative techniques or concepts that set the poster
              apart.
            </li>
            <li className="list-disc text-sm md:text-lg my-2">
              Relevance to the Theme and the poster&apos;s ability to convey its
              message clearly and concisely.
            </li>
            <li className="list-disc text-sm md:text-lg my-2">
              Consideration of the target audience and how effectively the
              poster engages them.
            </li>
            <li className="list-disc text-sm md:text-lg my-2">
              Neatness and presentation quality.
            </li>
          </ul>
          <h2 className="my-4 md:my-8 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Restrictions:
          </h2>
          <ul>
            <li className="list-disc text-sm md:text-lg">
              Any explicit controversial content or any form of content that
              could be offensive to any community will lead to{" "}
              <span className="text-red-600">disqualification.</span>
            </li>
          </ul>

          <h2 className="my-10 md:my-14 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Contact Details:
          </h2>

          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center gap-x-6 my-4">
              <Image
                className="h-12 w-12 rounded-full"
                height={100}
                width={100}
                src={contact.img}
                alt={contact.name}
              />
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
          href="https://docs.google.com/forms/d/e/1FAIpQLSd23ZerUOaDOHEtOc4UyqFzCJfxxPxHV1yYWIBoLb6Gy5N1KA/viewform"
        >
          Register Now
        </Link>
      </div>
    </main>
  );
};

export default page;
