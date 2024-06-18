import styled from "styled-components"

const FooterContainer = styled.div`
  min-height: 600px;
  background-color: #0a1e2f;
`;

const FooterBackground = styled.div`
  background-image: linear-gradient(
      to right bottom,
      rgba(5, 18, 35, 0.874),
      rgba(6, 24, 44, 0.9)
    ),
    url("EV-footer.jpeg");
  height: 600px;
  background-size: cover;
  background-position: top;
  display: flex;
  align-items: center;
`

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  min-height: 500px;
  width: 100%;
  margin: 200px 150px;
`;

const Grid = styled.div`
  color: #e0e0e0;
  font-size: large;
  font-weight: 500;

  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Image = styled.img`
  height: 60px;
  width: 60px;
`;

const Detail = styled.div`
  font-size: 16px;
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 2px;
`;

const Media = styled.a`
`;

const Img = styled.img`
  height: 24px;
  width: 24px;
  background-color: #e8e8e8;
  border-radius: 50%;
  padding: 4px;
`;

const Heading = styled.h3`
  font-size: larger;
`


export default function Footer() {
  return (
    <FooterContainer>
      <FooterBackground>
        <FooterGrid>
          <Grid>
            <Image src="https://echargeup.com/wp-content/uploads/2023/01/favicon-1.webp" />
            <Detail>18001230181</Detail>
            <Detail>info@echargeup.com</Detail>
            <Detail>300/3, 1st Floor, MG Road, Sultanpur, New Delhi-110030</Detail>
            <SocialMedia>
              <Media href="https://www.facebook.com/echargeup/">
                <Img src="/FB.png" alt="facebook" />
              </Media>
              <Media href="https://www.linkedin.com/company/chargeup-solutions-pvt-ltd/">
                <Img src="/LINKEDIN.png" alt="linkedin" />
              </Media>
              <Media href="https://www.instagram.com/e_chargeup/">
                <Img src="INSTA.png" alt="instagram" />
              </Media>
              <Media href="https://www.youtube.com/channel/UCCSxPy0TYszJseg2j-a7m0g">
                <Img src="YOUTUBE.png" alt="youtube" />
              </Media>
            </SocialMedia>
          </Grid>

          <Grid>
            <Heading>Useful Links</Heading>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "16px" }}>
              <Detail href="#">- Home</Detail>
              <Detail href="#">- About</Detail>
              <Detail href="#">- Contact</Detail>
            </div>
          </Grid>
        </FooterGrid>
      </FooterBackground>
    </FooterContainer>
  )
}