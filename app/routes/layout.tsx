import type React from 'react';
import { Outlet } from 'react-router';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100'>
			{/* Gradient Orbs */}
			<div className='fixed top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl' />
			<div className='fixed bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl' />
			<div className='relative'>
				<Outlet />
			</div>
		</div>
	);
}
