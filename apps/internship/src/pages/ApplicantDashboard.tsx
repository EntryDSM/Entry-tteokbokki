import styled from "@emotion/styled";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

type UserInfo = {
  username: string;
  job: string;
};

export const ApplicantDashboard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState<UserInfo>({
    username: "박지연",
    classNumber: "1510",
    ability: "매우잘함",
    job: "Frontend",
    motivation:
      "저는 프론트엔드 개발계의 1짱을 먹을 예정입니다. 아니, 사실 먹었다고 봐도 무방하죠. 이유요? JavaScript를 이번에 끝내버렸거든요. 네, 제가 아는 건 이제 진짜 끝판왕 레벨이라는 겁니다. 더 배울 것도 없어요! 농담이고요, 사실 배울 게 많겠죠? 하지만 저는 이미 한참 앞서가고 있으니, 저 뽑으시면 프론트엔드 최강자를 모신다는 소문이 날 겁니다.요즘 프로젝트 개발하면서 열심히 배우고 있습니다. 하루가 멀다 하고 새로운 기술을 흡수 중이에요. 제 머리는 스펀지 같은데요, 그냥 흡수만 해요. 제가 가는 곳에는 미처 따라오지 못할지도 모르지만, 걱정하지 마세요. 함께하면 엄청난 성과를 거두게 될 테니까요.저를 안 뽑으시면요, 그건 진짜... 아마 인생에서 가장 큰 후회로 남을 거에요. “아, 그때 그 사람을 뽑았어야 했는데!” 이렇게요. 그러니까 뽑으세요. 후회는 저 멀리 보내버리고, 저와 함께 빛나는 프론트엔드 미래로 나아가는 게 맞습니다. 알겠죠? 😎저는 프론트엔드 개발계의 1짱을 먹을 예정입니다. 아니, 사실 먹었다고 봐도 무방하죠. 이유요? JavaScript를 이번에 끝내버렸거든요. 네, 제가 아는 건 이제 진짜 끝판왕 레벨이라는 겁니다. 더 배울 것도 없어요! 농담이고요, 사실 배울 게 많겠죠? 하지만 저는 이미 한참 앞서가고 있으니, 저 뽑으시면 프론트엔드 최강자를 모신다는 소문이 날 겁니다.요즘 프로젝트 개발하면서 열심히 배우고 있습니다. 하루가 멀다 하고 새로운 기술을 흡수 중이에요. 제 머리는 스펀지 같은데요, 그냥 흡수만 해요. 제가 가는 곳에는 미처 따라오지 못할지도 모르지만, 걱정하지 마세요. 함께하면 엄청난 성과를 거두게 될 테니까요.저를 안 뽑으시면요, 그건 진짜... 아마 인생에서 가장 큰 후회로 남을 거에요. “아, 그때 그 사람을 뽑았어야 했는데!” 이렇게요. 그러니까 뽑으세요. 후회는 저 멀리 보내버리고, 저와 함께 빛나는 프론트엔드 미래로 나아가는 게 맞습니다. 알겠죠? 😎",
    introduce:
      "저는 프론트엔드 개발계의 1짱을 먹을 예정입니다. 아니, 사실 먹었다고 봐도 무방하죠. 이유요? JavaScript를 이번에 끝내버렸거든요. 네, 제가 아는 건 이제 진짜 끝판왕 레벨이라는 겁니다. 더 배울 것도 없어요! 농담이고요, 사실 배울 게 많겠죠? 하지만 저는 이미 한참 앞서가고 있으니, 저 뽑으시면 프론트엔드 최강자를 모신다는 소문이 날 겁니다.요즘 프로젝트 개발하면서 열심히 배우고 있습니다. 하루가 멀다 하고 새로운 기술을 흡수 중이에요. 제 머리는 스펀지 같은데요, 그냥 흡수만 해요. 제가 가는 곳에는 미처 따라오지 못할지도 모르지만, 걱정하지 마세요. 함께하면 엄청난 성과를 거두게 될 테니까요.저를 안 뽑으시면요, 그건 진짜... 아마 인생에서 가장 큰 후회로 남을 거에요. “아, 그때 그 사람을 뽑았어야 했는데!” 이렇게요. 그러니까 뽑으세요. 후회는 저 멀리 보내버리고, 저와 함께 빛나는 프론트엔드 미래로 나아가는 게 맞습니다. 알겠죠? 😎저는 프론트엔드 개발계의 1짱을 먹을 예정입니다. 아니, 사실 먹었다고 봐도 무방하죠. 이유요? JavaScript를 이번에 끝내버렸거든요. 네, 제가 아는 건 이제 진짜 끝판왕 레벨이라는 겁니다. 더 배울 것도 없어요! 농담이고요, 사실 배울 게 많겠죠? 하지만 저는 이미 한참 앞서가고 있으니, 저 뽑으시면 프론트엔드 최강자를 모신다는 소문이 날 겁니다.요즘 프로젝트 개발하면서 열심히 배우고 있습니다. 하루가 멀다 하고 새로운 기술을 흡수 중이에요. 제 머리는 스펀지 같은데요, 그냥 흡수만 해요. 제가 가는 곳에는 미처 따라오지 못할지도 모르지만, 걱정하지 마세요. 함께하면 엄청난 성과를 거두게 될 테니까요.저를 안 뽑으시면요, 그건 진짜... 아마 인생에서 가장 큰 후회로 남을 거에요. “아, 그때 그 사람을 뽑았어야 했는데!” 이렇게요. 그러니까 뽑으세요. 후회는 저 멀리 보내버리고, 저와 함께 빛나는 프론트엔드 미래로 나아가는 게 맞습니다. 알겠죠? 😎",
  });
  const { username, classNumber, ability, job, motivation, introduce } = user;

  return (
    <ApplicantDashboardAll>
      <ExitButton onClick={() => navigate(-1)}>나가기</ExitButton>
      <Dashboard>
        <HeaderPartContainer>
          <UserName>{username}</UserName>
          <ClassNumber>{classNumber}</ClassNumber>
          <UserInformation>
            <AbilityAll>{ability}</AbilityAll>
            <UserJob>{job}</UserJob>
          </UserInformation>
        </HeaderPartContainer>
        <MotivationContainer>{motivation}</MotivationContainer>
        <IntroduceContainer>{introduce}</IntroduceContainer>
      </Dashboard>
    </ApplicantDashboardAll>
  );
};

