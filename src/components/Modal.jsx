import React, { use } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

const Modal = ({ children, open, setOpen, msg }) => {
	return (
		<div
			className={`${
				open ? 'flex' : 'hidden'
			} w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-70 justify-center items-center`}>
			<div className='w-[20rem] lg:w-[30rem] h-auto bg-white sm:w-[18rem] opacity-100 rounded-lg shadow-xl p-4 '>
				<div className='flex justify-between items-center mb-2 p-2 border-b-[1px] '>
					<h3 className='font-bold'>{msg}</h3>
					<button
						className='text-black text-2xl hover:text-red-800 lg:cursor-pointer ease-in'
						onClick={() => setOpen(false)}>
						<IoMdCloseCircle />
					</button>
				</div>
				<div className='w-full'>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
