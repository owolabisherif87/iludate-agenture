import { redirect } from "@sveltejs/kit";

export const load = ({ cookies }) => {
  console.log(cookies.get("token"));
  if (!cookies.get("token")) {
    throw redirect(302, "/login");
  }
};
