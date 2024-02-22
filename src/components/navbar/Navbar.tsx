import { Suspense } from "react";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import NavbarClient from "./NavbarClient";
import { fetchUserData } from "@/server/fetch-data";
import { TOKEN_NAME, JWT_SECRET } from "@/components/constants/cookie";

const Navbar = async () => {
  let isRegistered = false;
  let name = "NAN";
  let isAdmin = false;
  const cookieStore = cookies();
  const access_token = cookieStore.has(TOKEN_NAME);
  const token = cookieStore.get(TOKEN_NAME);

  if (access_token && token) {
    const { value } = token;
    try {
      const payload = verify(value, JWT_SECRET);

      // Set the flag as Logged In
      isRegistered = true;

      // Get the name of the user
      if (typeof payload === "string") return;

      const route = payload.id.startsWith("PRC#")
        ? "/participants/"
        : "/members/";
      isAdmin = !payload.id.startsWith("PRC#");
      const apiURL =
        process.env.BACKEND_URL + route + encodeURIComponent(payload.id);

      const [result, success] = await fetchUserData(apiURL);
      if (success) {
        name = result.results[0].name;
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <header className="fixed w-full top-0 inset-x-0 h-fit z-30 p-4 md:px-32">
      <div className="px-5 py-4 md:px-10 md:py-5 2xl:py-8 bg-white/10 backdrop-blur-lg h-full max-w-7xl rounded-2xl mx-auto flex items-center justify-between">
        <Suspense>
          <NavbarClient
            isRegistered={isRegistered}
            isAdmin={isAdmin}
            avatar={name}
          />
        </Suspense>
      </div>
    </header>
  );
};

export default Navbar;
