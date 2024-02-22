import { Suspense } from "react";
import type { Metadata } from "next";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import PageLoader from "@/components/loader/Page";
import { TOKEN_NAME, JWT_SECRET } from "@/components/constants/cookie";

export const metadata: Metadata = {
  title: "Admin | Cybertron",
  description: "Admin Panel of Cybertron FIT",
};

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = cookies();
  const access_token = cookieStore.has(TOKEN_NAME);
  const token = cookieStore.get(TOKEN_NAME);

  if (access_token && token) {
    const { value } = token;

    try {
      const payload = verify(value, JWT_SECRET);

      if (typeof payload === "string") {
        redirect("/");
      }

      if (payload.id.startsWith("PRC#")) {
        redirect("/");
      }
    } catch (error) {
      console.error(error);
      redirect("/");
    }
  } else {
    redirect("/auth/admin/login");
  }

  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
};

export default AdminLayout;
