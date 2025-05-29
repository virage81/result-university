import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
	const navigate = useNavigate();

	return (
		<section className='flex flex-col items-center justify-center gap-8 grow'>
			<h3>Page you are looking for does not exists</h3>
			<button
				onClick={() => navigate(-1)}
				className='px-5 py-2 text-white transition-all bg-indigo-700 border-2 cursor-pointer hover:bg-indigo-500 rounded-xl'>
				Go back
			</button>
		</section>
	);
};
