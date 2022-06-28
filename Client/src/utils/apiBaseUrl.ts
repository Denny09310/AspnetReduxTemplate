import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import pkg from '@/../package.json';

const BASE_DEV_API_URL = 'api';

// Check if the current mode is 'Development'
const isDev = process.env.NODE_ENV === 'development';

// If we're in development we discard any subfolder base because it's likely always localhost
const baseUrl = isDev && pkg.homepage !== '.' ? undefined : `${pkg.homepage}/`;

const getBaseUrl = (url: string = '') => {
	// If it's development mode we add 'api/' so the proxy can redirect the request to the backend
	// If it's release, there's no dev server' so we rely to the backend server
	const apiUrl = isDev && !url.startsWith(BASE_DEV_API_URL) ? `${BASE_DEV_API_URL}/${url}` : url;

	// If it's specified a base url (NOT '.') whe apply the base url for the subfolder
	return baseUrl ? `${baseUrl}/${apiUrl}` : apiUrl;
};

// We get a "global" fetchBaseQuery that can be modified
export const getFetchBaseQuery = (opt?: FetchBaseQueryArgs | undefined) =>
	fetchBaseQuery({ baseUrl: getBaseUrl(opt?.baseUrl), ...opt });

export const getWsBaseQuery = (baseUrl: string) =>
	getBaseUrl(`hubs/${baseUrl}`)
