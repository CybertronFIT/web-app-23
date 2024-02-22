"use client";

import z from "zod";
import Link from "next/link";
import { sendMail } from "@/lib/mail";
import { Codesandbox } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import SignupParticipant from "@/utils/signup";
import Button from "@/components/ui/custom-button";
import { colleges, depts, years } from "@/lib/types";
import getRegisterBody from "@/lib/templates/signup";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Signup = () => {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const [dialog, setDialog] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const router = useRouter();

  const signupSchema = z.object({
    name: z
      .string()
      .includes(" ", { message: "Please Enter Full Name" })
      .min(2, { message: "Name must be atleast 2 characters long" }),
    mobile: z.string().length(10, { message: "Phone must be 10 digits long" }),
    email: z.string().email({ message: "Invalid email address" }),
    year: z.string().min(1, { message: "Please Select a Year" }),
    department: z.string().min(1, { message: "Please Select a Department" }),
    college: z.string().min(1, { message: "Please Select a College" }),
  });

  const signup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formdata = new FormData(event.currentTarget);

    const typeCheck = signupSchema.safeParse({
      name: formdata.get("name"),
      mobile: formdata.get("mobile"),
      email: formdata.get("email"),
      year: formdata.get("year"),
      department: formdata.get("department"),
      college: formdata.get("college"),
    });

    if (!typeCheck.success) {
      setErr(typeCheck.error.issues[0].message);
      return;
    }

    setLoading(true);
    setErr("");
    setEmail(typeCheck.data.email);

    const { message, status, data } = await SignupParticipant(typeCheck.data);

    const html = getRegisterBody(typeCheck.data.name, data.id);

    await sendMail({
      to: typeCheck.data.email,
      name: typeCheck.data.name,
      body: html,
      subject: "Welcome to Cybertron",
    });

    setLoading(false);

    // data.id

    if (status !== 200) {
      setErr(message);
    } else {
      setDialog(true);
    }
  };

  return (
    <main className="flex flex-row items-center px-10 md:px-12 bg-gradient-to-b from-slate-700 to-black">
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

      <section className="w-full h-fit mt-12 md:w-[40vw] 2xl:ml-32 p-6 md:px-4 md:right-0 bg-[#1b1b1b36] border border-gray-900 rounded-xl">
        <div className="flex flex-col items-center justify-center my-6 mb-10">
          <h2 className="text-center text-xl md:text-2xl mt-10 mb-12">
            Register to Cybertron
          </h2>
          <form onSubmit={signup} className="md:px-4 md:w-[65%]">
            <div className="mt-6">
              <div className="relative">
                <input
                  type="text"
                  className="block peer rounded-md my-4 py-2.5 px-4 w-full text-sm text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                  id="name"
                  name="name"
                  placeholder="  "
                  required={true}
                />
                <label
                  className="text-white absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  htmlFor="name"
                >
                  Enter Full Name
                </label>
              </div>
            </div>

            <div className="my-8">
              <div className="relative">
                <input
                  type="tel"
                  className="block peer rounded-md my-4 py-2.5 px-4 w-full text-sm text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                  id="mobile"
                  name="mobile"
                  placeholder="  "
                  required={true}
                />
                <label
                  className="text-white absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  htmlFor="mobile"
                >
                  Phone Number
                </label>
              </div>
            </div>

            <div className="mt-8 mb-4">
              <div className="relative">
                <input
                  type="email"
                  className="block peer rounded-md my-4 py-2.5 px-4 w-full text-sm text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                  id="email"
                  name="email"
                  placeholder="  "
                  required={true}
                />
                <label
                  className="text-white absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  htmlFor="email"
                >
                  Email Address
                </label>
              </div>
            </div>

            <div className="my-4">
              <div className="relative">
                <select
                  id="year"
                  name="year"
                  required={true}
                  className="text-white my-2 rounded-md py-2.5 w-full bg-transparent border-0 appearance-none outline-none border-b-2 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500"
                >
                  <option className="text-gray-900 px-4" value={""}>
                    Studying Year
                  </option>
                  {years.map((year, index) => (
                    <option
                      key={index}
                      className="text-gray-900 px-4"
                      value={year}
                    >
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="my-4">
              <div className="relative">
                <select
                  id="department"
                  name="department"
                  required={true}
                  className="text-white my-2 rounded-md py-2.5 w-full bg-transparent border-0 appearance-none outline-none border-b-2 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500"
                >
                  <option className="text-gray-900 px-4" value={""}>
                    Select Department
                  </option>
                  {depts.map((dept, index) => (
                    <option
                      key={index}
                      className="text-gray-900 px-4"
                      value={dept}
                    >
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="my-4">
              <div className="relative">
                <select
                  id="college"
                  name="college"
                  required
                  className="text-white my-2 rounded-md py-2.5 w-full bg-transparent border-0 appearance-none outline-none border-b-2 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500"
                >
                  <option className="text-gray-900 px-4" value={""}>
                    Select College
                  </option>
                  {colleges.map((clg, index) => (
                    <option
                      key={index}
                      className="text-gray-900 px-4"
                      value={clg}
                    >
                      {clg}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {err && (
              <div className="grid place-content-center h-5 rounded-md border border-red-600 text-red-600 text-xs font-mono mt-6 -mb-6">
                {err}
              </div>
            )}

            <div className="flex flex-col gap-3 items-center mt-14">
              <Button loading={loading} text={"Create Account"} type="submit" />

              <Link className="text-xs text-center mt-8" href={"/auth/login"}>
                Already Registered ?{" "}
                <span className="underline text-cyan-500">Login Instead</span>
              </Link>
            </div>
          </form>
        </div>
      </section>

      <AlertDialog open={dialog}>
        <AlertDialogContent className="bg-gradient-to-t from-black to-gray-800 border-none">
          <AlertDialogHeader>
            <AlertDialogTitle>Login to Continue</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-400">
              An email is sent to{" "}
              <span className="font-mono text-white">{email}</span> with Your
              Unique Participant ID. Use it along with your phone number to
              Login
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => {
                setDialog(false);
                router.push("/auth/login");
              }}
            >
              Okay
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
};

export default Signup;

// TODO: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#cookies
// TODO: https://www.blackbox.ai/share/a0299912-6022-4d64-8daa-5ee08b5e2c04
