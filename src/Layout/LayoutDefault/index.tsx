import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { IHttp } from '../../helpers/HttpAdapter';
import { Sidebar } from './Sidebar';

interface LayoutContextProps {

}

const LayoutContext = createContext({} as LayoutContextProps);
export const useGlobalStore = () => useContext(LayoutContext);

export const LayoutDefault = ({ http }: { http: IHttp }) => {
	
	return (
		<LayoutContext.Provider
			value={{

			}}
		>
			<div className='w-full h-screen flex flex-row'>
				<Sidebar />
				<div className='px-4 w-full flex flex-col bg-[#F5F5F5]'>
					<div className='w-full h-[92%]'>
						<Outlet />
					</div>
				</div>
			</div>
		</LayoutContext.Provider>
	);
};
