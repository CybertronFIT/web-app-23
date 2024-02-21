"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { TOKEN_NAME } from "@/components/constants/cookie";

const LogOut = () => {
  cookies().delete(TOKEN_NAME);

  revalidatePath("/");
};

export default LogOut;