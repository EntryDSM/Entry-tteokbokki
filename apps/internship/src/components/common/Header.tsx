/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { color, font } from "@entry/design-token";
import { useNavigate, useLocation } from "react-router-dom";
import { HeaderTypes } from "@entry/types";
import { useModal } from "@entry/hooks";
import { ImgStore } from "./ImgStore";
import { LoginModal } from "../modal";

type InternalButtonProps = {
  text: string;
  isAdmin: boolean;
  onClick?: () => void;
};

const styleUtils = {
  button: (isAdmin: boolean) =>
    css({
      width: "110px",
      height: "40px",
      padding: "10px 25px",
      backgroundColor: color.extra.white,
      border: `1px solid ${isAdmin === true ? color.green[500] : color.orange[500]}`,
      borderRadius: "100px",
      fontSize: font.caption1.fontSize,
      color: isAdmin === true ? color.green[500] : color.orange[500],
      cursor: "pointer",
      "&:hover": {
        backgroundColor:
          isAdmin === true ? color.green[500] : color.orange[500],
        color: color.extra.white,
      },
      userSelect: "none",
      fontWeight: "bold",
    }),

  header: (
    userType: "admin" | "user",
    isActive: boolean,
    isScroll: boolean,
  ) => ({
    container: css({
      width: "100%",
      height: "64px",
      display: "flex",
      alignItems: "center",
      padding: "0 22px",
      justifyContent: "space-between",
      position: "fixed",
      top: "0",
      zIndex: "10",
      backgroundColor: isScroll ? "rgba(255, 255, 255, 0.9)" : "none",
      transition: "background-color 0.3s ease",
    }),
    EntryColor: css({
      userSelect: "none",
    }),
    carColor: css({
      color: userType === "admin" ? color.green[500] : color.orange[500],
      userSelect: "none",
    }),
    eersColor: css({
      color: userType === "admin" ? color.green[200] : color.orange[200],
      userSelect: "none",
    }),
    jobStatu: css({
      cursor: "pointer",
      "&:hover": {
        color: color.green[500],
      },
      userSelect: "none",
    }),
    logo: css({
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginLeft: "12px",
      fontSize: font.h5.fontSize,
      color: color.gray[900],
      cursor: "pointer",
      userSelect: "none",
    }),
    logoText: css({
      display: "flex",
      userSelect: "none",
    }),
    rightContainer: css({
      display: "flex",
      marginRight: "12px",
      alignItems: "center",
      gap: "30px",
    }),
  }),
};

export const Header = ({ userType, isLogin }: HeaderTypes) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const style = styleUtils.header(userType, isActive, isScroll);
  const { isOpen, openModal, closeModal } = useModal();

  const handleJobStatusIsClick = () => {
    setIsActive(true);
  };

  const handleAuthClick = () => {
    if (isLogin) {
      // 로그아웃 처리 함수 호출
    } else {
      openModal();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div css={style.container} isScroll={isScroll}>
      <div onClick={() => navigate("/")} css={style.logo}>
        {userType === "admin" ? (
          <ImgStore name="LogoGreen" width="30px" />
        ) : (
          <ImgStore name="LogoOrange" width="30px" />
        )}
        <div css={style.logoText}>
          <div css={style.EntryColor}>Entry</div>
          <div css={style.carColor}>Car</div>
          <div css={style.eersColor}>eers</div>
        </div>
      </div>

      <div css={style.rightContainer}>
        {userType === "admin" && (
          <div css={style.jobStatu} onClick={handleJobStatusIsClick}>
            <div
              onClick={() => navigate("/job-status")}
              css={css`
                font-weight: bold;
                color: ${location.pathname === "/job-status"
                  ? color.green[500]
                  : color.gray[900]};
              `}
            >
              채용 확인
            </div>
          </div>
        )}
        <InternalButton
          text={isLogin ? "로그아웃" : "로그인"}
          isAdmin={userType === "admin"}
          onClick={handleAuthClick}
        ></InternalButton>
        {/* 로그인 모달 */}
        <LoginModal isOpen={isOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

const InternalButton = ({ text, isAdmin, onClick }: InternalButtonProps) => (
  <button css={styleUtils.button(isAdmin)} onClick={onClick}>
    {text}
  </button>
);
