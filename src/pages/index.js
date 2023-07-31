import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const index = () => {
	const router = useRouter();
	useEffect(() => {
		//redirect to /home
		router.push('/home/Index');
	}, [router]);
	return null;
};

export default index;