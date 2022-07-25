import { createApi } from '@reduxjs/toolkit/query/react';
import { getFetchBaseQuery } from '@/utils/apiUrlUtils';
import { WeatherForecast } from './fetchDataTypes';

const fetchDataApi = createApi({
	reducerPath: 'fetchData/api',
	baseQuery: getFetchBaseQuery({ baseUrl: 'api' }),
	endpoints: (builder) => ({
		getWeatherForecasts: builder.query<WeatherForecast[], void>({
			query: () => '/weatherForecasts',
		}),
	}),
});

export const { useGetWeatherForecastsQuery } = fetchDataApi;
export default fetchDataApi;
