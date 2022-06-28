import React from 'react';
import { Route } from 'react-router';
import { NavLayout } from '@/layouts/NavLayout';
import Home from './containers/Home';
import { Counter, FetchData } from './features';

import './custom.css';

const App: React.FC = () => {
    return (
        <NavLayout>
            <Route path='/' element={<Home />} />
            <Route path='/counter' element={<Counter />} />
            <Route path='/fetch-data' element={<FetchData />} />
        </NavLayout>
    );
};

export default App;
