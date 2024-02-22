import type { Metadata } from "next";
import EventNav from "@/components/navbar/EventNavbar";

export const metadata: Metadata = {
  title: "Events | Cybertron",
  description: "Cybertron'24 Events",
};

const EventLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <EventNav />
      {children}
    </>
  );
};

export default EventLayout;