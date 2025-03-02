import styled from "@emotion/styled";
import { color } from "@entry/design-token";
import { React, useState } from "react";
import { Label, SubBtn } from "@entry/ui";
import { Check } from "./assets";

type RadioType = {
  userType?: "admin" | "user";
  isWrite?: boolean;
  placeholder?: string;
  label?: string;
  radioLabel?: string;
  radioPlaceholder?: string;
  name?: string;
  datas?: object[];
  setAddRadio?: React.Dispatch<React.SetStateAction<RadioItemType[]>>;
  addRadio?: object[];
};

type RadioItemType = {
  userType?: "admin" | "user";
  radioPlaceholder?: string;
  radioLabel?: string;
  isWrite?: boolean;
  name?: string;
  onChange?: () => void;
};

const RadioItem = ({
  radioPlaceholder,
  isWrite,
  userType = "admin",
  radioLabel,
  name,
  onChange,
}: RadioItemType) => {
  return (
    <RadioItemContainer>
      <RadioFakeContainer>
        <Radio
          type="radio"
          userType={userType}
          name={name}
          onChange={() => onChange?.(radioLabel || "")}
        />
        <ImgContainer>
          <Check />
        </ImgContainer>
      </RadioFakeContainer>
      <Label
        isWrite={isWrite}
        placeholder={radioPlaceholder}
        label={radioLabel}
        onChange={(e) => onChange?.((e.target as HTMLInputElement).value)}
      />
    </RadioItemContainer>
  );
};

export const Radios = ({
  label,
  isWrite,
  placeholder,
  radioLabel,
  userType,
  radioPlaceholder,
  name,
  setAddRadio,
  addRadio = [],
  datas = [],
}: RadioType) => {
  const addRadioClick = () => {
    setAddRadio((prevAddRadio) => [
      ...prevAddRadio,
      { radioPlaceholder, isWrite, userType, radioLabel: "", value: "" },
    ]);
  };

  const handleRadioClick = (index: number, value: string) => {
    setAddRadio((prev) =>
      prev.map((item, i) => (i === index ? { ...item, value } : item)),
    );
  };

  return (
    <RadioContainer>
      <Label label={label} isWrite={isWrite} placeholder={placeholder} />
      <ContentContainer>
        {addRadio.map((item, index) => (
          <RadioItem
            isWrite={item.isWrite}
            radioPlaceholder={item.radioPlaceholder}
            userType={item.userType}
            radioLabel={item.radioLabel}
            name={name}
            onChange={(value) => handleRadioClick(index, value)}
          />
        ))}
        {/*아래는 isWrite가 false일 때 뜨는 radio입니다.*/}
        {datas.map((data) => (
          <RadioItem
            isWrite={isWrite}
            radioPlaceholder={radioPlaceholder}
            userType={userType}
            radioLabel={data.label}
            name={name}
          />
        ))}

        {isWrite && <SubBtn userType="admin" onClick={addRadioClick} />}
      </ContentContainer>
    </RadioContainer>
  );
};
const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 46px;
  flex-wrap: wrap;
  align-items: center;
`;

const RadioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;
`;

const Radio = styled.input<Pick<RadioType, "userType">>`
  width: 25px;
  height: 25px;
  padding-left: 24px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 50%;
  appearance: none;
  box-shadow: 0 0 0 1px ${color.gray[600]};
  &:checked {
    box-shadow: 0 0 0 1.6px
      ${({ userType }) =>
        userType == "admin" ? color.green[500] : color.orange[500]};
    background-color: ${({ userType }) =>
      userType == "admin" ? color.green[500] : color.orange[500]};
  }
`;

const RadioItemContainer = styled.div`
  width: 128px;
  display: flex;
  gap: 14px;
  align-items: center;
`;

const RadioFakeContainer = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
`;

const ImgContainer = styled.div`
  position: absolute;
  top: 1.2px;
  left: 1.2px;
  pointer-events: none;
`;
