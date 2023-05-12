import React, { useState } from "react";
import styled from "styled-components";
import NotificationModal2 from "./NotificationModal2";
import { IoFilterOutline } from "react-icons/io5";
import { Input } from "antd";
const { Search } = Input;

const SearchSectionContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  z-index: 1;
`;

const FilterIconStyle = {
  marginRight: "2rem",
  marginLeft: "1rem",
  color: "#47A5FD",
};

const SearchSection = ({
  cardPostData,
  setSearchStr,
  setCardPostData
}) => {
  const [NotifyModalOpen, setNotifyModalOpen] = useState(false);
  const ModalOpen = () => {
    setNotifyModalOpen(true);
  };

  const ModalClose = () => {
    setNotifyModalOpen(false);
  };

  const onSearch = (value) => {
    setSearchStr(value);
  }

  return (
    <SearchSectionContainer>
      {" "}
      {NotifyModalOpen ? 
        <NotificationModal2 
          cardPostData={cardPostData}
          setCardPostData={setCardPostData}
          ModalClose={ModalClose}
          /> 
        : 
        <></>
      }
      <IoFilterOutline size={30} style={FilterIconStyle} onClick={ModalOpen} />
      <Search
        placeholder="지명을 입력하세요"
        size="large"
        allowClear
        onSearch={onSearch}
        style={{
          width: 300,
        }}
      />
    </SearchSectionContainer>
  );
};

export default SearchSection;
