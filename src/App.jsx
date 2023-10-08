import { styled } from "@mui/system";
import { useState } from 'react';
import Header from "./components/header";
import Main from "./components/main";
import CssBaseline from "@mui/material/CssBaseline";
import DataFetchingComponent from './components/DataFetchingComponent';

const AppContainer = styled("div")({
  backgroundColor: "#FAFFFF", 
  minHeight: '100vh'
});

const App = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [humidityData, setHumidityData] = useState([]);

  const handleDataFetched = ({ temperatureData, humidityData }) => {
    setTemperatureData(temperatureData);
    setHumidityData(humidityData);
  };

  return (
    <AppContainer>
      <CssBaseline />
      <Header />
      <Main temperatureData={temperatureData} humidityData={humidityData}/>
      <DataFetchingComponent onDataFetched={handleDataFetched} />
    </AppContainer>
  );
}

export default App;
