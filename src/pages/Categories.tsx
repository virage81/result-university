import { PageLoading } from '@/components';
import { CategoryListItem } from '@/components/category';
import { AsideFilter } from '@/components/category/AsideFilter';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import { Grid, GridCol, Text } from '@mantine/core';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export const Categories = () => {
	const { slug = '' } = useParams();

	const [searchParams] = useSearchParams();

	const [page, setPage] = useState(1);

	const order = useMemo(() => searchParams.get('created') ?? 'asc', [searchParams]);
	const observer = useRef<IntersectionObserver | null>(null);

	const { data, loading, error } = useSearchQuery({ query: slug ?? '', page, order });

	const lastNodeRef = useCallback(
		(node: HTMLDivElement) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver(entries => {
				if (entries[0].isIntersecting) setPage(prev => prev + 1);
			});

			if (node) observer.current.observe(node);
		},
		[loading]
	);

	useEffect(() => {
		setPage(1);
	}, [slug]);

	return (
		<Grid component='section' columns={5} justify='center' gutter='xl' flex={1} className='w-full'>
			<GridCol span={4} className='flex flex-col grow gap-2'>
				{data.map((item, i) => {
					if (data.length - 5 === i + 1) {
						return <CategoryListItem key={item.id} ref={lastNodeRef} data={item} slug={slug} />;
					}
					return <CategoryListItem key={item.id} data={item} slug={slug} />;
				})}

				{loading && <PageLoading />}

				{error && (
					<Text fz={{ base: 'lg', sm: 'xl' }} ta='center' c='red.5'>
						{error}
					</Text>
				)}
			</GridCol>
			<AsideFilter />
		</Grid>
	);
};
