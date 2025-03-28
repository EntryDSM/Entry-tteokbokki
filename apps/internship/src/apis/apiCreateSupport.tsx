import { useMutation } from "@tanstack/react-query";
import { instance } from "./instance";
import { useNavigate } from "react-router-dom";

interface CreateSupport {
  noticeId: string;
  title: string;
  keyWord: string[];
  titleImageUrl: string;
  description: [{ title: string; content: string }];
  isFocusRecruit: boolean;
  isImportant: boolean;
}

export const apiCreateSupport = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (supportData: CreateSupport) =>
      await instance.post("/notice", supportData),
    onSuccess: () => {
      navigate("/completed");
    },
    onError: () => {
      alert("모집서 제작이 되지 않았습니다.");
    },
  });
};
