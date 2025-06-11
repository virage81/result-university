import { useAuthContext } from '@/contexts/auth';
import { PASSWORD_REGEXP } from '@/core/constants';
import { Button, Flex, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useLocation, useNavigate } from 'react-router-dom';

interface FormValues {
	nickname: string;
	password: string;
}

export const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { signIn } = useAuthContext();

	const form = useForm<FormValues>({
		mode: 'controlled',
		initialValues: {
			nickname: '',
			password: '',
		},
		validate: {
			password: value =>
				PASSWORD_REGEXP.test(value.trim()) ? null : (
					<>
						Password must include: <br />
						8 characters
						<br />
						1 digit
						<br />1 special character
					</>
				),
		},
	});

	const handleSubmit = (values: FormValues) => {
		const { nickname, password } = values;

		signIn({ nickname, password }, () => {
			navigate(location.state?.from ?? '/', { replace: true });
		});
	};

	return (
		<Flex component='section' flex={1} align='center' justify='center'>
			<form
				onSubmit={form.onSubmit(values => handleSubmit(values))}
				className='flex flex-col gap-2 items-center max-w-md p-5 border-2 border-indigo-500 rounded-xl'>
				<TextInput
					size='md'
					radius='md'
					w='100%'
					withAsterisk
					label='Nickname:'
					key={form.key('nickname')}
					{...form.getInputProps('nickname')}
				/>
				<PasswordInput
					size='md'
					radius='md'
					w='100%'
					withAsterisk
					label='Password:'
					key={form.key('password')}
					{...form.getInputProps('password')}
				/>
				<Button type='submit' fullWidth bg='indigo.5'>
					Sign In
				</Button>
			</form>
		</Flex>
	);
};
