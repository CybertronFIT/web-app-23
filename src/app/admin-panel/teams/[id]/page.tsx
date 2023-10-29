/* eslint-disable @next/next/no-img-element */
import { fetchTeamData } from "@/components/database/FetchData";
import React from "react";

const SingleTEAM = async ({ params }: { params: { id: string } }) => {
  let data = null;
  try {
    data = await fetchTeamData("/" + params.id);
    if (!data) {
      return null;
    }
  } catch (error) {
    return null;
  }
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center text-center">
      <h2 className="text-center">ID: {decodeURIComponent(params.id)}</h2>
      <h3 className="text-center">Team Name: {data[0].teamName}</h3>
      <h3 className="text-center">Event Name: {data[0].eventName}</h3>
      <h3 className="text-center">Payment ID: {data[0].paymentID}</h3>
      <h3 className="text-center">News Source: {data[0].newsSource}</h3>
      <h3 className="text-center">Team Leader: {data[0].teamLeader}</h3>
      <h3 className="text-center">Member 1: {data[0].member1}</h3>
      <h3 className="text-center">Member 2: {data[0].member2}</h3>
      <h3 className="text-center">Member 3: {data[0].member3}</h3>

      <img className="w-[40vw]" src={data[0].screenShot} alt="" />
    </div>
  );
};

export default SingleTEAM;
