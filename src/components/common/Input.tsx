import type { InputHTMLAttributes, ReactNode } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label?: ReactNode;
}

export const Input = (props: Props) => {
	const { className, label, ...rest } = props;

	return (
		<label className='flex flex-col gap-1'>
			{label}
			<input className={`border border-indigo-500 px-5 py-2 rounded-lg ${className}`} {...rest} />
		</label>
	);
};
