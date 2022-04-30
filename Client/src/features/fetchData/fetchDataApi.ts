import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WeatherForecast } from './fetchDataTypes';

const fetchDataApi = createApi({
    reducerPath: 'fetchData/api',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (builder) => ({
        getWeatherForecasts: builder.query<WeatherForecast[], void>({
            query: () => '/weatherForecast',
        }),
    }),
});

export const { useGetWeatherForecastsQuery } = fetchDataApi;
export default fetchDataApi;

