import React from 'react';
import { useGetWeatherForecastsQuery } from './fetchDataApi';
import { WeatherForecast } from './fetchDataTypes';

const FetchData: React.FC = () => {
  const { data: forecasts, isLoading } = useGetWeatherForecastsQuery();

  const renderForecastsTableHeader = (
    <tr>
      <th
        scope='col'
        className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
      >
        Date
      </th>
      <th
        scope='col'
        className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
      >
        Temp. (°C)
      </th>
      <th
        scope='col'
        className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
      >
        Temp. (°F)
      </th>
      <th
        scope='col'
        className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
      >
        Summary
      </th>
    </tr>
  );

  const renderForecastTableRow = (forecast: WeatherForecast) => (
    <tr
      key={forecast.date}
      className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
    >
      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
        {forecast.date}
      </td>
      <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
        {forecast.temperatureC}
      </td>
      <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
        {forecast.temperatureF}
      </td>
      <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
        {forecast.summary}
      </td>
    </tr>
  );

  const renderForecastsTable = () => (
    <div className='flex flex-col'>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block py-2 min-w-full sm:px-6 lg:px-8'>
          <div className='overflow-hidden shadow-md sm:rounded-lg'>
            <table className='min-w-full'>
              <thead className='bg-gray-50 dark:bg-gray-700'>
                {renderForecastsTableHeader}
              </thead>
              <tbody>
                {forecasts?.map((forecast) => renderForecastTableRow(forecast))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  let contents = isLoading ? (
    <p>
      <em>Loading...</em>
    </p>
  ) : (
    renderForecastsTable()
  );

  return (
    <div>
      <h1 className="text-xl font-semibold mt-2">Weather forecast</h1>
      <p className="mb-2">This component demonstrates fetching data from the server.</p>
      {contents}
    </div>
  );
};

export default FetchData;
