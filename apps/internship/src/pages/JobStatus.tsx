import styled from "@emotion/styled";
import { useState } from "react";
import { PostList } from "../components/mainCarrer";

type PostType = {
  postName: string;
  keyword: string[];
};

export const JobStatus = () => {
  const [post, setPost] = useState<PostType>({
    postName: "피자 배달부 모집 ( 정규직 )",
    keyword: ["개발", "Go언어", "백엔드"],
  });
  const { postName, keyword } = post;

  return (
    <JobStatusContainer>
      <PostList postName={postName} keywords={keyword} />
    </JobStatusContainer>
  );
};

const JobStatusContainer = styled.div`
  width: 100vw;
  height: 86vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  padding-top: 100px;
`;
