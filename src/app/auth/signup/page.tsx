"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
  const depts = [
    "CSE",
    "CSE (IOT & Cys)",
    "CSE (AI & ML)",
    "CSE (Data Science)",
    "ECE",
    "EE",
    "ME",
    "Civil",
    "Other",
  ];
  const colleges = [
    "FIT",
    "FIEM",
    "JIS",
    "Techno Main",
    "Techno Saltlake",
    "GMIT",
    "Bivekananda",
    "Other",
  ];

  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [dept, setDept] = useState<string>("");
  const [college, setCollege] = useState<string>("");
  const [otherdept, setOtherDept] = useState<string>("");
  const [isotherdept, setIsOtherDept] = useState<boolean>(false);
  const [otherCollege, setOtherCollege] = useState<string>("");
  const [isotherCollege, setIsOtherCollege] = useState<boolean>(false);
  const [visible, setVisible] = useState<string>("hidden");

  // Response Data
  const [prtID, setPrtID] = useState("");

  const handleDept = (e: { target: { value: any } }) => {
    setDept(e.target.value);
    if (e.target.value === "Other") {
      setIsOtherDept(true);
      setOtherDept("");
    } else {
      setIsOtherDept(false);
      setOtherDept(e.target.value);
    }
  };

  const handleCollege = (e: { target: { value: any } }) => {
    setCollege(e.target.value);
    if (e.target.value === "Other") {
      setIsOtherCollege(true);
      setOtherCollege("");
    } else {
      setIsOtherCollege(false);
      setOtherCollege(e.target.value);
    }
  };

  // Pop Up Message
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [copyBtn, setCopyBtn] = useState("Copy");

  const closePopup = () => {
    setPopupVisible(false);
    router.push("/profile");
  };

  const handleCopyBtn = () => {
    navigator.clipboard.writeText(prtID);
    setCopyBtn("Copied !");
  };

  const register = async () => {
    const apiUrl = "/api/auth/register";

    if (!name || !mobile || !email || !year || !otherdept || !college) {
      setVisible("");
      return;
    }

    const participant = {
      name: name,
      mobile: mobile,
      email: email,
      year: year,
      department: otherdept,
      college: otherCollege,
    };

    try {
      const response = await axios(apiUrl, {
        method: "POST",
        data: participant,
      });

      console.log("In Page :" + JSON.stringify(response));

      if (response.status === 200) {
        setPrtID(response.data.body.id);
        setPopupVisible(true);
      }
    } catch (error) {
      const e = error as AxiosError;
      if (e.response) {
        alert(
          "Error Code: " +
            e.response.status +
            " Error Message: " +
            e.response.data
        );
      }
    }
  };

  return (
    <section className="py-14 px-6 md:px-[23%] bg-gradient-to-b from-slate-700 to-black">
      <div className="p-6 md:px-4 bg-[#1b1b1b36] border border-gray-900 rounded-xl">
        {isPopupVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50 text-white">
            <div
              className="fixed inset-0 bg-black opacity-70"
              onClick={closePopup}
            ></div>
            <div className="bg-gray-800 w-80 md:w-96 min-h-[12rem] md:min-h-[15rem] p-4 px-7 rounded-lg shadow-lg relative grid place-content-center text-center">
              <h3 className="text-lg md:text-xl md:my-4 my-3 text-lime-500">
                Registration Successfull
              </h3>
              <h2 className="text-lg md:text-xl md:my-4 my-3">{prtID}</h2>
              <button id="btn" className="my-4 mx-auto" onClick={handleCopyBtn}>
                {copyBtn}
              </button>
              <p className="text-xs md:text-sm md:my-4 my-3 text-red-600 font-semibold">
                This is Your Participant ID, save it for Future Use
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center justify-center my-10">
          <form className="md:w-[60%]">
            <h2 className="text-center text-xl font-semibold my-4 mb-12">
              Please Enter all Details
            </h2>

            <div className="my-16 ">
              <div className="relative">
                <input
                  type="text"
                  className="block peer rounded-md my-4 py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                  id="name"
                  placeholder="  "
                  value={name}
                  onChange={({ target }) => setName(target.value)}
                  required={true}
                />
                <label
                  className="text-white absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  htmlFor="name"
                >
                  Full Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="tel"
                  className="block rounded-md my-4 py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                  id="mobile"
                  placeholder="  "
                  value={mobile}
                  onChange={({ target }) => setMobile(target.value)}
                  required={true}
                />
                <label
                  className="text-white absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  htmlFor="mobile"
                >
                  Mobile Number
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  className="block rounded-md my-4 py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                  id="email"
                  placeholder="  "
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                  required={true}
                />
                <label
                  className="text-white absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  htmlFor="email"
                >
                  Email ID
                </label>
              </div>
              <div className="relative">
                <select
                  name="year"
                  onChange={({ target }) => setYear(target.value)}
                  value={year}
                  required
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
              <div className="relative">
                <select
                  id="dept"
                  onChange={handleDept}
                  value={dept}
                  required
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
              {isotherdept ? (
                <div className="relative">
                  <input
                    type="text"
                    className="block rounded-md my-6 py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                    id="dept"
                    placeholder="  "
                    value={otherdept}
                    onChange={({ target }) => setOtherDept(target.value)}
                    required={true}
                  />
                  <label
                    className="text-white absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    htmlFor="dept"
                  >
                    Mention Department
                  </label>
                </div>
              ) : (
                <></>
              )}

              <div className="relative">
                <select
                  id="college"
                  onChange={handleCollege}
                  value={college}
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

              {isotherCollege ? (
                <div className="relative">
                  <input
                    type="text"
                    className="block rounded-md my-4 py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                    id="college"
                    placeholder="  "
                    value={otherCollege}
                    onChange={({ target }) => setOtherCollege(target.value)}
                    required={true}
                  />
                  <label
                    className="text-white absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    htmlFor="college"
                  >
                    College Name
                  </label>
                </div>
              ) : (
                <></>
              )}
            </div>

            <p
              className={`text-white text-xs p-1 px-2 rounded-md bg-[#f06868] border-2 border-red-600 ${visible} text-center mb-6`}
            >
              Please Enter All Fields
            </p>

            <div className="flex flex-col gap-3 items-center">
              <button
                id="btn"
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={register}
              >
                Register
              </button>

              <Link className="text-xs text-center mt-8" href={"/auth/login"}>
                Already Registered ?{" "}
                <span className="underline text-cyan-500">Login Instead</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
