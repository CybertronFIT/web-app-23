import { fetchTeamData } from "@/components/database/FetchData";
import JsonTable from "@/components/ui/JsonTable";
import React from "react";

const Teams = async () => {
  let teams = null;

  try {
    teams = await fetchTeamData("");
    if (teams === null) {
      return teams;
    }
  } catch (error) {
    console.error(error);
    return null;
  }

  const extractedValues: string[] = [];
  // Assuming 'teams' contains an array of JSON objects
  const modifiedTeams = teams.map((team) => {
    const { screenShot, ...rest } = team;
    extractedValues.push(screenShot);
    return rest;
  });

  const showDetails = async (e: number) => {
    'use server';
    console.log(e);
  };

  // 'modifiedTeams' will contain the same objects with the 'screenShot' key removed

  return (
    <section className="min-h-screen w-full px-24 2xl:px-64 pt-36 bg-gradient-to-b from-gray-800 to-black">
      <JsonTable data={modifiedTeams} showDetails={showDetails} />
      <h3 className="text-center my-10 text-cyan-400">
        Teams Count: {teams.length}
      </h3>
    </section>
  );
};

export default Teams;
