import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Logout } from '../../components/icons/Logout';
import { NewForm } from '../../components/icons/NewForm';
import { IcSettings } from '../../components/icons/Settings';
import { ButtonIcon } from './components/ButtonIcon';

export const Sidebar = () => {
	type menus = 'search' | 'settings' | 'logout';
	const fullPath = window.location.pathname?.replace('/', '') as menus;
	const navigate = useNavigate();
	const [menuSelected, setMenuSelected] = useState<menus>(fullPath);

	useEffect(() => {
		setMenuSelected(fullPath);
	}, []);

	const logout = () => {
		localStorage.removeItem('token');
		navigate('/');
	};

	const changeMenu = (menu: menus) => {
		setMenuSelected(menu);
		navigate(`/${menu}`);
	};

	return (
		<div className='h-full w-16 bg-secondary flex justify-center items-center flex-col gap-4 px-2 text-white'>
			<ButtonIcon
				onClick={() => changeMenu('search')}
				selected={menuSelected === 'search'}
			>
				<NewForm
					width='20'
					height='28'
				/>
			</ButtonIcon>
			<ButtonIcon
				onClick={() => changeMenu('settings')}
				selected={menuSelected === 'settings'}
			>
				<IcSettings />
			</ButtonIcon>
			<ButtonIcon
				onClick={logout}
				selected={false}
			>
				<Logout stroke='white' />
			</ButtonIcon>
		</div>
	);
};
