import { Flex, GridCol, Select, Text } from '@mantine/core';
import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export const AsideFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const createdOrder = useMemo(() => searchParams.get('created') ?? 'asc', [searchParams]);

	const handleChange = (value: string | null) => {
		setSearchParams({ created: value ?? 'asc' });
	};

	useEffect(() => {
		if (!searchParams.has('created')) setSearchParams({ created: 'asc' });
	}, [searchParams, setSearchParams]);

	return (
		<GridCol
			component='aside'
			pos='sticky'
			top='calc(var(--height-header) + 20px)'
			bd='2px solid indigo.5'
			py='sm'
			px='md'
			bg='white'
			h='fit-content'
			span={1}
			ta='right'
			className='rounded-xl'>
			<Text fw={700}>Sort</Text>
			<Flex gap={2} direction='column'>
				<Select
					value={createdOrder}
					onChange={handleChange}
					label='Creation date'
					data={[
						{ value: 'asc', label: 'ASC' },
						{ value: 'desc', label: 'DESC' },
					]}
				/>
			</Flex>
		</GridCol>
	);
};
