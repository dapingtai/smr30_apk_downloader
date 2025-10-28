import { Link } from 'react-router';

export const Header = () => {
	return (
		<header className='w-full flex justify-between items-center px-4 py-4 bg-[#101C22]/80 backdrop-blur-sm border-b border-white/10'>
			<div className='flex items-center gap-3'>
				<div className='w-6 h-7 md:w-8 md:h-9 flex items-center justify-center'>
					<svg
						width='31'
						height='36'
						viewBox='0 0 31 36'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M2.8125 8.25L15.75 2.25L28.6875 8.25M2.8125 8.25V17.25L15.75 23.25L28.6875 17.25V8.25M2.8125 8.25L15.75 14.25L28.6875 8.25M15.75 23.25V14.25M15.75 14.25V2.25M15.75 23.25L2.8125 17.25M15.75 23.25L28.6875 17.25'
							stroke='white'
							strokeWidth='2.5'
						/>
					</svg>
				</div>
				<h2 className='text-sm md:text-lg font-bold text-white'>Robot Control Center</h2>
			</div>
			<nav className='flex items-center gap-3 md:gap-6'>
				<Link
					to='/'
					className='text-white text-xs md:text-sm font-medium hover:text-white/80 transition-colors'
				>
					Home
				</Link>
				<Link
					to='/docs'
					className='text-white text-xs md:text-sm font-medium hover:text-white/80 transition-colors'
				>
					Docs
				</Link>
				<Link
					to='/support'
					className='text-white text-xs md:text-sm font-medium hover:text-white/80 transition-colors'
				>
					Support
				</Link>
			</nav>
		</header>
	);
};
