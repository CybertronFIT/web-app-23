import React from "react";
import Image from "next/image";
import { members, faculties } from "@/components/info/Objects";

const pc = [
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
    name: members[13].name,
    mobile: members[13].mobile,
    img: members[13].img,
  },
];

const mobile = [
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

const page = () => {
  return (
    <main
      id="hero"
      className="min-h-screen p-4 py-8 md:p-24 2xl:px-56 text-left"
    >
      <section className="backdrop-blur-sm px-8 py-6 rounded-2xl mt-20 md:mt-16">
        <h1 className="text-2xl md:text-4xl 2xl:text-6xl mt-8 md:mt-12 text-orange-400 text-center">
          General Instructions
        </h1>

        <div className="md:px-44 text-sm md:text-xl 2xl:text-2xl mt-16">
          <h2 className="my-6 md:my-8 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Rules:
          </h2>

          <ul className="list-disc text-sm md:text-lg 2xl:text-xl">
            <li className="my-4">
              All participants should carry their respective College/University
              ID cards for registration and entry.
            </li>
            <li className="my-4">
              On-spot registrations are dependent on slot availability.
            </li>
            <li className="my-4">
              Only the team leader must register his/her team via the given
              registration link. No duplicate entries will be accepted.
            </li>
            <li className="my-4">
              Any changes in members of a group should be informed at least a
              day before the event.
            </li>
            <li className="my-4">
              For judging matters, the decision of the judges will be final.
            </li>
            <li className="my-4">
              In case, if a participant fails to be present during the
              performance, there will be no refund of the registration fees
            </li>
            <li className="my-4">
              Events are subject to cancellation in case of less participation
              (registered participants will be notified and refunded in case of
              cancellation).
            </li>
            <li className="my-4">
              Participants should be responsible for their belongings. Smoking
              and alcoholic beverages are strictly prohibited.
            </li>
            <li className="my-4">
              Any use of obscenity or vulgarity will result in immediate
              disqualification. The organizers&apos; choice is final and
              enforceable. Any form of violence or harassment towards fellow
              attendees will not be tolerated.
            </li>
            <li className="my-4">
              Not following any of the above-mentioned guidelines will straight
              away lead to disqualification.
            </li>
          </ul>

          <h2 className="my-10 md:my-14 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Contact Details:
          </h2>

          <h3 className="my-2 text-orange-200 text-base md:text-2xl 2xl:text-4xl">
            Convenor
          </h3>

          <div className="flex items-center gap-x-6 my-4">
            <Image
              height={100}
              width={100}
              className="h-12 w-12 rounded-full"
              src={faculties[1].img}
              alt={faculties[1].name}
            />
            <div>
              <h4 className="text-base 2xl:text-xl md:font-semibold leading-7 tracking-tight">
                {faculties[1].name}
              </h4>
              <p className="text-sm 2xl:text-lg md:font-semibold leading-6 text-orange-400">
                {faculties[1].mobile}
              </p>
            </div>
          </div>
          <h3 className="my-2 text-orange-200 text-base md:text-2xl 2xl:text-4xl">
            Student Coordinators
          </h3>

          <div className="flex items-center gap-x-6 my-4">
            <Image
              height={100}
              width={100}
              className="h-12 w-12 rounded-full"
              src={members[3].img}
              alt={members[3].name}
            />
            <div>
              <h4 className="text-base 2xl:text-xl md:font-semibold leading-7 tracking-tight">
                {members[3].name}
              </h4>
              <p className="text-sm 2xl:text-lg md:font-semibold leading-6 text-orange-400">
                {members[3].mobile}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-6 my-4">
            <Image
              height={100}
              width={100}
              className="h-12 w-12 rounded-full"
              src={members[6].img}
              alt={members[6].name}
            />
            <div>
              <h4 className="text-base 2xl:text-xl md:font-semibold leading-7 tracking-tight">
                {members[6].name}
              </h4>
              <p className="text-sm 2xl:text-lg md:font-semibold leading-6 text-orange-400">
                {members[6].mobile}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="backdrop-blur-sm px-8 py-6 rounded-2xl md:mt-8">
        <h1 className="text-2xl md:text-4xl 2xl:text-6xl mt-8 md:mt-12 text-orange-400 text-center">
          Global Rules for Gaming Events
        </h1>

        <div className="md:px-44 text-sm md:text-xl 2xl:text-2xl mt-16">
          <h2 className="my-6 md:my-8 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Rules:
          </h2>

          <ul className="list-disc text-sm md:text-lg 2xl:text-xl">
            <li className="my-4">
              Players From Any Colleges Can Participate in the Gaming Events.
            </li>
            <li className="my-4">
              You can create & play with your team who belongs to other
              colleges.
            </li>
            <li className="my-4">
              Only the team leader must register his/her team via the given
              registration link.
            </li>
            <li className="my-4">
              All teams must coordinate with the event coordinators present on
              the spot.
            </li>
            <li className="my-4">
              Failing to comply with rules may result in consequences such as
              disqualification from events, removal from the premises, or other
              appropriate actions as determined by event organizers and
              authorities.
            </li>
          </ul>

          <h2 className="my-10 md:my-14 text-orange-200 text-lg md:text-2xl 2xl:text-4xl">
            Contact Details:
          </h2>

          <h3 className="my-2 text-orange-200 text-base md:text-2xl 2xl:text-4xl">
            Mobile gaming
          </h3>

          {mobile.map((contact, index) => (
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
          <h3 className="my-2 text-orange-200 text-base md:text-2xl 2xl:text-4xl">
            PC gaming
          </h3>

          {pc.map((contact, index) => (
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
        <a
          className="mx-auto p-4 text-black bg-orange-400 border-2 border-orange-500 shadow-lg hover:text-white shadow-orange-500 rounded-xl"
          download
          href="/Event_Brochure.pdf"
        >
          Download pdf
        </a>
      </div>
    </main>
  );
};

export default page;
