import React from "react";
import Link from "next/link";
import Image from "next/image";
import { members } from "@/components/info/Objects";

const contacts = [
  {
    name: members[2].name,
    mobile: members[2].mobile,
    img: members[2].img,
  },
  {
    name: members[11].name,
    mobile: members[11].mobile,
    img: members[11].img,
  },
];

const style = {
  background: "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.65)), url(/backgrounds/events/stopcam.webp)",
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
          StopCam - Photography Contest
        </h1>
        <div className="my-16 md:my-24 md:px-44 text-sm md:text-xl 2xl:text-2xl">
          <h3 className="my-2">
            <span className="text-orange-200 text-base md:text-2xl 2xl:text-4xl">
              Mode of Submission:
            </span>{" "}
            Online
          </h3>
          <h3 className="my-2">
            <span className="text-orange-200 text-base md:text-2xl 2xl:text-4xl">
              Last date of Submission:
            </span>{" "}
            25th September
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
              Gadget Glimpses
            </li>
            <li className="list-disc text-sm md:text-lg my-2">
              Hacking the Light.
            </li>
          </ul>
          <h2 className="my-4 md:my-8 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Rules:
          </h2>

          <ul className="list-disc text-sm md:text-lg 2xl:text-xl">
            <li className="my-2">
              Inappropriate content by any meaning, copyright infringement, or
              failure to comply with the rules will lead to <span className="text-red-600">disqualification.</span>
            </li>
            <li className="my-2">No strict specification for equipment.</li>
            <li className="my-2">
              Image resolution must be greater than 600x400 pixels.
            </li>
            <li className="my-2">
              File format can be any image format (jpeg, jpg, png).
            </li>
            <li className="my-2">
              The photos must be submitted before the provided deadline, late
              submissions <span className="text-red-600">will not be accepted.</span>
            </li>
          </ul>
          <h2 className="my-4 md:my-8 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Judgement Criteria:
          </h2>
          <ul className="2xl:text-xl">
            <li className="list-disc text-sm md:text-lg my-2">
              The uniqueness of perspective, creativity, and originality
              demonstrated in the photograph.
            </li>
            <li className="list-disc text-sm md:text-lg my-2">
              The technical aspects of the photograph, including sharpness,
              exposure, focus, color balance, etc.
            </li>
            <li className="list-disc text-sm md:text-lg my-2">
              Attention to small details within the photograph that contribute
              to its overall impact. This might include capturing subtle
              expressions, textures, or patterns.
            </li>
            <li className="list-disc text-sm md:text-lg my-2">
              Ensure that the photographer has followed all the contest rules,
              including image size, format, etc.
            </li>
          </ul>
          <h2 className="my-4 md:my-8 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Restrictions:
          </h2>
          <ul className="2xl:text-xl">
            <li className="list-disc text-sm md:text-lg">
              A participant can only submit up to 2 photos.
            </li>
            <li className="list-disc text-sm md:text-lg">
              No two participants should have <span className="text-red-600">same photos.</span>
            </li>
            <li className="list-disc text-sm md:text-lg">
              Any explicit controversial content that could be offensive to any
              community will <span className="text-red-600">lead to disqualification.</span>
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
          href="https://docs.google.com/forms/d/e/1FAIpQLScowyafVd8Nce-wQIDqLTAq5VB4MsiZGhqakUzGj5tP7FjGVg/viewform"
        >
          Register Now
        </Link>
      </div>
    </main>
  );
};

export default page;
