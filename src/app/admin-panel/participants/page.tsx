import { fetchParticipantData } from "@/components/database/FetchData";
import JsonTable from "@/components/ui/JsonTable";
import React from "react";

const Participants = async () => {
  let participants = null;

  try {
    participants = await fetchParticipantData("");
    if (participants === null) {
      return participants;
    }
  } catch (error) {
    console.error(error);
    return null;
  }

  const showDetails = async (e: number) => {
    'use server';
    console.log(e);
  };

  return (
    <section className="min-h-screen overflow-x-auto px-36 2xl:px-64 pt-36 bg-gradient-to-b from-gray-800 to-black">
      <JsonTable data={participants} showDetails={showDetails} />
      <h3 className="text-center my-10 text-cyan-400">
        Participants Count: {participants.length}
      </h3>
    </section>
  );
};

export default Participants;
