/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { WeatherStore } from '~/stores';
import Home from './Home';

type Props = {
  weather: WeatherStore;
};

const HomeContainer: React.FC<Props> = ({ weather }) => {
  const [loading, setLoading] = useState(false);

  const getDataPrevision = async () => {
    setLoading(true);
    await weather.getDataPrevision();

    setLoading(false);
  };

  useEffect(() => {
    getDataPrevision();
  }, []);

  return (
    <Home
      loading={loading}
      dataPrevisionWeather={weather.dataPrevision}
      getDataPrevision={getDataPrevision}
    />
  );
};

export default inject('weather')(observer(HomeContainer));
