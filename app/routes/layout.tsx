import type React from 'react';
import { Outlet } from 'react-router';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className={`bg-black`}>
			<Outlet />
		</div>
	);
}
