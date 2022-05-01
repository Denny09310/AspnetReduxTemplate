import React, { PropsWithChildren } from 'react';
import { Route, Routes } from 'react-router';
import { NavMenu } from '.';

interface LayoutProps {
    navLayout?: React.ReactNode;
    fullScreenLayout?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ navLayout, fullScreenLayout }) => {
    return (
        <Routes>
            <Route element={<NavMenu />}>{navLayout}</Route>
            {fullScreenLayout}
        </Routes>
    );
};

export default Layout;
