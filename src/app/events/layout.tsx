import EventNav from "@/components/EventNav";

const EventLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <EventNav />
      {children}
    </>
  );
};

export default EventLayout;
