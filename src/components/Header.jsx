import React from 'react';
import Avatar from 'react-avatar';
import { useRouter } from 'next/router';
import {
	RiNotification3Line,
	RiArrowDownSLine,
	RiSettings3Line,
	RiLogoutCircleRLine,
	RiTwitchFill,
	RiChat3Line,
} from 'react-icons/ri';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import Link from 'next/link';
import { removeToken } from '@/services/accessToken/session';

const Header = () => {
	const router = useRouter();
	const handeLogout = () => {
		removeToken();
		router.push('/auth/login');
	};
	return (
		<header className='h-[7vh] md:h-[10vh] w-full border-b border-secondary-100 p-8 flex items-center justify-end'>
			<nav className='flex items-center gap-2'>
				<Menu
					menuButton={
						<MenuButton className='relative  hover:bg-secondary-100 p-2 rounded-lg transition-colors'>
							<RiNotification3Line />
							<span className='absolute -top-0.5 right-0 bg-primary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold'>
								300
							</span>
						</MenuButton>
					}
					align='end'
					arrow
					transition
					arrowClassName='bg-secondary-100'
					menuClassName='bg-secondary-100 p-4'>
					<h1 className='text-gray-300 text-center font-medium'>
						Notificaciones (300)
					</h1>
					<hr className='my-6 border-gray-500' />
					<MenuItem className='p-0 hover:bg-transparent'>
						<Link
							href='/'
							className='text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg'>
							<Avatar
								githubHandle='sirandresitog'
								size={50}
								round='30px'
							/>
							<div className='text-sm flex flex-col'>
								<div className='flex items-center justify-between gap-4'>
									<span>Andres Valencia</span>
									<span className='text-[8px]'>01/05/2023</span>
								</div>
								<p className='text-gray-500 text-xs'>Project Team 18</p>
							</div>
						</Link>
					</MenuItem>
					<MenuItem className='p-0 hover:bg-transparent'>
						<Link
							href='/'
							className='text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg'>
							<RiTwitchFill className='p-2 bg-blue-200 text-blue-700 box-content rounded-full' />
							<div className='text-sm flex flex-col'>
								<div className='flex items-center justify-between gap-4'>
									<span>New message</span>
									<span className='text-[8px]'>01/05/2023</span>
								</div>
								<p className='text-gray-500 text-xs'>
									Trycatch mentioned you...
								</p>
							</div>
						</Link>
					</MenuItem>
					<MenuItem className='p-0 hover:bg-transparent'>
						<Link
							href='/'
							className='text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg'>
							<RiChat3Line className='p-2 bg-yellow-200 text-yellow-700 box-content rounded-full' />
							<div className='text-sm flex flex-col'>
								<div className='flex items-center justify-between gap-4'>
									<span>New Comentary</span>
									<span className='text-[8px]'>01/05/2023</span>
								</div>
								<p className='text-gray-500 text-xs'>
									Trycatch comented you...
								</p>
							</div>
						</Link>
					</MenuItem>
					<hr className='my-6 border-gray-500' />
					<MenuItem className='p-0 hover:bg-transparent flex justify-center cursor-default'>
						<Link
							href='/'
							className='text-gray-700 text-sm hover:text-blue-950 transition-colors'>
							All Notifications
						</Link>
					</MenuItem>
				</Menu>
				<Menu
					menuButton={
						<MenuButton className='flex items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors'>
							<Avatar
								githubHandle='sirandresitog'
								size={50}
								round='30px'
							/>
							<span>sirandresitog</span>
							<RiArrowDownSLine />
						</MenuButton>
					}
					align='end'
					arrow
					arrowClassName='bg-secondary-100'
					transition
					menuClassName='bg-secondary-100 p-4'>
					<MenuItem className='p-0 hover:bg-transparent'>
						<Link
							href='/perfil'
							className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'>
							<Avatar
								githubHandle='sirandresitog'
								size={30}
								round='30px'
							/>
							<div className='flex flex-col text-sm'>
								<span className='text-sm'>AndreX</span>
								<span className='text-xs text-gray-500'>
									sirandresitog@gmail.com
								</span>
							</div>
						</Link>
					</MenuItem>
					<hr className='my-4 border-gray-500' />
					<MenuItem className='p-0 hover:bg-transparent'>
						<Link
							href='/configuracion'
							className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'>
							<RiSettings3Line /> Configuration
						</Link>
					</MenuItem>
					<MenuItem className='p-0 hover:bg-transparent'>
						<button
							onClick={handeLogout}
							className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'>
							<RiLogoutCircleRLine /> Log out
						</button>
					</MenuItem>
				</Menu>
			</nav>
		</header>
	);
};

export default Header;
