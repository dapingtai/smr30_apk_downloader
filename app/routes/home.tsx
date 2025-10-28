import type { Route } from './+types/home';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { VersionSelector } from '../components/VersionSelector';
import { ReleaseNotesSection } from '../components/ReleaseNotes';
import { Footer } from '../components/Footer';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Robot Control Center - Download APK' },
		{
			name: 'description',
			content:
				'Download the latest Robot Control Center APK for your service robot. Current Stable Version: v2.1.0',
		},
	];
}

export default function Home() {
	return (
		<div>
			<Header />
			<main className='w-full max-w-[1920px] mx-auto px-4'>
				<div className='flex flex-col items-center gap-6 py-6'>
					<HeroSection />

					<div className='w-full flex flex-col lg:flex-row justify-center items-start gap-6 px-4'>
						<VersionSelector />
						<ReleaseNotesSection />
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