const IntroduceContainer = styled.div`
  border-bottom: 1px solid #a1a0a0;
  border-right: 1px solid #a1a0a0;
  border-left: 1px solid #a1a0a0;
  height: 400px;
  padding: 4%;
`;

const MotivationContainer = styled.div`
  border-bottom: 1px solid #a1a0a0;
  border-right: 1px solid #a1a0a0;
  border-left: 1px solid #a1a0a0;
  height: 400px;
  padding: 4%;
`;

const UserJob = styled.div`
  width: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #33d37b;
  color: #ffff;
  height: 30px;
  font-weight: bold;
  font-size: 11px;
  border-radius: 20px;
  margin-left: 10px;
`;

const AbilityAll = styled.div`
  width: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #33d37b;
  color: #33d37b;
  height: 30px;
  font-weight: bold;
  font-size: 11px;
  border-radius: 20px;
`;

const UserInformation = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2%;
`;

const ClassNumber = styled.div`
  border-right: 1px solid #a1a0a0;
  height: 100%;
  width: 18%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserName = styled.div`
  border-right: 1px solid #a1a0a0;
  height: 100%;
  width: 18%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderPartContainer = styled.div`
  height: 55px;
  margin-top: 2%;
  display: flex;
  border: 1px solid #a1a0a0;
  border-radius: 10px 10px 0 0;
`;

const ExitButton = styled.button`
  width: 110px;
  height: 30px;
  color: #a1a0a0;
  border-radius: 10px;
  margin-left: auto;
  border: 1px solid #a1a0a0;
  margin-top: 5%;
  margin-right: 10%;
  font-size: 11px;
  background-color: #ffff;

  &:hover {
    background-color: #e9e7e7;
    color: #7e7e7e;
  }
`;

const Dashboard = styled.div`
  margin: 0 10%;
`;

const ApplicantDashboardAll = styled.div`
  width: 100vw;
  height: 86vh;
  display: flex;
  flex-direction: column;
`;
