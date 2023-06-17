import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
	const router = useRouter();
	useEffect(() => {
		//redirect to /login
		router.push('/auth/login');
	}, [router]);
	return null;
};

export default Index;
