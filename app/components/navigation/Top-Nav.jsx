'use client';

import {
	BsChevronCompactDown,
	BsFillClockFill,
	BsClockHistory,
	BsFillCalendar2CheckFill,
	BsSearch,
} from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const TopNav = () => {
	const [isLatest, setIslatest] = useState(false);

	return (
		<header className=' w-screen h-[10vh] lg:h-[8vh] bg-blue-500 text-white fixed top-0 '>
			<nav className=' flex w-[90vw] md:w-[80vw] h-full mx-auto items-center justify-between'>
				<button className=' flex items-center gap-2 text-white'>
					<p className=' text-lg capitalize'>football</p>
					<BsChevronCompactDown className=' text-white font-semibold text-sm' />
				</button>
				<ul className=' flex items-center gap-4'>
					<li
						className=' flex items-center gap- bg-transparent/20 rounded-full  w-[2rem]  '
						onClick={() => setIslatest((prev) => !prev)}
					>
						<button className=' flex items-center gap-2 transition-all delay-200 duration-150'>
							{isLatest ? (
								<BsFillClockFill className=' text-white text-lg self-start transition-all delay-200 duration-150' />
							) : (
								<BsClockHistory className=' text-white text-lg self-end ml-4 transition-all delay-200 duration-150' />
							)}
						</button>
					</li>
					<li className=' flex items-center text-white text-sm'>
						<BsFillCalendar2CheckFill className=' text-sm' />
					</li>
					<li className=' flex items-center text-white text-sm'>
						<BsSearch className=' text-sm' />
					</li>
					<li>
						<FaUser />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default TopNav;
