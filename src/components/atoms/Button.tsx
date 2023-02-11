import { ButtonHTMLAttributes } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline' | 'outline-secondary' | 'ghost' | 'ghost-secondary' | 'custom';
}

export const Button = ({ children, variant = 'primary', className, ...rest }: IButton) => {
	const handlerVariant = {
		primary: 'bg-primary hover:bg-primary text-white',
		secondary: 'bg-secondary hover:bg-secondary',
		outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
		'outline-secondary': 'border border-secondary text-secondary hover:bg-secondary hover:text-white',
		ghost: 'text-primary hover:bg-primary hover:text-white',
		'ghost-secondary': 'text-secondary hover:bg-secondary hover:text-white',
		custom: '',
	};

	return (
		<button
			className={`w-2/3 h-10 brightness-100 hover:brightness-90 hover:shadow-lg transition-all ease-in-out duration-300 rounded-lg ${handlerVariant[variant]} ${className} ${
				rest.disabled ? 'opacity-50 cursor-not-allowed bg-gray-300' : ''
			}`}
			{...rest}
		>
			{children}
		</button>
	);
};
