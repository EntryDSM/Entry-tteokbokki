import styled from "@emotion/styled";
import { useState } from "react";
import { ApplicantList } from "../components/mainCarrer";

type UserInfo = {
  username: string;
  job: string;
};

export const ApplicationStatus = () => {
  const [user, setUser] = useState<UserInfo>({
    username: "박지연",
    job: "Frontend",
  });
  const { username, job } = user;

  return (
    <JobStatusContainer>
      <ApplicantList username={username} job={job} />
      <ApplicantList username={username} job={job} />
      <ApplicantList username={username} job={job} />
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
