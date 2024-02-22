import PageLoader from "@/components/loader/Page";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Registration | Cybertron",
  description: "Registration page for Cybertron",
};

const RegistrLayout = async ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
};

export default RegistrLayout;
