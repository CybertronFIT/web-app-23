"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Person from "@/components/loader/Person";
import { fetchAdminData } from "@/components/database/FetchData";

const Page = () => {
  const [convenor, setConvenor] = useState<{
    name: string;
    image: string;
    role: string;
    mobile: string;
  } | null>(null);
  const [coordinators, setCoordinator] = useState<
    { name: string; image: string; role: string; mobile: string }[] | null
  >(null);

  useEffect(() => {
    const checkRegistration = async () => {
      try {
        const result1 = await fetchAdminData("faculties?role=Convenor");
        const result2 = await fetchAdminData("members?role=Coordinator");
        if (result1) {
          setConvenor(result1[0]);
        }
        if (result2) {
          setCoordinator(result2);
        }
      } catch (error) {
        console.error("Recieved Error: ", error);
      }
    };

    checkRegistration();
  }, []);

  return (
    <main
      id="hero"
      className="min-h-screen p-4 py-8 md:p-24 2xl:px-56 text-left"
    >
      <section className="backdrop-blur-md px-8 py-6 pb-10 rounded-2xl mt-20 md:mt-16">
        <h1 className="text-2xl md:text-4xl 2xl:text-6xl mt-8 md:mt-12 text-cyan-400 text-center">
          General Instructions
        </h1>

        <div className="md:px-44 text-sm md:text-xl 2xl:text-2xl mt-16">
          <h2 className="my-6 md:my-8 text-cyan-200 text-lg md:text-2xl 2xl:text-4xl">
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

          <h2 className="my-10 md:my-14 text-cyan-200 text-lg md:text-2xl 2xl:text-4xl">
            Contact Details:
          </h2>

          <h3 className="my-2 text-cyan-200 text-base md:text-2xl 2xl:text-4xl">
            Convenor
          </h3>
          {convenor ? (
            <div className="flex items-center gap-x-6 my-4">
              <Image
                height={100}
                width={100}
                className="h-12 w-12 rounded-full"
                src={convenor.image}
                alt={convenor.name}
              />
              <div>
                <h4 className="text-base 2xl:text-xl md:font-semibold leading-7 tracking-tight">
                  {convenor.name}
                </h4>
                <p className="text-sm 2xl:text-lg md:font-semibold leading-6 text-cyan-400">
                  {convenor.mobile}
                </p>
              </div>
            </div>
          ) : (
            <Person />
          )}
          <h3 className="my-2 text-cyan-200 text-base md:text-2xl 2xl:text-4xl">
            Student Coordinators
          </h3>

          {coordinators ? (
            <>
              {coordinators.map((coordinator, index) => (
                <div key={index} className="flex items-center gap-x-6 my-4">
                  <Image
                    height={100}
                    width={100}
                    className="h-12 w-12 rounded-full"
                    src={coordinator.image}
                    alt={coordinator.name}
                  />
                  <div>
                    <h4 className="text-base 2xl:text-xl md:font-semibold leading-7 tracking-tight">
                      {coordinator.name}
                    </h4>
                    <p className="text-sm 2xl:text-lg md:font-semibold leading-6 text-cyan-400">
                      {coordinator.mobile}
                    </p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <Person />
          )}
        </div>
      </section>

      <div className="text-center my-8 md:my-12">
        <a
        id="btn"
          className="mx-auto"
          download
          href="/Event_Brochure.pdf"
        >
          Download pdf
        </a>
      </div>
    </main>
  );
};

export default Page;
