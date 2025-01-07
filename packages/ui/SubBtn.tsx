import { React } from "react";
import { color } from "@entry/design-token";
import styled from "@emotion/styled";
import { Plus } from "./assets";

type ButtonType = {
  userType?: "admin" | "user";
  children?: string;
  isText?: boolean;
  onClick?: () => void;
};

export const SubBtn = ({ userType, children, onClick, isText }: ButtonType) => {
  return (
    <ButtonContainer type="button" userType={userType} onClick={onClick}>
      {isText ? children : <Plus color="#ffffff" size={13} />}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<Pick<ButtonType, "userType">>`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.extra.white};
  font-size: 14px;
  font-weight: 600;
  background-color: ${({ userType }) =>
    userType == "admin" ? color.green[500] : color.orange[500]};
  border-radius: 10px;
`;
