import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './containers/Home';
import { Layout } from './components';
import { Counter, FetchData } from './features';

import './custom.css';

const App: React.FC = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/counter' element={<Counter />} />
                <Route path='/fetch-data' element={<FetchData />} />
            </Routes>
        </Layout>
    );
};

export default App;
