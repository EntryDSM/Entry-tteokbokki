import { CompleteContents } from "../components/complete";
import { React } from "react";
import styled from "@emotion/styled";

export const Submitted = () => {
  return (
    <SubmittedContainer>
      <CompleteContents isColor={true}>
        제출이 완료 되었습니다!
      </CompleteContents>
    </SubmittedContainer>
  );
};

const SubmittedContainer = styled.div`
  width: 100vw;
  height: 86vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
