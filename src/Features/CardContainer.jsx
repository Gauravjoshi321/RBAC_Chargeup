import useData from "../hooks/useData";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const data = {
  drivers: "1-Lakh",
  earning: "₹119-Cr",
  reducedCO2: "13821-Tn",
  stations: "100",
  treesPlanted: "635239"
}

const Container = styled.div`
  background-image: linear-gradient(
      to right bottom,
      rgba(146, 244, 117, 0.35),
      rgba(117, 240, 83, 0.35)
    ),
    url("EV-project.jpeg");
  background-size: cover;
  height: calc(100vh - 80px);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 200px 100px 200px;
`;

const CardDesign = styled.div`
  min-width: 180px;
  padding: 10px;
  background-color: #bcf6cb;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Numbers = styled.div`
  font-size: xx-large;
  font-weight: 700;
  color: #066c28;
`;

const Description = styled.div`
  font-size: larger;
  color: #494a4a;
`;


export default function CardContainer() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  const { data, isLoading, error } = useData(token);

  if (error) return navigate("/login", { replace: true });
  console.log(error);

  const ans = data === undefined ? undefined : data.data.data[0];

  return (
    <Container>
      {
        data !== undefined &&
        <>
          <Card isLoading={isLoading} number={ans.drivers} description="Drivers" />
          <Card isLoading={isLoading} number={ans.earning} description="Earning" />
          <Card isLoading={isLoading} number={Number(ans.reducedCO2.split("-")[0]).toLocaleString("en-US") + " " + ans.reducedCO2.split("-")[1]} description="Reduced CO2" />
          <Card isLoading={isLoading} number={ans.stations} description="Stations" />
          <Card isLoading={isLoading} number={Number(ans.treesPlanted).toLocaleString('en-US')} description="Trees Planted" />
        </>
      }
    </Container>
  )
}


function Card({ number, description, isLoading }) {
  return (

    <CardDesign>
      {
        !isLoading && <>
          <Numbers>{number?.split("-").join(" ")}</Numbers>
          <Description>{description}</Description>
        </>
      }
    </CardDesign>

  )
}