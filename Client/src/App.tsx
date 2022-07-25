import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import Home from './containers/Home';
import { Counter, FetchData } from './features';
import { NavLayout } from './layouts';

import './custom.css';

const App: React.FC = () => {
	const location = useLocation();

	return (
		<Routes key={location.pathname} location={location}>
			<Route element={<NavLayout />}>
				<Route index element={<Home />} />
				<Route path='/counter' element={<Counter />} />
				<Route path='/fetch-data' element={<FetchData />} />
			</Route>
		</Routes>
	);
};

export default App;
