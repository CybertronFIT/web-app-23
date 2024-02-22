import PageLoader from "@/components/loader/Page";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Profile | Cybertron",
  description: "Profile page of User",
};

const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
};

export default ProfileLayout;
