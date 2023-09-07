import React from "react";
import styled from "styled-components";

const BackgroundImage = () => {
  return (
    <BackgroundContainer>
      <img
        src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
        alt="no internet"
      />
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100 vw;
  img {
    height: 100vh;
    width: 100 vw;
  }
`;

export default BackgroundImage;
