import { QueryClientProvider, QueryClient } from 'react-query';
import Header from '../components/Header';
import WeatherPage from '../pages/WeatherPage';

import './styles/global.scss';

const client = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={client}>
      <Header />
      <WeatherPage />
    </QueryClientProvider>
  );
}
