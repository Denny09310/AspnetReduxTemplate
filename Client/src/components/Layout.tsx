import React, { PropsWithChildren } from 'react';
import { NavMenu } from '.';

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div>
            <NavMenu />
            <div className='container mx-auto'>{children}</div>
        </div>
    );
};

export default Layout;
