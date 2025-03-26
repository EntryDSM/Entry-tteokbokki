import { React } from "react";
import styled from "@emotion/styled";
import { useOutletContext, useNavigate } from "react-router-dom";
import { color } from "@entry/design-token";
import { UserType } from "@entry/types";
import { ImgStore } from "../components/common/ImgStore";
import { IconStore } from "@entry/ui";
import { CarrerItem } from "../components/mainCarrer";

export const Main = () => {
  const { userType } = useOutletContext<{ userType: UserType }>();

  return (
    <MainContainer>
      <TitleContainer>
        <ImgStore name="TitleImg" width="100vw" height="300px" />
        <MentContainer>
          <Top>
            <LogoImg>
              {userType === "admin" ? (
                <ImgStore name="LogoGreen" width="30px" />
              ) : (
                <ImgStore name="LogoOrange" width="30px" />
              )}
            </LogoImg>
            <TopMent>
              <There>Entry</There>
              <DSM isAdmin={userType === "admin"}>DSM</DSM>
              <There>에서</There>
            </TopMent>
          </Top>
          <BottomMent>다음과 같은 인재들을 채용합니다.</BottomMent>
        </MentContainer>
      </TitleContainer>
      <CarrersContainer>
        <CarrerTitle>채용 공고</CarrerTitle>
        <CarrerItem />
        <CarrerItem />
        <CarrerItem />
        <CarrerItem />
        <CarrerItem />
      </CarrersContainer>
      <WriteButton userType={userType} />
    </MainContainer>
  );
};

const WriteButton = ({ userType }: UserType) => {
  const navigate = useNavigate();
  if (userType !== "admin") return null;

  return (
    <WriteButtonField onClick={() => navigate("/create-support")}>
      <IconStore name="Write" width="20px" height="20px" />글 작성하기
    </WriteButtonField>
  );
};

const WriteButtonField = styled.button`
  position: fixed;
  bottom: 50px;
  right: 200px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background-color: #2ac975;
  border-radius: 100px;
  color: white;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #229a59;
  }
`;

const CarrersContainer = styled.div`
  max-width: 1200px;
  margin: 0 20%;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const CarrerTitle = styled.div`
  font-size: 16px;
  color: #5d5d5d;
  margin-bottom: 25px;
`;

const DSM = styled.div<{ isAdmin: boolean }>`
  font-size: 30px;
  color: ${(props) => (props.isAdmin ? color.green[500] : color.orange[500])};
  padding: 0 5px 0 0;
`;

const There = styled.div`
  color: white;
  font-size: 30px;
`;

const Top = styled.div`
  display: flex;
`;

const TopMent = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  margin-right: 10px;
  transform: translateY(5px);
`;

const BottomMent = styled.div`
  color: white;
  font-size: 30px;
  margin-top: 16px;
`;

const MentContainer = styled.div`
  position: absolute;
  top: 35%;
  left: 15%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

const TitleContainer = styled.div`
  position: relative;
`;

const MainContainer = styled.div`
  width: 100vw;
  height: 86vh;
`;
