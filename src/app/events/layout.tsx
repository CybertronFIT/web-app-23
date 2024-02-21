import EventNav from "@/components/navbar/EventNavbar";

const EventLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <EventNav />
      {children}
    </>
  );
};

export default EventLayout;