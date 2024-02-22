import { Loader2 } from "lucide-react";

const PageLoader = () => {
  return (
    <main className="h-screen grid place-content-center bg-gradient-to-b from-slate-800 to-black">
      <Loader2 size={50} className="animate-spin text-cyan-500"></Loader2>
    </main>
  );
};

export default PageLoader;
