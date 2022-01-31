import { useCallback } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../../components/Loading';
import { getCityWeather } from '../../request';
import { City } from '../../types';
import CardDetail from '../CardDetail';
import CardError from '../CardError';

import './styles.scss';

type CardPresentationProps = {
  city: City;
};

export const CardPresentation = ({ city }: CardPresentationProps) => {
  const { data, isLoading, isError, refetch } = useQuery(
    `city-${city.name}`,
    () => getCityWeather(city.name),
    {
      refetchInterval: 60 * 10 * 1000,
      cacheTime: 60 * 10 * 1000,
    }
  );

  const addTemperatureStyle = (temp: number) => {
    if (temp <= 5) {
      return 'card__degrees-cold';
    } else if (temp > 25) {
      return 'card__degrees-hell';
    }
    return '';
  };

  const handleRefetch = useCallback(() => {
    refetch();
  }, [refetch]);

  const CardContent = () => (
    <>
      <div className={`card__degrees ${addTemperatureStyle(data?.temp)}`}>
        {data?.temp}°
      </div>
      <footer>
        {city.showDetail && (
          <CardDetail humidity={data?.humidity} pressure={data?.pressure} />
        )}
        <p>Updated at {new Date(data?.date).toLocaleTimeString('en-US')}</p>
      </footer>
    </>
  );

  return (
    <div
      data-cy="card"
      className={city.showDetail ? 'card card-detail' : 'card'}
    >
      <header className="card__title">
        <h1>{`${city.name}, ${city.country}`}</h1>
      </header>
      <hr className="card__divider" />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {isError && <CardError onClick={handleRefetch} />}
          {!isError && <CardContent />}
        </>
      )}
    </div>
  );
};
