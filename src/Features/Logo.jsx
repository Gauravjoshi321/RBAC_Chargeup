import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  height: 2rem;
  width: auto;
`;

function Logo() {

  return (
    <StyledLogo>
      <Img src="https://echargeup.com/wp-content/uploads/2023/01/Chargeup-logo.webp" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
