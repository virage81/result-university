import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useNotFound<T>(data: T) {
	const navigate = useNavigate();
	useEffect(() => {
		if (!data) navigate('/not-found');
	}, [data]);
}
