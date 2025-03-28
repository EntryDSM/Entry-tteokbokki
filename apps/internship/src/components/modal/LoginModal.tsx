import styled from "@emotion/styled";
import { color } from "@entry/design-token";
import { githubIcon, googleIcon } from "../../assets/login";
import Modal from "react-modal";
import { githubLogin } from "../../apis/githubAuth";

Modal.setAppElement("#root");
Modal.defaultStyles.overlay = {};
Modal.defaultStyles.content = {};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const LoginModal = ({ isOpen, onClose }: ModalProps) => {
  const handleGithubLogin = async () => {
    try {
      const loginUrl: string = await githubLogin();
      window.location.href = loginUrl;
    } catch (error) {
      console.error("github 로그인 오류 : ", error);
    }
  };

  return (
    <Modal style={ModalStyle} isOpen={isOpen} onRequestClose={onClose}>
      <TitleContainer>로그인</TitleContainer>

      {/* 구글 로그인 버튼 */}
      <GoogleButtonWrapper>
        <GoogleButtonDisplay>
          <img src={googleIcon} />
          Google로 로그인하기
        </GoogleButtonDisplay>
      </GoogleButtonWrapper>

      {/* GitHub 로그인 버튼 */}
      <GithubButton onClick={handleGithubLogin}>
        <img src={githubIcon} />
        Github로 로그인하기
      </GithubButton>
    </Modal>
  );
};

const TitleContainer = styled.div`
  text-align: center;
  font-size: 30px;
  margin-top: 40px;
  font-weight: 600;
`;

const ModalStyle: ReactModal.Styles = {
  overlay: {
    backgroundColor: `rgba(0,0,0,0.6)`,
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    position: "absolute",
    width: "35%",
    minWidth: "380px",
    height: "350px",
    opacity: "1",
    zIndex: "9999",
    backgroundColor: "#ffffff",
    border: "none",
    borderRadius: "10px",
    outline: "none",
    display: "flex",
    flexDirection: "column",
    padding: "30px 90px",
  },
};

const GoogleButtonWrapper = styled.div`
  width: 100%;
  height: 55px;
  position: relative;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;

const GoogleButtonDisplay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: ${color.extra.black};
  background-color: white;
  border: 1px solid #d1d1d1;
  border-radius: 10px;

  img {
    margin-right: 10px;
  }
`;

const GithubButton = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.extra.white};
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
  background-color: #1b1f23;
  margin-top: 30px;
  text-align: center;
  cursor: pointer;

  img {
    margin-right: 10px;
  }
`;
