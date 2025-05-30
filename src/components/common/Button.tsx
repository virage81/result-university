import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {}

export const Button = ({ className, children, ...rest }: Props) => {
	return (
		<button
			className={`px-5 py-2 text-white transition-all bg-indigo-700 border-2 cursor-pointer hover:bg-indigo-500 rounded-xl ${className}`}
			{...rest}>
			{children}
		</button>
	);
};
