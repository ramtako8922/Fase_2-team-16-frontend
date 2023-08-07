import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Logo from '../../public/logo-2.svg';
import Image from 'next/image';
// =============================Icons=====================================
import {
	RiBarChart2Line,
	RiCustomerService2Line,
	RiCalendarTodoLine,
	RiLogoutCircleRLine,
	RiArrowRightSLine,
	RiMenu3Line,
	RiCloseLine,
	RiFileUserLine
} from 'react-icons/ri';
import { SiPcgamingwiki } from 'react-icons/si';

const Sidebar = () => {
	const { roles } = useSelector((state) => state.auth);

	const result = roles[0]?.replace('ROLE_', '').toUpperCase();

	const [showMenu, setShowMenu] = useState(false);
	const [showSubmenu, setShowSubmenu] = useState(false);
	return (
		<>
			<div
				className={`  bg-blue-800 text-white h-full overflow-y-hidden fixed lg:static  xl:w-auto min-h-screen lg:h-auto top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${
					showMenu ? 'left-0' : '-left-full'
				} transition-all`}>
				<div>
					<h1 className='text-center text-xl font-bold text-white mb-10'></h1>
					<div className='w-[10rem] flex justify-center items-center mb-4'>
						<Image
							src={Logo}
							alt='logo'
							width={100}
							height={100}
						/>
					</div>
					<ul>
						<li>
							<Link
								href='/dashboard/home'
								className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary hover:shadow-lg hover:text-black transform active:scale-x-75 transition-transform '>
								<RiBarChart2Line className='text-white' />
								Dashboard
							</Link>
						</li>
						<li>
							<button
								onClick={() => setShowSubmenu(!showSubmenu)}
								className='w-full flex items-center justify-between py-2 px-4 rounded-lg  hover:bg-primary hover:shadow-lg hover:text-black transform active:scale-x-75 transition-transform '>
								<span className='flex items-center gap-4 '>
									<SiPcgamingwiki className='text-white' />
									Products
								</span>
								<RiArrowRightSLine
									className={`mt-1 ${
										showSubmenu && 'rotate-90'
									} transition-all`}
								/>
							</button>
							<ul
								className={` ${
									showSubmenu ? 'h-[160px]' : 'h-0'
								} overflow-y-hidden transition-all`}>
								<li>
									<Link
										href='/dashboard/product/add'
										className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:bg-primary hover:rounded-2xl hover:shadow-lg hover:text-black transform active:scale-x-75 transition-transform text-sm'>
										Add Products
									</Link>
								</li>
								<li>
									<Link
										href='/dashboard/product/ProductsDashboard'
										className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:bg-primary hover:rounded-2xl hover:shadow-lg hover:text-black transform active:scale-x-75 transition-transform text-sm'>
										All Products
									</Link>
								</li>
								<li>
									<Link
										href='/dashboard/product/categories'
										className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100  hover:bg-primary hover:rounded-2xl hover:shadow-lg hover:text-black transform active:scale-x-75 transition-transform text-sm'>
										Add Categories
									</Link>
								</li>

								<li>
									<Link
										href='/dashboard/product/categories'
										className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100  hover:bg-primary hover:rounded-2xl hover:shadow-lg hover:text-black transform active:scale-x-75 transition-transform text-sm'>
										Add providers
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link
								href='#'
								className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary hover:shadow-lg hover:text-black transform active:scale-x-75 transition-transform '>
								<RiCustomerService2Line className='text-white ' />
								Tickets
							</Link>
						</li>

						<li>
							<Link
								href='#'
								className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary hover:shadow-lg hover:text-black transform active:scale-x-75 transition-transform'>
								<RiFileUserLine className='text-white' /> Users
							</Link>
						</li>
						<li>
							<Link
								href='#'
								className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary hover:shadow-lg hover:text-black transform active:scale-x-75 transition-transform'>
								<RiCalendarTodoLine className='text-white' /> Calendar
							</Link>
						</li>
					</ul>
				</div>
				<nav>
					{/* <Link
						href='/'
						className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
						<RiLogoutCircleRLine className='text-white' /> Log out
					</Link> */}
				</nav>
			</div>
			<button
				onClick={() => setShowMenu(!showMenu)}
				className='xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50'>
				{showMenu ? <RiCloseLine /> : <RiMenu3Line />}
			</button>
		</>
	);
};

export default Sidebar;
