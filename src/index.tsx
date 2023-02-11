import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AxiosAdapter } from './helpers/AxiosAdapter';
import './index.scss';
import { RoutesApp } from './routes';

const http = new AxiosAdapter();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<ToastContainer />
		<RoutesApp http={http} />
	</React.StrictMode>
);
