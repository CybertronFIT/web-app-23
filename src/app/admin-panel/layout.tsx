"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isallowed, setIsallowed] = useState(false);

  useEffect(() => {
    const checkRegistration = async () => {
      try {
        const result = await axios("/api/auth/verify");
        if (result.status === 200) {
          const payload = result.data.payload;
          if (!payload.id.startsWith("MEM#")) {
            // TODO: Toast that you are not allowed !
            router.push("/auth/admin/login");
            return;
          }

          setIsallowed(true);
        } else {
          router.push("/auth/admin/login");
        }
      } catch (error) {
        const e = error as AxiosError;
        console.error("Recieved Error: ", e);
        router.push("/auth/admin/login");
      }
    };

    checkRegistration();
  }, [router]);

  if (!isallowed) {
    return (
      <main className="min-h-screen grid place-content-center">
        <h2 className="text-xl">Checking Authentication ...</h2>
      </main>
    );
  }

  return (
    <main className="min-h-screen grid place-content-center">{children}</main>
  );
}
