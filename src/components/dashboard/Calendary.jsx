import React from 'react';
import {
	add,
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	format,
	getDay,
	isSameMonth,
	isToday,
	parse,
	startOfToday,
	startOfWeek,
} from 'date-fns';

import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { capitalizeFirstLetter } from '../../utils/functions';
import { useState } from 'react';

function Calendary() {
	const today = startOfToday();
	const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
	const colStartClasses = [
		'',
		'col-start-2',
		'col-start-3',
		'col-start-4',
		'col-start-5',
		'col-start-6',
		'col-start-7',
	];

	const [currMonth, setCurrMonth] = useState(() => format(today, 'MMM-yyyy'));
	let firstDayOfMonth = parse(currMonth, 'MMM-yyyy', new Date());

	const daysInMonth = eachDayOfInterval({
		start: startOfWeek(firstDayOfMonth),
		end: endOfWeek(endOfMonth(firstDayOfMonth)),
	});

	const getPrevMonth = (event) => {
		event.preventDefault();
		const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
		setCurrMonth(format(firstDayOfPrevMonth, 'MMM-yyyy'));
	};

	const getNextMonth = (event) => {
		event.preventDefault();
		const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
		setCurrMonth(format(firstDayOfNextMonth, 'MMM-yyyy'));
	};

	return (
		<div className='w-auto h-auto p-5 border-spacing-1 border-black shadow-lg rounded-sm'>
			<div className='flex items-center justify-between'>
				<p className='font-semibold text-md'>
					{format(firstDayOfMonth, 'MMMM yyyy')}
				</p>
				<div className='flex items-center justify-evenly gap-6 sm:gap-6'>
					<BsChevronLeft
						className='w-6 h-4 cursor-pointer'
						onClick={getPrevMonth}
					/>
					<BsChevronRight
						className='w-6 h-4 cursor-pointer'
						onClick={getNextMonth}
					/>
				</div>
			</div>
			<hr className='my-6' />
			<div className='grid grid-cols-7 gap-2 sm:gap-4 place-items-center'>
				{days.map((day, idx) => {
					return (
						<div
							key={idx}
							className='font-semibold text-[0.5rem] md:text-md lg:text-[0.7rem]'>
							{capitalizeFirstLetter(day)}
						</div>
					);
				})}
			</div>
			<div className='grid grid-cols-7 gap-3 sm:gap-4 mt-4 place-items-center'>
				{daysInMonth.map((day, idx) => {
					return (
						<div
							key={idx}
							className={colStartClasses[getDay(day)]}>
							<p
								className={`cursor-pointer flex items-center justify-center font-semibold h-6 w-6 rounded-full  hover:text-white ${
									isSameMonth(day, today) ? 'text-gray-900' : 'text-gray-400'
								} ${!isToday(day) && 'hover:bg-blue-500'} ${
									isToday(day) && 'bg-blue-500 text-white'
								}`}>
								{format(day, 'd')}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Calendary;
