import Image from "next/image";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { UserCircle2 } from "lucide-react";
import { redirect } from "next/navigation";
import { fetchUserData } from "@/server/fetch-data";
import { TOKEN_NAME, JWT_SECRET } from "@/components/constants/cookie";
import LogOut from "@/server/actions/logout";

const JSONToTable = ({ data }: { data: { [key: string]: any } }) => {
  const excludedKeys = ["image", "roll"];

  // Filtered keys
  const filteredKeys = Object.keys(data).filter(
    (key) => !excludedKeys.includes(key)
  );
  // Filtered values corresponding to filtered keys
  const filteredValues = filteredKeys.map((key) => data[key]);

  return (
    <div className="flex flex-col gap-4">
      {filteredKeys.map((key, index) => (
        <div key={key} className="form-group flex flex-row gap-2 justify-between items-center text-black my-2">
          <label className="uppercase text-white text-sm md:text-md" htmlFor={key}>{key}</label>
          <input
            type="text"
            id={key}
            name={key}
            value={filteredValues[index]} // Use index to access corresponding value
            disabled={true}
            className="text-white w-[60%] text-sm rounded-md p-1 font-mono"
          />
        </div>
      ))}
    </div>
  );
};

const Profile = async () => {
  const cookieStore = cookies();
  const access_token = cookieStore.has(TOKEN_NAME);
  const token = cookieStore.get(TOKEN_NAME);
  let isAdmin = false;
  let json = null;

  if (access_token && token) {
    const { value } = token;

    try {
      const payload = verify(value, JWT_SECRET);

      if (typeof payload === "string") return;

      const route = payload.id.startsWith("PRC#")
        ? "/participants/"
        : "/members/";
      isAdmin = !payload.id.startsWith("PRC#");
      const apiURL =
        process.env.BACKEND_URL + route + encodeURIComponent(payload.id);

      const [result, success] = await fetchUserData(apiURL);
      json = result.results[0];
    } catch (error) {
      console.error(error);
      redirect("/");
    }
  } else {
    redirect("/auth/login");
  }

  return (
    <main className="min-h-screen flex flex-col items-center text-center bg-gradient-to-b from-slate-700 to-black">
      <div className="md:mt-20 mt-10">
        {isAdmin ? (
          <Image
            className="rounded-full"
            src={json.image}
            alt={json.name}
            height={150}
            width={150}
          />
        ) : (
          <UserCircle2 size={150} strokeWidth={0.5} className="text-cyan-500" />
        )}
        <p
          className={`p-1 mt-8 mb-2 text-xs rounded-md text-white ${
            isAdmin ? "bg-indigo-600" : "bg-cyan-500"
          }`}
        >
          {isAdmin ? "Admin" : "Participant"}
        </p>
      </div>

      <form className="md:min-w-[30vw] md:max-w-[38vw]">
        <div className="p-2 md:p-4 text-black  rounded-lg my-14 text-md text-center border-b-4 border-cyan-600">
          <JSONToTable data={json} />
        </div>

        <div className="flex flex-row justify-between mb-12 md:mb-20 px-6 md:px-10">
          <button id="btn" type="submit" formAction={LogOut} className="">
            Log Out
          </button>

          {isAdmin ? (
            <a id="btn" className="" href="/admin/panel">
              Control Panel
            </a>
          ) : (
            <a id="btn" className="" href="/#events">
              Events
            </a>
          )}
        </div>
      </form>
    </main>
  );
};

export default Profile;
