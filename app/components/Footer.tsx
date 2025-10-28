import { Link } from 'react-router';

export const Footer = () => {
	return (
		<footer className='w-full mt-10 pt-10 border-t border-white/10'>
			<div className='max-w-[1920px] mx-auto px-4 md:px-16 lg:px-[320px] py-6 flex flex-col md:flex-row justify-between items-center gap-4'>
				<div className='flex items-center'>
					<p className='text-sm font-normal leading-relaxed text-[#888888]'>
						© 2025 Dabai Robot. All rights reserved.
					</p>
				</div>
				<div className='flex items-center gap-4'>
					<Link
						to='/privacy'
						className='text-sm font-normal leading-relaxed text-[#888888] hover:text-white transition-colors'
					>
						Privacy Policy
					</Link>
					<Link
						to='/terms'
						className='text-sm font-normal leading-relaxed text-[#888888] hover:text-white transition-colors'
					>
						Terms of Service
					</Link>
					<Link
						to='/support'
						className='text-sm font-normal leading-relaxed text-[#888888] hover:text-white transition-colors'
					>
						Support
					</Link>
				</div>
			</div>
		</footer>
	);
};
