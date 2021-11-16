import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Search from './components/Search';
import Weather from './components/Weather';



const App: FC = () => {
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
 
  return (
    <div className="container " >
      <Search  title="SWetter" />
      {loading ? <h2 className="center blue-text">Loading...</h2> : weatherData && <Weather data={weatherData} />}

    </div>
  );
}

export default App;
