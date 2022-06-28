import store from '@/app/store';
import { createRoot } from 'react-dom/client';
import toast from 'react-hot-toast';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { registerSW } from 'virtual:pwa-register';
import App from './App';
import reportWebVitals from './reportWebVitals';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

createRoot(rootElement!).render(
    <BrowserRouter basename={baseUrl!}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
registerSW({
    onRegisterError(error) {
        toast.error(error.message);
    },
    onNeedRefresh() {
        toast('Service worker needs refresh');
    },
    onOfflineReady() {
        toast('Service worker update ready');
    },
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
