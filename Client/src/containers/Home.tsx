import React from 'react';

const Home: React.FC = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='my-2 text-xl font-semibold'>Welcome to your new single-page application, built with:</h1>
            <ul>
                <li>
                    <a target={'_blank'} href='https://get.asp.net/'>
                        ASP.NET Core
                    </a>{' '}
                    and{' '}
                    <a target={'_blank'} href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>
                        C#
                    </a>{' '}
                    for cross-platform server-side code
                </li>
                <li>
                    <a target={'_blank'} href='https://facebook.github.io/react/'>
                        React
                    </a>{' '}
                    and{' '}
                    <a target={'_blank'} href='https://vitejs.dev'>
                        Vite
                    </a>{' '}
                    for client-side code
                </li>
                <li>
                    <a target={'_blank'} href='https://tailwindcss.com/'>
                        Tailwind
                    </a>{' '}
                    and{' '}
                    <a target={'_blank'} href='https://daisyui.com'>
                        Daisyui
                    </a>{' '}
                    for layout and styling
                </li>
                <li>
                    <a target={'_blank'} href='https://redux.js.org/'>
                        Redux
                    </a>{' '}
                    for manage the buisness logic
                </li>
            </ul>
            <h1 className='my-2 text-xl font-semibold'>To help you get started, we have also set up:</h1>
            <ul>
                <li>
                    <strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return
                    here.
                </li>
                <li>
                    <strong>Development server integration</strong>. In development mode, the development server from{' '}
                    <code>create-react-app</code> runs in the background automatically, so your client-side resources are
                    dynamically built on demand and the page refreshes when you modify any file.
                </li>
                <li>
                    <strong>Efficient production builds</strong>. In production mode, development-time features are disabled,
                    and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript
                    files.
                </li>
            </ul>
            <p>
                The <code>ClientApp</code> subdirectory is a standard React application based on the{' '}
                <code>create-react-app</code> template. If you open a command prompt in that directory, you can run{' '}
                <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.
            </p>
        </div>
    );
};

export default Home;
