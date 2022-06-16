import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components';
import Home from './containers/Home';
import { Counter, FetchData } from './features';

import './custom.css';

const App: React.FC = () => {
    return (
        <Layout
            navLayout={
                <>
                    <Route path='/' element={<Home />} />
                    <Route path='/counter' element={<Counter />} />
                    <Route path='/fetch-data' element={<FetchData />} />
                </>
            }
        />
    );
};

export default App;
