import React, { useState } from "react";
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import PlusBtn from "./PlusBtn";

export default function Footer() {
  const [onPage, setOnPage] = useState(true);

  const handleColor = () => {
    setOnPage(!onPage);
  };

  return (
    <FooterContainer>
      <div
        className={onPage ? "iconBox viewPage" : "iconBox"}
        onClick={handleColor}
      >
        <FiSearch />
      </div>
      <PlusBtn/>
      <div
        className={onPage ? "iconBox" : "iconBox viewPage"}
      >
        <BsFillPersonFill />
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 10%;
  font-size: 48px;
  color: #cbcbcb;
  position: fixed;
  top: 90%;
  background: white;

  .iconBox {
    flex-grow: 1;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .viewPage {
    color: #e47b00;
  }
`;
