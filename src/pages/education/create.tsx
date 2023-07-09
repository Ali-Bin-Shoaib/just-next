import { GetStaticProps } from 'next';
import SuperJSON from 'superjson';
import prisma from '../../../lib/prisma';
import { useState, useEffect } from 'react';
import { usePageTitle } from '../../../hooks/usePageTitle';
import { _Attendance, _Orphan, _OrphanAttendance } from '../../../types';
import { Loader } from '@mantine/core';
import AppHead from '../../../components/common/AppHead';
import { Orphan } from '@prisma/client';
import EducationForm from '../../../components/education/EducationForm';
export const getStaticProps: GetStaticProps = async () => {
	const orphans = await prisma.orphan.findMany();
	orphans.sort(function (a, b) {
		return a.id > b.id ? 1 : -1;
	});
	const stringData = SuperJSON.stringify(orphans);
	return { props: { stringData } };
};

interface Props {
	stringData: string;
}

function Create({ stringData }: Props) {
	const jsonData: Orphan[] = SuperJSON.parse(stringData);
	const orphans = jsonData;

	const [hydration, setHydration] = useState(false);
	const title = usePageTitle();
	useEffect(() => {
		setHydration(true);
	}, [hydration, stringData]);

	if (!hydration || !jsonData) return <Loader size={100} />;

	return (
		<>
			<AppHead title={title} />
			<EducationForm orphans={orphans} />
		</>
	);
}
export default Create;
