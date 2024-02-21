import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { TOKEN_NAME } from "@/components/constants/cookie";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = cookies();
  const access_token = cookieStore.has(TOKEN_NAME);
  const token = cookieStore.get(TOKEN_NAME);

  if (access_token && token) {
    redirect("/");
  }

  return <>{children}</>;
};

export default AuthLayout;
