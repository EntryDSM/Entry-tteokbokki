import { CheckContents, Title, KeyWord } from "../components";
import { Inputs, Label, Button, InputTextArea, SubBtn } from "@entry/ui";
import { useRef, useState, React, useEffect } from "react";
import styled from "@emotion/styled";
import { apiEditSupport } from "../apis";

export const EditSupport = () => {
  const fileRef = useRef();
  const [keywordValue, setKeywordValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(true); //checkbox 체크 유무 관리
  const [isImportant, setIsImportant] = useState<boolean>(false);
  const [datas, setDatas] = useState<{
    title: string;
    keyword: string[];
    imgUrl: string;
    areaInput: { valueInput: string; valueArea: string }[];
    checkbox: { focused: boolean; important: boolean };
  }>({
    title: "엔트리 인턴 모집",
    keyword: ["엔트리", "인턴"],
    imgUrl: "https://entryIntern.jpg",
    areaInput: [
      {
        valueInput: "엔트리 인턴 모집1",
        valueArea: "역할 : Design, Frontend, Backend, DevOps",
      },
      {
        valueInput: "엔트리 인턴 모집2",
        valueArea: "2달 동안 진행할 예정입니다.",
      },
    ],
    checkbox: { focused: isFocused, important: isImportant },
  });

  const apiSubmit = apiEditSupport();

  const editClick = () => {
    apiSubmit.mutate({
      title: datas.title,
      keyWord: datas.keyword,
      titleImageUrl: datas.imgUrl,
      description: [
        {
          title: datas.areaInput.valueInput,
          content: datas.areaInput.valueArea,
        },
      ],
      isFocusRecruit: datas.checkbox.focused,
      isImportant: datas.checkbox.important,
    });
  };

  const imgBtnClick = () => {
    fileRef.current?.showPicker();
  };

  const handleImgChange = () => {
    const files = fileRef.current.files;

    if (files) {
      const url = URL.createObjectURL(files[0]);
      setDatas((prev) => ({
        ...prev,
        imgUrl: url,
      }));

      setDatas((prev) => ({
        ...prev,
        imgUrl: url,
      }));
    }
  };

  const areaInputAddClick = () => {
    setDatas((prev) => ({
      ...prev,
      areaInput: [...prev.areaInput, { valueInput: "", valueArea: "" }],
    }));
  };

  const handleInputChange = (index: number, value: string) => {
    setDatas((prev) => {
      const updatedAreaInput = [...prev.areaInput];
      updatedAreaInput[index] = {
        ...updatedAreaInput[index],
        valueInput: value,
      };
      return {
        ...prev,
        areaInput: updatedAreaInput,
      };
    });
  };

  const handleTextAreaChange = (index: number, value: string) => {
    setDatas((prev) => {
      const updatedAreaInput = [...prev.areaInput];
      updatedAreaInput[index] = {
        ...updatedAreaInput[index],
        valueArea: value,
      };
      return {
        ...prev,
        areaInput: updatedAreaInput,
      };
    });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setDatas((prev) => ({
      ...prev,
      title: value,
    }));
  };

  const enterKeyWord = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && keywordValue) {
      console.log("입력된 키워드: ", keywordValue);
      const value = keywordValue;
      setDatas((prev) => ({
        ...prev,
        keyword: [...prev.keyword, value],
      }));
      setKeywordValue("");
    }
  };

  useEffect(() => {
    setDatas((prev) => ({
      ...prev,
      checkbox: { focused: isFocused, important: isImportant },
    }));
  }, [isFocused, isImportant]);

  console.log(datas);

  return (
    <EditSupportContainer>
      <TitleContainer>
        <Title
          mainTitle="지원페이지 수정하기"
          subTitle="신청 페이지를 수정할 수 있어요"
        />
        <InputContainer>
          <Inputs
            label="제목"
            value={datas.title}
            onChange={handleTitleChange}
          />
          <>
            <Inputs
              label="키워드"
              onKeyUp={enterKeyWord}
              value={keywordValue}
              onChange={(e) => setKeywordValue(e.target.value)}
            />
            <KeyWordContainer>
              {datas.keyword.map((item, index) => (
                <KeyWord key={index}>{item}</KeyWord>
              ))}
            </KeyWordContainer>
          </>
          <ImgAllContainer>
            <Label label="타이틀 사진" />
            <ImgContainer>
              <ImgBtnContainer>
                <Button userType="admin" onClick={imgBtnClick} />
              </ImgBtnContainer>
              {datas.imgUrl && <KeyWord>{datas.imgUrl}</KeyWord>}
            </ImgContainer>
            <FakeInput type="file" ref={fileRef} onChange={handleImgChange} />
          </ImgAllContainer>
          <>
            {datas.areaInput.map((item, index) => (
              <InputTextArea
                label={`설명(${index + 1})`}
                inputChange={(e) => handleInputChange(index, e.target.value)}
                areaChange={(e) => handleTextAreaChange(index, e.target.value)}
                valueInput={item.valueInput}
                valueArea={item.valueArea}
              />
            ))}
            <Button userType="admin" onClick={areaInputAddClick} />
          </>
        </InputContainer>
        <CheckContainer>
          <CheckBoxContainer>
            <CheckContents
              label="집중채용"
              setIsCheck={setIsFocused}
              isCheck={isFocused}
            />
            <CheckContents
              label="중요"
              setIsCheck={setIsImportant}
              isCheck={isImportant}
            />
          </CheckBoxContainer>
          <SubBtn userType="admin" onClick={editClick}>
            수정완료
          </SubBtn>
        </CheckContainer>
      </TitleContainer>
    </EditSupportContainer>
  );
};

const EditSupportContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 180px 0;
`;

const KeyWordContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const CheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 116px;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ImgBtnContainer = styled.div`
  width: 249px;
`;

const InputContainer = styled.div`
  width: 702px;
  display: flex;
  flex-direction: column;
  gap: 63px;
`;

const ImgAllContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FakeInput = styled.input`
  display: none;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;
