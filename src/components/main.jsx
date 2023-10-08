import { Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Chart from "./chart";

const BoxWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const BoxChart = styled(Box)({
  width: "100%",
  background: "#FFFFFF",
  boxShadow: " 2px 4px 20px 0px rgba(0, 0, 0, 0.25);",
  borderRadius: "0.375rem",
  margin: 10,
  padding: "20px 30px 0 0",
});
const BoxContainer = styled(Box)({
  display: "flex",
});
const CardBox = styled(Box)({
  width: "200px",
  background: "#FFFFFF",
  height: "130px",
  boxShadow: " 2px 4px 20px 0px rgba(0, 0, 0, 0.25);",
  borderRadius: "0.375rem",
  margin: 10,
});
const CardBoxSecond = styled(Box)({
  background: "#FFFFFF",
  height: "150px",
  boxShadow: " 2px 4px 20px 0px rgba(0, 0, 0, 0.25);",
  borderRadius: "0.375rem",
  margin: 10,
});
const ChartBox = styled(Box)({
  background: "#FFFFFF",
  height: "320px",
  boxShadow: " 2px 4px 20px 0px rgba(0, 0, 0, 0.25);",
  borderRadius: "0.375rem",
  margin: 10,
  padding: "20px 30px 0 0",
});

const Humidity = styled('img')({
    width: 60
})

const Main = ({temperatureData, humidityData}) => {
  return (
    <Container maxWidth="xl">
      <BoxWrapper>
        <BoxChart>
          <Chart data={temperatureData} dataValue={"temperature"} />
        </BoxChart>
        <Box>
          <BoxContainer>
            <CardBox>
                <Typography>Humidity</Typography>
                <Humidity />
            </CardBox>
            <CardBox></CardBox>
          </BoxContainer>
          <CardBoxSecond />
        </Box>
        <BoxChart>
          <Chart data={humidityData} dataValue={"humidity"} />
        </BoxChart>
      </BoxWrapper>
      <ChartBox>
        <Chart  data={temperatureData} dataValue={"temperature"} />
      </ChartBox>
    </Container>
  );
};

export default Main;
