import { React, useState } from "react";
import { color } from "@entry/design-token";
import styled from "@emotion/styled";
import { useOutletContext, useNavigate, useParams } from "react-router-dom";
import { UserType, ApplyConditions } from "@entry/types";
import { Button } from "@entry/ui";
import { ImgStore } from "../components/common";
import { ApplyCond } from "../components/mainCarrer";
import Pizza from "../assets/mainCarrers/Pizza.svg"; // 예시 이미지

export const DetailPost = () => {
  const { userType } = useOutletContext<{ userType: UserType }>();
  const navigate = useNavigate();
  const { id } = useParams();

  //해당 id에 대한 채용 공고 데이터 api 가져오기

  // 지원서 조건 api
  const [applyData, setApplyData] = useState<ApplyConditions>({
    title: "합류하게 될 전공을 알려드려요.",
    content: "피자 배달부는 프로그램의 백엔드를 담당하게 돼요.",
  });
  const { title, content } = applyData;

  // 지원자 보기 버튼 클릭 -> 지원자 목록 이동
  const moveToApplicants = () => {
    console.log("let go moveToApplicants");
    navigate("/job-status");
  };

  // 지원하기 경로
  const moveToSupport = () => {
    navigate("/application-writing");
  };

  return (
    <DetailPostContainer>
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
      {/* 상세조회 */}
      <DetailContentContainer>
        <PostTitleContainer>
          <ListItemContent>피자 배달부 모집 ( 비정규직 )</ListItemContent>
          <ImportantList>
            <Focus>집중채용</Focus>
            <Important>중요</Important>
            {userType === "admin" ? (
              <FixToolsContainer>
                <Delete>삭제</Delete>
                <Edit>수정</Edit>
              </FixToolsContainer>
            ) : null}
          </ImportantList>
        </PostTitleContainer>
        <TechStack>
          <TechTag>개발</TechTag>
          <TechTag>Go언어</TechTag>
          <TechTag>프론트엔드</TechTag>
        </TechStack>
      </DetailContentContainer>
      <ClubInformation>
        {/* 지원서 조건들 get */}
        <LeftContainer>
          <ApplyCond title={title} content={content} />
          <ApplyCond title={title} content={content} />
        </LeftContainer>
        {/* 타이틀 이미지, 지원자 보기(이동) */}
        <RightContainer>
          <TitleImg src={Pizza}></TitleImg>
          {userType === "admin" ? (
            <ButtonWrapper>
              <Button
                userType="admin"
                children="지원자 보기"
                onClick={moveToApplicants}
              />
            </ButtonWrapper>
          ) : (
            <ButtonWrapper>
              <Button
                userType="user"
                children="지원하기"
                onClick={moveToSupport}
              />
            </ButtonWrapper>
          )}
        </RightContainer>
      </ClubInformation>
    </DetailPostContainer>
  );
};

const ButtonWrapper = styled.div`
  width: 420px;
  min-width: 300px;
  margin-top: 3%;

  button {
    font-size: 17px;
    cursor: pointer;
    height: 60px;
  }

  button:hover {
    background-color: #38c278;
  }
`;

const TitleImg = styled.img`
  width: 420px;
  min-width: 300px;
  height: auto;
`;

const RightContainer = styled.div`
  width: 100%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
`;

const LeftContainer = styled.div`
  width: 100%;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ClubInformation = styled.div`
  margin: 0 15%;
  min-width: 1200px;
  margin-top: 65px;
  display: flex;
`;

const Edit = styled.div`
  &:hover {
    color: #2ac975;
  }
`;

const Delete = styled.div`
  &:hover {
    color: red;
  }
`;

const FixToolsContainer = styled.div`
  color: #a1a0a0;
  margin-left: 15%;
  font-size: 17px;
  display: flex;
  gap: 18px;
  cursor: pointer;
  min-width: 100px;
`;

const TechStack = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

const TechTag = styled.div`
  color: ${color.gray[400]};
  font-size: 15px;
  font-weight: 500;
`;

const Focus = styled.div`
  width: 60px;
  min-width: 60px;
  height: 22px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc9c9;
  color: #ff6666;
  border-radius: 15px;
`;

const Important = styled.div`
  width: 60px;
  min-width: 60px;
  height: 22px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9eaeff;
  color: #002fff;
  border-radius: 15px;
`;

const ImportantList = styled.div`
  display: flex;
  align-items: center;
  font-size: 11px;
  gap: 15px;
  font-weight: bold;
  margin-left: 25px;
`;

const ListItemContent = styled.div`
  font-size: 35px;
  font-weight: 500;
  color: ${color.gray[500]};
  font-weight: bold;
  min-width: 300px;
`;

const PostTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DetailContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 15%;
  display: flex;
  flex-direction: column;
  margin-top: 130px;
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

const DSM = styled.div<{ isAdmin: boolean }>`
  font-size: 30px;
  color: ${(props: any) =>
    props.isAdmin ? color.green[500] : color.orange[500]};
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

const TitleContainer = styled.div`
  position: relative;
`;

const DetailPostContainer = styled.div`
  width: 100vw;
  height: 86vh;
`;
