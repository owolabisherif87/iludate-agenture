import { redirect, error } from "@sveltejs/kit";
import axios from "axios";

export const actions = {
  default: async ({ cookies, request }) => {
    try {
      const formData = await request.formData();
      const url = "http://test-api.iludate-agentur.com";
      const email = formData.get("email");
      const password = formData.get("password");
      const rememberMe = formData.get("remeberMe");

      cookies.set("token", "jhhdjhfhsjhshdgfashuiuheur");

      throw redirect(302, "/profile");

      const res = await axios.post(`${url}/auth/login`, { email, password });

      cookies.set("token", res.data);

      throw redirect(302, "/profile");
    } catch (error) {
      return {
        message: error.response?.data?.message,
      };
    }
  },
};
