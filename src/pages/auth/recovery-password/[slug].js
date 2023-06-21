import { useRouter } from 'next/router';
import { useState } from 'react';
const RecoveryPass = () => {
	const router = useRouter();

	console.log(router.query);

	return (
		<>
			<div>slug</div>
		</>
	);
};

export default RecoveryPass;
