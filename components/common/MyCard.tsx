import { Card, MantineColor } from '@mantine/core';
import { useRouter } from 'next/router';
import React from 'react';
import { serverLink } from '../../shared/links';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

interface Props {
	title: string | 'title';
	count: number | 55;
	color: MantineColor;
	icon: JSX.Element;
	className?: string | 'text-3xl text-white mr-4'; // optional prop
	path: Url;
}

export default function MyCard({ title, count, color, icon, className, path }: Props) {
	console.log('🚀 ~ file: MyCard.tsx:18 ~ MyCard ~ path:', path);
	return (
		<Link href={path} className='no-underline'>
			<Card
				className='hover:-translate-y-1 hover:shadow-md hover:cursor-pointer'
				m={25}
				shadow='md'
				radius='lg'
				w={350}
				h={250}
				bg={color}
				style={{
					display: 'flex',
					alignItems: 'center',
					transform: 'translateY(0)',
					transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
				}}>
				{React.cloneElement(icon, { className })}
				<div>
					<div className='text-white font-semibold text-3xl mx-5'>{title}</div>
					<div className='text-white font-bold text-4xl mx-5'>{count}</div>
				</div>
			</Card>
		</Link>
	);
}
