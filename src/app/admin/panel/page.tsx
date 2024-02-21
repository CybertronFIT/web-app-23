const Panel = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const { view } = searchParams ?? { view: "" };
  const table = view? view : "participants"




  return <div>{table}</div>;
};

export default Panel;
