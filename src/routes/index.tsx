import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LayoutDefault } from '../Layout/LayoutDefault/index';
import { IHttp } from '../helpers/HttpAdapter';

export function RoutesApp({ http }: { http: IHttp }) {
	return (
		<BrowserRouter>
			<Routes>
				<Route 
					path="/"
					element={<div>Hello World</div>}
				/>
			</Routes>
		</BrowserRouter>
	);
}
