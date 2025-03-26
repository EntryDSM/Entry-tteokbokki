import styled from "@emotion/styled";
import { Button } from "@entry/ui";
import { useOutletContext, useNavigate } from "react-router-dom";
import { UserType } from "@entry/types";
import Profil from "../../assets/profil.svg";

type UserInfo = {
  username: string;
  job: string;
};

export const ApplicantList = ({ username, job }: UserInfo) => {
  const navigate = useNavigate();
  const { userType } = useOutletContext<{ userType: UserType }>();

  return (
    <ApplicantListContainer>
      <ProfilContainer>
        <ProfilImg src={Profil} />
        <UserInformation>
          <UserNameContainer>{username}</UserNameContainer>
          <UserJobContainer>{job}</UserJobContainer>
        </UserInformation>
      </ProfilContainer>
      <CheckButtonWrapper>
        <Button
          userType={userType}
          children="확인하기"
          onClick={() => navigate("/support/:id")}
        />
      </CheckButtonWrapper>
    </ApplicantListContainer>
  );
};

const UserJobContainer = styled.div`
  font-size: 13px;
  color: #a1a0a0;
`;

const UserNameContainer = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const CheckButtonWrapper = styled.div`
  button {
    width: 120px;
    height: 39px;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #38c278;
  }
`;

const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  justify-content: space-around;
`;

const ProfilImg = styled.img``;

const ProfilContainer = styled.div`
  display: flex;
  width: 120px;
`;

const ApplicantListContainer = styled.div`
  width: 80%;
  height: 65px;
  border-bottom: 1px solid #a1a0a0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1% 10px 1%;
`;
