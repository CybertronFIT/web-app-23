import { redirect } from "next/navigation";

const Admin = () => {
  redirect("/auth/admin/login");
};

export default Admin;
