import styled from "@emotion/styled";
import { color } from "@entry/design-token";
import github from "../../assets/login/github.svg";
import Modal from "react-modal";
import { apiGithubLogin } from "../../apis";

Modal.setAppElement("#root");
Modal.defaultStyles.overlay = {};
Modal.defaultStyles.content = {};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const LoginModal = ({ isOpen, onClose }: ModalProps) => {
  const gitLogin = apiGithubLogin();

  const loginClick = async () => { 
    gitLogin.mutate();
  };
  return (
    <Modal style={ModalStyle} isOpen={isOpen} onRequestClose={onClose}>
      <TitleContainer>로그인</TitleContainer>
      <GithubButton onClick={loginClick}>
        <img src={github} />
        github로 로그인하기
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
    height: "270px",
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

  &:hover {
    cursor: pointer;
  }
`;
