import { useState } from 'react';
import type { Route } from './+types/home';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { VersionSelector } from '../components/VersionSelector';
import { ReleaseNotesSection } from '../components/ReleaseNotes';
import { Footer } from '../components/Footer';
import versionsData from '../data/versions.json';
import type { VersionId, VersionData } from '../types/version';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Robot Control Center - Download APK' },
		{
			name: 'description',
			content: 'Download the latest Robot Control Center APK for your service robot.',
		},
	];
}

export default function Home() {
	const versions = versionsData.versions as VersionData[];
	const latestVersion = versions.find((v) => v.isLatest) || versions[0];
	const [selectedVersionId, setSelectedVersionId] = useState<VersionId>(latestVersion.id);

	const selectedVersion = versions.find((v) => v.id === selectedVersionId) || latestVersion;

	const handleVersionChange = (versionId: VersionId) => {
		setSelectedVersionId(versionId);
	};

	return (
		<div>
			<Header />
			<main className='w-full max-w-[1920px] mx-auto px-4'>
				<div className='flex flex-col items-center gap-6 py-6'>
					<HeroSection version={latestVersion.id} downloadUrl={latestVersion.downloadUrl} />

					<div className='w-full flex flex-col lg:flex-row justify-center items-start gap-6 px-4'>
						<VersionSelector
							versions={versions}
							selectedVersionId={selectedVersionId}
							onVersionChange={handleVersionChange}
						/>
						<ReleaseNotesSection selectedVersion={selectedVersion} />
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
