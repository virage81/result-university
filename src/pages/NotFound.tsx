import { Button } from '@/components/common';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
	const navigate = useNavigate();

	return (
		<section className='flex flex-col items-center justify-center gap-8 grow'>
			<h3>Page you are looking for does not exists</h3>

			<Button onClick={() => navigate(-1)}>Go back</Button>
		</section>
	);
};
