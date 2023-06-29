import Avatar from 'react-avatar';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
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
import { removeToken, removeLogin_in } from '@/services/accessToken/session';
import { useDispatch } from 'react-redux';
import { logOutUser } from '@/store/slices/auth';
//TODO:refactorizar el codigo 👁️👁️ ⚠️⚠️

const Header = () => {
	const dispatch = useDispatch();
	const [logOut, setLogOut] = useState(false);
	const { id, name, lastname, email, role, username } = useSelector(
		(state) => state.auth
	);

	const router = useRouter();
	const handeLogout = () => {
		removeToken();
		removeLogin_in();
		setLogOut(true);
	};
	useEffect(() => {
		if (logOut) {
			router.push('/auth/login');
			const logout = {
				id: '',
				name: '',
				lastname: '',
				email: '',
				roles: '',
				username: '',
			};
			dispatch(logOutUser(logout));
		}
	}, [logOut, router, dispatch]);

	return (
		<header className='h-[7vh] md:h-[10vh] w-full border-b border-secondary-100 p-8 flex items-center justify-end'>
			<nav className='flex items-center gap-2'>
				<Menu
					menuButton={
						<MenuButton className='relative  hover:bg-secondary-100 p-2 rounded-lg transition-colors'>
							<RiNotification3Line />
							<span className='absolute -top-0.5 right-0 bg-primary py-0.5 px-[5px] box-content text-gray-700 rounded-full text-[8px] font-bold'>
								300
							</span>
						</MenuButton>
					}
					align='end'
					arrow
					transition
					arrowClassName='bg-secondary-100'
					menuClassName='bg-secondary-100 p-4'>
					<h1 className='text-gray-600 text-center font-medium'>
						Notificaciones (300)
					</h1>
					<hr className='my-6 border-gray-500' />
					<MenuItem className='p-0 hover:bg-transparent'>
						<Link
							href='#'
							className='text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg'>
							<Avatar
								name={name + ' ' + lastname}
								size={50}
								round='30px'
							/>
							<div className='text-sm flex flex-col'>
								<div className='flex items-center justify-between gap-4'>
									<span className='text-black'>{name + ' ' + lastname}</span>
									<span className='text-[8px]'>01/05/2023</span>
								</div>
								<p className='text-gray-500 text-xs'>Project Team 18</p>
							</div>
						</Link>
					</MenuItem>
					<MenuItem className='p-0 hover:bg-transparent'>
						<Link
							href='#'
							className='text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg'>
							<RiTwitchFill className='p-2 bg-blue-200 text-blue-700 box-content rounded-full' />
							<div className='text-sm flex flex-col'>
								<div className='flex items-center justify-between gap-4'>
									<span className='text-blue-700'>New message</span>
									<span className='text-[8px]'>01/05/2023</span>
								</div>
								<p className='text-blue-800 text-xs'>
									Trycatch mentioned you...
								</p>
							</div>
						</Link>
					</MenuItem>
					<MenuItem className='p-0 hover:bg-transparent'>
						<Link
							href='#'
							className='text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg'>
							<RiChat3Line className='p-2 bg-yellow-200 text-yellow-700 box-content rounded-full' />
							<div className='text-sm flex flex-col'>
								<div className='flex items-center justify-between gap-4'>
									<span className='text-black'>New Comentary</span>
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
							href='#'
							className='text-gray-800 text-sm hover:text-blue-950 transition-colors'>
							All Notifications
						</Link>
					</MenuItem>
				</Menu>
				<Menu
					menuButton={
						<MenuButton className='flex items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors'>
							<Avatar
								name={name + ' ' + lastname}
								size={40}
								round='30px'
								color={Avatar.getRandomColor('sitebase', [
									'red',
									'green',
									'blue',
								])}
							/>
							<span>{username}</span>
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
							href='#'
							className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'>
							<Avatar
								name={name + ' ' + lastname}
								size={30}
								round='30px'
								color={Avatar.getRandomColor('sitebase', [
									'red',
									'green',
									'blue',
								])}
							/>
							<div className='flex flex-col text-sm'>
								<span className='text-sm text-orange-600'>{name}</span>
								<span className='text-xs text-gray-500'>{email}</span>
							</div>
						</Link>
					</MenuItem>
					<hr className='my-4 border-gray-500' />
					<MenuItem className='p-0 hover:bg-transparent'>
						<Link
							href='#'
							className='rounded-lg transition-colors text-black hover:bg-blue-300 flex items-center gap-x-4 py-2 px-6 flex-1'>
							<RiSettings3Line /> Configuration
						</Link>
					</MenuItem>
					<MenuItem className='p-0 hover:bg-transparent'>
						<button
							onClick={handeLogout}
							className='rounded-lg transition-colors  text-black hover:bg-red-500 hover:text-white flex items-center gap-x-4 py-2 px-6 flex-1'>
							<RiLogoutCircleRLine /> Log out
						</button>
					</MenuItem>
				</Menu>
			</nav>
		</header>
	);
};

export default Header;
