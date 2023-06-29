import React from 'react';

const LayoutAuth = ({ children, title, description }) => {
	return (
		<>
			<main className='min-h-screen lg:min-w-[1320px] flex items-center justify-center overflow-x-scroll'>
				{children}
			</main>
		</>
	);
};

export default LayoutAuth;
