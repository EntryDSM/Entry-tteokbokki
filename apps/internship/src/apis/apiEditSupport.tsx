import { useMutation } from "@tanstack/react-query";
import { instance } from "./instance";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

interface EditSupport {
  title: string;
  keyWord: string[];
  titleImageUrl: string;
  description: [{ title: string; content: string }];
  isFocusRecruit: boolean;
  isImportant: boolean;
}

export const apiEditSupport = () => {
  const navigate = useNavigate();
  const { noticeId } = useParams();

  return useMutation({
    mutationFn: async (editData: EditSupport) =>
      await instance.patch(`/notice/${noticeId}`, editData),
    onSuccess: () => {
      navigate("/edited");
    },
    onError: () => {
      alert("수정이 되지 않았습니다.");
    },
  });
};
