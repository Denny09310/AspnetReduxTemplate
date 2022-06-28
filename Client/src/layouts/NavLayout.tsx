import React, { PropsWithChildren } from 'react';
import { Routes, Route } from 'react-router';
import { NavMenu } from '../components';

const NavLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Routes>
            <Route element={<NavMenu />}>{children}</Route>
        </Routes>
    );
};

export default NavLayout;
