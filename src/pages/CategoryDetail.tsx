import { useParams } from 'react-router-dom';

export const CategoryDetail = () => {
	const { slug } = useParams();

	return <h2 className='font-bold'>Name: {slug}</h2>;
};
