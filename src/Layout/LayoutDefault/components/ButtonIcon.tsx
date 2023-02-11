import { Button } from '../../../components/atoms/Button';

export const ButtonIcon = ({ children, onClick, selected }: { children: any; onClick: any; selected: boolean }) => {
	return (
		<Button
			variant='ghost'
			className={`p-1 w-4/5 hover:border-b-2 hover:border-black flex gap-2 items-center justify-center ${selected ? 'border-b-2 border-b-white border-t border-t-black' : ' border-gray-600'}`}
			onClick={onClick}
		>
			{children}
		</Button>
	);
};
