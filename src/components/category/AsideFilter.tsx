import { useEffect, useMemo, type ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

export const AsideFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const createdOrder = useMemo(() => searchParams.get('created'), [searchParams]);

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSearchParams({ created: e.target.value });
	};

	useEffect(() => {
		if (!createdOrder) setSearchParams({ created: 'asc' });
	}, [createdOrder, setSearchParams]);

	return (
		<aside className='sticky top-[calc(var(--height-header)+20px)] border-2 border-indigo-500 py-2 px-5 bg-white rounded-xl h-fit col-span-1 text-right'>
			<h6 className='font-bold'>Sort</h6>
			<div className='flex flex-col gap-2'>
				<label htmlFor='order'>Creation date</label>
				<select
					value={createdOrder ?? 'asc'}
					onChange={handleChange}
					name='order'
					id='order'
					className='px-3 py-1 border border-indigo-500 rounded-sm'>
					<option value='asc'>ASC</option>
					<option value='desc'>DESC</option>
				</select>
			</div>
		</aside>
	);
};
