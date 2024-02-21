const Page = ({ params }: { params: { event: string } }) => {
  const pages = ["ctf", "coding", "project"];

  return <main>{params.event}</main>;
};

export default Page;
