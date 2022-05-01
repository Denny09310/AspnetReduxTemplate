import React from 'react';
import { useGetWeatherForecastsQuery } from './fetchDataApi';
import { WeatherForecast } from './fetchDataTypes';

const FetchData: React.FC = () => {
    const { data: forecasts, isLoading } = useGetWeatherForecastsQuery();

    const renderForecastsTableHeader = (
        <tr>
            <th
                scope='col'
                className='py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400'>
                Date
            </th>
            <th
                scope='col'
                className='py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400'>
                Temp. (°C)
            </th>
            <th
                scope='col'
                className='py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400'>
                Temp. (°F)
            </th>
            <th
                scope='col'
                className='py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400'>
                Summary
            </th>
        </tr>
    );

    const renderForecastTableRow = (forecast: WeatherForecast) => (
        <tr key={forecast.date} className='border-b bg-white dark:border-gray-700 dark:bg-gray-800'>
            <td className='whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 dark:text-white'>
                {forecast.date}
            </td>
            <td className='whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400'>{forecast.temperatureC}</td>
            <td className='whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400'>{forecast.temperatureF}</td>
            <td className='whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400'>{forecast.summary}</td>
        </tr>
    );

    const renderForecastsTable = () => (
        <div className='flex flex-col'>
            <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
                    <div className='overflow-hidden shadow-md sm:rounded-lg'>
                        <table className='min-w-full'>
                            <thead className='bg-gray-50 dark:bg-gray-700'>{renderForecastsTableHeader}</thead>
                            <tbody>{forecasts?.map((forecast) => renderForecastTableRow(forecast))}</tbody>
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
        <div className='container mx-auto'>
            <h1 className='mt-2 text-xl font-semibold'>Weather forecast</h1>
            <p className='mb-2'>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );
};

export default FetchData;
