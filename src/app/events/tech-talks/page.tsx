import React from "react";

const page = () => {
  return (
    <main
      id="hero"
      className="min-h-screen p-4 py-8 md:p-24 md:px-32 2xl:px-80 text-left"
    >
      <section className="backdrop-blur-md px-8 md:px-32 py-6 rounded-2xl mt-20 md:mt-16 text-left text-orange-200">
        <p className="my-6">Dear Attendees,</p>
        <p className="my-6">
          We are thrilled to announce &ldquo;Cybertron &apos;23,&ldquo; a
          cutting-edge tech event that promises to be an enlightening experience
          for all tech enthusiasts. Our esteemed guest speaker for this event is{" "}
          <span className="text-orange-500">
            Mr. Ranjan Chakraborty, Sub-Inspector of Police at the Cyber Police
            Station, Kolkata Police, Lalbazar.
          </span>
        </p>
        <p className="my-6">
          Mr. Chakraborty brings a wealth of knowledge and expertise in the
          field of cybersecurity and law enforcement. His insights into the
          evolving landscape of cybercrime and strategies for combating it are
          sure to be invaluable.
        </p>
        <p className="my-6">
          <span className="text-orange-500">
            Join us on 26th September at the Seminar Hall, FIT campus for an
            engaging discussion with Mr. Ranjan Chakraborty.
          </span>{" "}
          Together, we will explore the ever-changing world of cybersecurity and
          how it impacts our lives.
        </p>
        <p className="my-6">
          Stay tuned for more updates and registration details. Don&apos;t miss
          this opportunity to gain valuable insights into the world of
          cybercrime prevention and digital security.
        </p>
        <p className="my-6">
          See you at <span className="text-orange-500">Cybertron&apos;23!</span>
        </p>
      </section>
    </main>
  );
};

export default page;
