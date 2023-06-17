import React from 'react';

const LayoutAuth = ({ children, title, description }) => {
	return (
		<>
			<main className='min-h-screen flex items-center justify-center overflow-x-scroll'>
				{children}
			</main>
		</>
	);
};

export default LayoutAuth;
