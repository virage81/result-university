import { Button, Input } from '@/components/common';
import { useAuthContext } from '@/contexts/auth';
import type { FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { signIn } = useAuthContext();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const nickname = formData.get('nickname')?.toString() ?? '';
		const password = formData.get('password')?.toString() ?? '';

		signIn({ nickname, password }, () => {
			navigate(location.state?.from ?? '/', { replace: true });
		});
	};

	return (
		<section className='grow flex items-center justify-center'>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col gap-2 items-center max-w-md p-5 border-2 border-indigo-500 rounded-xl'>
				<Input label='Nickname:' name='nickname' type='text' autoComplete='nickname' />
				<Input label='Password:' name='password' type='password' autoComplete='current-password' />
				<Button type='submit'>Sign In</Button>
			</form>
		</section>
	);
};
