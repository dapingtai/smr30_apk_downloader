import { useState } from 'react';

type TabType = 'release-notes' | 'requirements' | 'instructions';

interface ReleaseNote {
	type: 'feature' | 'improvement' | 'bug-fix';
	text: string;
}

const releaseNotes: ReleaseNote[] = [
	{
		type: 'feature',
		text: 'Introduced advanced obstacle avoidance algorithm for smoother navigation in complex environments.',
	},
	{
		type: 'improvement',
		text: 'Optimized battery consumption by 15% during standby mode.',
	},
	{
		type: 'bug-fix',
		text: 'Resolved an issue where the robot would occasionally fail to connect to secured Wi-Fi networks.',
	},
	{
		type: 'improvement',
		text: 'Enhanced UI responsiveness in the remote control interface.',
	},
];

export const ReleaseNotesSection = () => {
	const [activeTab, setActiveTab] = useState<TabType>('release-notes');

	const tabs = [
		{ id: 'release-notes' as TabType, label: 'Release Notes' },
		{ id: 'requirements' as TabType, label: 'Requirements' },
		{ id: 'instructions' as TabType, label: 'Instructions' },
	];

	const getBadgeColor = (type: string) => {
		switch (type) {
			case 'feature':
				return 'bg-[rgba(34,197,94,0.2)] text-[#4ADE80]';
			case 'improvement':
				return 'bg-[rgba(59,130,246,0.2)] text-[#60A5FA]';
			case 'bug-fix':
				return 'bg-[rgba(239,68,68,0.2)] text-[#F87171]';
			default:
				return 'bg-gray-800 text-gray-300';
		}
	};

	const getBadgeLabel = (type: string) => {
		switch (type) {
			case 'feature':
				return 'New Feature';
			case 'improvement':
				return 'Improvement';
			case 'bug-fix':
				return 'Bug Fix';
			default:
				return type;
		}
	};

	return (
		<div className='w-full lg:h-[35vh] flex-2 flex flex-col gap-4 p-6 bg-[rgba(26,26,46,0.5)] border border-white/10 rounded-xl'>
			<div className='flex gap-0 border-b border-white/10'>
				{tabs.map((tab) => (
					<button
						key={tab.id}
						type='button'
						onClick={() => setActiveTab(tab.id)}
						className={`px-4 py-2 text-sm font-medium transition-colors ${
							activeTab === tab.id
								? 'text-white border-b-2 border-[#13A4EC]'
								: 'text-[#9DB0B9] hover:text-white'
						}`}
					>
						{tab.label}
					</button>
				))}
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='text-[18px] font-bold leading-tight text-white'>
					Version 2.1.0 Release Notes
				</h3>

				{activeTab === 'release-notes' && (
					<div className='flex flex-col gap-3'>
						{releaseNotes.map((note, index) => (
							<div key={index} className='flex gap-4 w-full'>
								<span
									className={`w-24 h-6 px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(note.type)}`}
								>
									{getBadgeLabel(note.type)}
								</span>
								<p className='flex-1 text-sm font-normal leading-relaxed text-[#9DB0B9]'>
									{note.text}
								</p>
							</div>
						))}
					</div>
				)}

				{activeTab === 'requirements' && (
					<div className='text-sm font-normal leading-relaxed text-[#9DB0B9]'>
						<p>• Android 8.0 (API level 26) or higher</p>
						<p>• Minimum 2GB RAM</p>
						<p>• Wi-Fi connection required for initial setup</p>
						<p>• Bluetooth 4.0 or higher</p>
					</div>
				)}

				{activeTab === 'instructions' && (
					<div className='text-sm font-normal leading-relaxed text-[#9DB0B9]'>
						<p>1. Download the APK file</p>
						<p>2. Enable "Install from Unknown Sources" in your device settings</p>
						<p>3. Open the downloaded APK file</p>
						<p>4. Follow the on-screen installation instructions</p>
						<p>5. Launch the app and configure your robot connection</p>
					</div>
				)}
			</div>
		</div>
	);
};
