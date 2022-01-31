import { CardPresentation, cities } from '../../features/weather';

import './styles.scss';

const WeatherPage = () => {
  return (
    <main>
      {cities.map((city) => (
        <CardPresentation key={city.name} city={city} />
      ))}
    </main>
  );
};

export default WeatherPage;
