import React from "react";
import Link from "next/link";
import Image from "next/image";
import { members } from "@/components/info/Objects";

const contacts = [
  {
    name: members[5].name,
    mobile: members[5].mobile,
    img: members[5].img,
  },
];

const page = () => {
  return (
    <main
      id="hero"
      className="min-h-screen p-4 py-8 md:p-24 2xl:px-56 text-left"
    >
      <section className="backdrop-blur-sm px-8 py-6 rounded-2xl mt-20 md:mt-16">
        <h1 className="text-2xl md:text-4xl 2xl:text-6xl mt-8 md:mt-12 text-orange-400 text-center">
          Penstinct - Content Writing Contest
        </h1>
        <div className="my-16 md:my-24 md:px-44 text-sm md:text-xl 2xl:text-2xl">
          <h3 className="my-2">
            <span className="text-orange-200 text-base md:text-2xl 2xl:text-4xl">
              Mode of conduction:
            </span>{" "}
            Online submission
          </h3>
          <h3 className="my-2">
            <span className="text-orange-200 text-base md:text-2xl 2xl:text-4xl">
              Last Date of Submission:
            </span>{" "}
            24th September
          </h3>

          <h3 className="my-2">
            <span className="text-orange-200 text-base md:text-2xl 2xl:text-4xl">
              Format:
            </span>{" "}
            pdf
          </h3>
          <h3 className="my-2">
            <span className="text-orange-200 text-base md:text-2xl 2xl:text-4xl">
              Word Limit:
            </span>{" "}
            300 words
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
            Topics:
          </h2>
          <ul className="2xl:text-xl">
            <li className="list-disc text-sm md:text-lg my-2">
              Role of cybersecurity in the development of a safer nation.
            </li>
            <li className="list-disc text-sm md:text-lg my-2">
              The Concept of Green Technology in Modern World
            </li>
          </ul>
          <h2 className="my-4 md:my-8 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Languages Accepted:
          </h2>
          <ul className="2xl:text-xl text-blue-500">
            <li className="list-disc text-sm md:text-lg my-2">English</li>
            <li className="list-disc text-sm md:text-lg my-2">Bengali</li>
            <li className="list-disc text-sm md:text-lg my-2">Hindi</li>
          </ul>
          <h2 className="my-4 md:my-8 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Rules:
          </h2>

          <ul className="list-disc text-sm md:text-lg 2xl:text-xl">
            <li className="my-2">
              The participants must adhere to the given topic
            </li>
            <li className="my-2">
              The contents must be submitted before the provided deadline, late
              submissions <span className="text-red-600">will not be accepted</span>.
            </li>
            <li className="my-2">
              Content may be hand written or typed. The handwritten page must be
              scanned properly. Blurry images <span className="text-red-600">will be discarded</span>.
            </li>
          </ul>
          <h2 className="my-4 md:my-8 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Judgement Criteria:
          </h2>
          <ul className="2xl:text-xl">
            <li className="list-disc text-sm md:text-lg my-2">
              Creativity and Originality of the content.
            </li>
            <li className="list-disc text-sm md:text-lg my-2">
              Relevance to the topic and the participants ability to convey its
              message clearly and concisely.
            </li>
            <li className="list-disc text-sm md:text-lg my-2">
              Presentation quality and structure of the content.
            </li>
          </ul>
          <h2 className="my-4 md:my-8 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Restrictions:
          </h2>
          <ul className="2xl:text-xl">
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
      <div className="text-center my-4 md:my-8">
        <Link
          className="mx-auto p-4 text-black bg-orange-400 border-2 border-orange-500 shadow-lg hover:text-white shadow-orange-500 rounded-xl"
          href="https://docs.google.com/forms/d/e/1FAIpQLSe-vhhYk39rZ-OqAoFGPp2idmria93G7bL7KYI-HWsptXcqRA/viewform"
        >
          Register Now
        </Link>
      </div>
    </main>
  );
};

export default page;
