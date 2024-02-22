import { Suspense } from "react";
import { cookies } from "next/headers";
import RegisterForm from "./RegisterForm";
import { redirect } from "next/navigation";
import PageLoader from "@/components/loader/Page";
import { fetchEventData } from "@/server/fetch-data";
import { TOKEN_NAME } from "@/components/constants/cookie";

const pages = ["ctf", "coding", "project"];

const Register = async ({ params }: { params: { event: string } }) => {
  if (pages.indexOf(params.event) === -1) {
    redirect("/");
  }

  const cookieStore = cookies();
  const access_token = cookieStore.has(TOKEN_NAME);
  const token = cookieStore.get(TOKEN_NAME);

  const res = await fetchEventData(`/events?page=${params.event}`);
  const eventName = res.results[0].title;

  let id = "TEM#PSRIPW";

  // if (access_token && token) {
  //   const { value } = token;

  //   try {
  //     const payload = verify(value, JWT_SECRET);

  //     if (typeof payload === "string") return;

  //     if (!payload.id.startsWith("PRC#")) {
  //       redirect("/");
  //     }

  //     id = payload.id;
  //   } catch (error) {
  //     console.error(error);
  //     redirect("/auth/login");
  //   }
  // } else {
  //   redirect("/auth/login");
  // }

  return (
    <Suspense fallback={<PageLoader />}>
      <main className="min-h-screen py-14 px-6 md:px-[23%] bg-gradient-to-b from-slate-700 to-black">
        <RegisterForm id={id} name={eventName} />
      </main>
    </Suspense>
  );
};

export default Register;
