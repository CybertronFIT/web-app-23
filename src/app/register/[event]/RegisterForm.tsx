"use client";

import { useState } from "react";

const RegisterForm = (props: { id: string; name: string }) => {
  const maxSizeInBytes = 1 * 1024 * 1024; // 1MB
  const [base64String, setBase64String] = useState<string | null>(null);

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.size > maxSizeInBytes) {
        alert("Please Select Image within 1MB");
        return
      }
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

  const handleCopyBtn = () => {
    // navigator.clipboard.writeText(teamID);
    // setCopyBtn("Copied !");
  };

  const register = async () => {
    // if (!teamName || !tID || !newsSource || !base64String) {
    //   alert("Fill Every required Fields");
    // }

    // if (imageSize >= maxSizeInBytes) {
    //   alert("Please Select Image within 1MB");
    // }

    // if (json) {
    //   const payload = {
    //     teamName: teamName,
    //     eventName: eventName,
    //     paymentID: tID,
    //     screenShot: base64String,
    //     newsSource: newsSource,
    //     teamLeader: json.id,
    //     member1: member1,
    //     member2: member2,
    //     member3: member3,
    //   };

    //   const api_endpoint = API_URL + "teams";

    //   try {
    //     const response = await axios(api_endpoint, {
    //       method: "POST",
    //       data: payload,
    //       headers: custom_headers,
    //     });

    //     if (response.status === 200) {
    //       setTeamID(response.data.id);
    //       setPopupVisible(true);
    //     }
    //     // TODO: check 409 status
    //   } catch (error) {
    //     const e = error as AxiosError;
    //     if (e.response) {
    //       console.error(
    //         "Received: " + e.response.status + " " + e.response.data
    //       );
    //     }
    //   }
    // }
  };

  return (
    <section className="min-h-screen bg-[#1b1b1b36] border border-gray-900 rounded-xl">
      <h2 className="text-center my-12 text-xl md:text-2xl">{props.name}</h2>

      <form action={""} className="px-10 md:w-[60%] mx-auto">
        <div className="my-16">
          <div className="relative">
            <input
              type="text"
              className="block peer rounded-md my-8 py-2.5 px-4 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
              id="name"
              placeholder="  "
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
              value={props.name}
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
              value={props.id}
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
              className="block rounded-md my-8 py-2.5 px-4 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
              id="name1"
              placeholder="  "
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
              className="block rounded-md my-8 py-2.5 px-4 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
              id="name2"
              placeholder="  "
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
              className="block rounded-md my-8 py-2.5 px-4 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
              id="name3"
              placeholder="  "
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
              className="block rounded-md my-8 py-2.5 px-4 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
              id="transaction-id"
              placeholder="  "
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
              className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
              htmlFor="file_input"
            >
              Upload Payment Screenshot
            </label>
            <input
              className="block w-full text-sm text-gray-300 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
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
              className="block rounded-md mt-6 mb-8 py-2.5 px-4 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
              id="news-source"
              placeholder="  "
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
      </form>
    </section>
  );
};

export default RegisterForm;
