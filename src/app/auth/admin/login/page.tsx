"use client";

import z from "zod";
import Link from "next/link";
import { AdminLogin } from "@/utils/login";
import { Codesandbox } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Button from "@/components/ui/custom-button";

const Page = () => {
  const [err, setErr] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const loginSchema = z.object({
    id: z
      .string()
      .startsWith("MEM#", { message: "Incorrect Admin ID!" })
      .length(10, { message: "ID Must be exactly 10 characters long" }),
    secret: z.string(),
  });

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formdata = new FormData(event.currentTarget);
    const id = formdata.get("id");
    const secret = formdata.get("secret");

    const typeCheck = loginSchema.safeParse({ id, secret });

    if (!typeCheck.success) {
      setErr(typeCheck.error.issues[0].message);
      return;
    }

    setLoading(true);
    setErr("");

    const { message, status, data } = await AdminLogin(typeCheck.data);

    setLoading(false);

    if (status !== 200) {
      setErr(message);
    } else {
      router.push("/admin/panel");
    }
  };

  return (
    <main className="flex flex-row items-center px-12 bg-gradient-to-b from-slate-700 to-black">
      <section className="hidden h-screen w-[55vw] md:grid place-content-center left-0">
        <div className="flex flex-row items-center">
          <h2 className="text-5xl">Cybertron</h2>
          <Codesandbox
            size={65}
            strokeWidth={1.25}
            className="inline-flex text-cyan-200 animate-pulse ml-6"
          />
        </div>
      </section>

      <section className="w-full h-fit mt-12 md:mt-0 md:w-[40vw] p-6 md:px-4 md:right-0 bg-[#1b1b1b36] border border-gray-900 rounded-xl">
        <div className="flex flex-col items-center justify-center my-6 mb-10">
          <form onSubmit={login} className="md:px-4 md:w-[65%]">
            <h2 className="text-center text-xl md:text-2xl my-4 mb-12">
              Admin Login
            </h2>

            <div className="mt-24 mb-4">
              <div className="relative">
                <input
                  type="text"
                  className="block peer rounded-md my-4 py-2.5 px-4 w-full text-sm text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                  id="id"
                  name="id"
                  placeholder=""
                  required={true}
                />
                <label
                  className="text-white absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  htmlFor="id"
                >
                  Admin ID
                </label>
              </div>
            </div>

            <div className="mt-10 mb-16">
              <div className="relative">
                <input
                  type="password"
                  className="block peer rounded-md my-4 py-2.5 px-4 w-full text-sm text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                  id="secret"
                  name="secret"
                  placeholder="  "
                  required={true}
                />
                <label
                  className="text-white absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  htmlFor="secret"
                >
                  Admin Secret
                </label>
              </div>
            </div>

            {err && (
              <div className="grid place-content-center min-h-5 text-center rounded-md border border-red-600 text-red-600 text-xs font-mono -mt-6 mb-8">
                {err}
              </div>
            )}

            <div className="flex flex-col gap-3 items-center">
              <Button loading={loading} text={"Login"} type="submit" />

              <Link className="text-xs text-center mt-8" href={"#"}>
                Not Registered ?{" "}
                <span className="underline text-cyan-500">Click Here</span>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Page;
