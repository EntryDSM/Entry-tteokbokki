import { useMutation } from "@tanstack/react-query";
import { instance } from "./instance";

export const apiGithubLogin = () => {
  return useMutation({
    mutationFn: async () => {
      const response = await instance.get("/api/github/auth");
      return response;
    },
    onSuccess: (response) => {
      const url = response.data.replace("redirect:", "");
      window.location.href = url;
    },
    onError: () => {
      console.log("error");
    },
  });
};
