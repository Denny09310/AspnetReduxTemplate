import React, { PropsWithChildren } from 'react';
import { Route } from 'react-router';
import { NavMenu } from '../components';

const NavLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return <Route element={<NavMenu />}>{children}</Route>;
};

export default NavLayout;
