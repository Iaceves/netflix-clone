import React from "react";
import styled from "styled-components";

const BackgroundImage = () => {
  return (
    <BackgroundContainer>
      <img
        src="https://scope.scholastic.com/content/dam/classroom-magazines/scope/issues/2021-22/120121/the-age-of-superheroes/SCO-04-120121-P24-PTSuperheroes-HR.jpg"
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
