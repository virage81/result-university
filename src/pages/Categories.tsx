import { PageLoading } from '@/components';
import { CategoryListItem } from '@/components/category';
import { AsideFilter } from '@/components/category/AsideFilter';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export const Categories = () => {
	const { slug } = useParams();

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
		<section className='grid w-full grid-cols-5 gap-10 grow'>
			<div className='flex flex-col col-span-4 gap-2 grow'>
				{data.map((item, i) => {
					if (data.length - 5 === i + 1) {
						return <CategoryListItem key={item.id} ref={lastNodeRef} data={item} slug={slug!} />;
					}
					return <CategoryListItem key={item.id} data={item} slug={slug!} />;
				})}

				{loading && <PageLoading />}

				{error && <p className='text-xl text-center text-red-500'>{error}</p>}
			</div>
			<AsideFilter />
		</section>
	);
};
