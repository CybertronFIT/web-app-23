"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { API_URL, custom_headers } from "@/constants/Database";
import { fetchEventData } from "@/components/database/FetchData";

export default function Page({ params }: { params: { event: string } }) {
  const pages = ["ctf", "coding", "project"];
  const [json, setJSON] = useState<{ id: string } | null>(null);
  const [eventName, setEventName] = useState<string>("");
  const router = useRouter();

  const visible = "";
  const maxSizeInBytes = 1 * 1024 * 1024; // 1MB

  // Form Data
  const [teamName, setTeamName] = useState<string>("");
  const [member1, setMember1] = useState<string>("");
  const [member2, setMember2] = useState<string>("");
  const [member3, setMember3] = useState<string>("");
  const [tID, setTID] = useState<string>("");
  const [newsSource, setNewsSource] = useState<string>("");
  const [base64String, setBase64String] = useState<string | null>(null);

  const [imageSize, setImageSize] = useState(0);

  // Pop Up Message
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [copyBtn, setCopyBtn] = useState("Copy");

  const closePopup = () => {
    setPopupVisible(false);
    router.push("/");
  };

  const handleCopyBtn = () => {
    navigator.clipboard.writeText(teamID);
    setCopyBtn("Copied !");
  };

  // Response Data
  const [teamID, setTeamID] = useState("");

  const register = async () => {
    if (!teamName || !tID || !newsSource || !base64String) {
      alert("Fill Every required Fields");
    }

    if (imageSize >= maxSizeInBytes) {
      alert("Please Select Image within 1MB");
    }

    if (json) {
      const payload = {
        teamName: teamName,
        eventName: eventName,
        paymentID: tID,
        screenShot: base64String,
        newsSource: newsSource,
        teamLeader: json.id,
        member1: member1,
        member2: member2,
        member3: member3,
      };

      const api_endpoint = API_URL + "teams";

      try {
        const response = await axios(api_endpoint, {
          method: "POST",
          data: payload,
          headers: custom_headers,
        });

        if (response.status === 200) {
          setTeamID(response.data.id);
          setPopupVisible(true);
        }
        // TODO: check 409 status
      } catch (error) {
        const e = error as AxiosError;
        if (e.response) {
          console.error(
            "Received: " + e.response.status + " " + e.response.data
          );
        }
      }
    }
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setImageSize(file.size);
      // Read the selected image file and convert it to a Base64 string
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          const base64 = e.target.result as string;
          setBase64String(base64);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const checkRegistration = async () => {
      try {
        const result = await axios("/api/auth/verify");
        if (result.status === 200) {
          const payload = result.data.payload;
          setJSON(payload);
        } else {
          // TODO: Toast "You need to Log in First"

          router.push("/auth/login");
        }
      } catch (error) {
        const e = error as AxiosError;
        console.error("Recieved Error: ", e);
        router.push("/auth/login");
      }
    };

    const getEventName = async () => {
      const eventName = await fetchEventData(`events?page=${params.event}`);
      if (eventName) {
        setEventName(eventName[0].title);
      }
    };

    checkRegistration();
    getEventName();
  }, [params.event, router]);

  if (!pages.includes(params.event)) {
    // Invalid Page Visit
    // TODO: Toast "Invalid Page Visit"
    router.push("/");
  } else {
    return (
      <main>
        {json ? (
          <div>
            {json.id.startsWith("PRC#") ? (
              <section className="py-14 px-6 md:px-[23%] bg-gradient-to-b from-slate-700 to-black">
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
                      <h2 className="text-lg md:text-xl md:my-4 my-3">
                        {teamID}
                      </h2>
                      <button
                        id="btn"
                        className="my-4 mx-auto"
                        onClick={handleCopyBtn}
                      >
                        {copyBtn}
                      </button>
                      <p className="text-xs md:text-sm md:my-4 my-3 text-red-600 font-semibold">
                        This is the ID of Your Team, save it for Future Use
                      </p>
                    </div>
                  </div>
                )}

                <div className="p-6 md:px-4 bg-[#1b1b1b36] border border-gray-900 rounded-xl">
                  <div className="flex flex-col items-center justify-center my-10">
                    <form className="md:w-[60%]">
                      <h2 className="text-center text-xl font-semibold my-8 mb-12">
                        Please Enter all Details
                      </h2>

                      <div className="my-16 ">
                        <div className="relative">
                          <input
                            type="text"
                            className="block peer rounded-md my-8 py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                            id="name"
                            placeholder="  "
                            value={teamName}
                            onChange={({ target }) => setTeamName(target.value)}
                            required={true}
                          />
                          <label
                            className="text-white absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                            htmlFor="name"
                          >
                            Team Name
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            className="block peer rounded-md my-8 py-2.5 px-4 w-full text-sm text-orange-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                            id="event-name"
                            placeholder="  "
                            value={eventName}
                            disabled={true}
                          />
                          <label
                            className="text-cyan-500 absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                            htmlFor="event-name"
                          >
                            Event Name
                          </label>
                        </div>

                        <div className="relative">
                          <input
                            type="text"
                            className="block peer rounded-md my-8 py-2.5 px-4 w-full text-sm text-orange-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                            id="leader-name"
                            placeholder="  "
                            value={json.id}
                            disabled={true}
                          />
                          <label
                            className="text-cyan-500 absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                            htmlFor="leader-name"
                          >
                            Team Leader ID (You)
                          </label>
                        </div>

                        <div className="relative">
                          <input
                            type="text"
                            className="block rounded-md my-8 py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                            id="name1"
                            placeholder="  "
                            value={member1}
                            onChange={({ target }) => setMember1(target.value)}
                            required={true}
                          />
                          <label
                            className="text-white absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                            htmlFor="name1"
                          >
                            Member 2 ID (Optional)
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            className="block rounded-md my-8 py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                            id="name2"
                            placeholder="  "
                            value={member2}
                            onChange={({ target }) => setMember2(target.value)}
                            required={true}
                          />
                          <label
                            className="text-white absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                            htmlFor="name2"
                          >
                            Member 3 ID (Optional)
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            className="block rounded-md my-8 py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                            id="name3"
                            placeholder="  "
                            value={member3}
                            onChange={({ target }) => setMember3(target.value)}
                            required={true}
                          />
                          <label
                            className="text-white absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                            htmlFor="name3"
                          >
                            Member 4 ID (Optional)
                          </label>
                        </div>

                        <div className="relative">
                          <input
                            type="text"
                            className="block rounded-md my-8 py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                            id="transaction-id"
                            placeholder="  "
                            value={tID}
                            onChange={({ target }) => setTID(target.value)}
                            required={true}
                          />
                          <label
                            className="text-white absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                            htmlFor="transaction-id"
                          >
                            Transaction ID
                          </label>
                        </div>

                        <div className="relative">
                          <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            htmlFor="file_input"
                          >
                            Upload Payment Screenshot
                          </label>
                          <input
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help"
                            id="file_input"
                            type="file"
                            accept="image/*"
                            onChange={handleFileInputChange}
                          ></input>
                          <p
                            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                            id="file_input_help"
                          >
                            PNG, JPG or JPEG (MAX 1 MB)
                          </p>
                        </div>
                        <div className="relative">
                          <textarea
                            rows={3}
                            className="block rounded-md mt-6 mb-8 py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                            id="news-source"
                            placeholder="  "
                            value={newsSource}
                            onChange={({ target }) =>
                              setNewsSource(target.value)
                            }
                            required={true}
                          />
                          <label
                            className="text-white absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                            htmlFor="news-source"
                          >
                            Where Did You Hear About Cybertron ?
                          </label>
                        </div>
                      </div>
                      <p
                        className={`text-white text-xs p-1 px-2 rounded-md bg-[#f06868] border-2 border-red-600 ${visible} text-center mb-6`}
                      >
                        Please Enter All Fields
                      </p>

                      <div className="flex flex-col gap-3 items-center my-8">
                        <button
                          id="btn"
                          type="button"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          onClick={register}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            ) : (
              <main className="h-screen grid place-content-center">
                <h2>Please Log in As Participant</h2>
              </main>
            )}
          </div>
        ) : (
          <main className="h-screen grid place-content-center">
            <h2>Checking For Existing Account ...</h2>
          </main>
        )}
      </main>
    );
  }
}
