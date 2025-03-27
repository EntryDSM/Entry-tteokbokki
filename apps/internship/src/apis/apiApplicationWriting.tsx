import { instance } from "./instance";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

interface ApplicationWriting {
  noticeId: string | number;
  applicationName: string;
  studentId: string;
  phoneNumber: string;
  programmingExperience: string;
  major: string;
  motivation: string;
  selfIntroduction: string;
}

export const apiApplicationWriting = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (applicationData: ApplicationWriting) =>
      await instance.post("/reports", applicationData),
    onSuccess: () => {
      navigate("/user/submitted");
      console.log("success");
    },
    onError: () => {
      alert("제출이 되지 않았습니다.");
    },
  });
};
