import { useState } from 'react';
import type { VersionData } from '../types/version';

type TabType = 'release-notes' | 'requirements' | 'instructions';

interface ReleaseNotesProps {
	selectedVersion: VersionData;
}

export const ReleaseNotesSection = ({ selectedVersion }: ReleaseNotesProps) => {
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
					{selectedVersion.releaseNotes.title}
				</h3>

				{activeTab === 'release-notes' && (
					<div className='flex flex-col gap-3'>
						{selectedVersion.releaseNotes.notes.map((note, index) => (
							<div key={index} className='flex gap-4 w-full'>
								<span
									className={`w-24 h-6 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getBadgeColor(note.type)}`}
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
					<div>
						{selectedVersion.requirements.map((req, index) => (
							<p key={index} className='text-sm font-normal leading-relaxed text-[#9DB0B9]'>
								• {req}
							</p>
						))}
					</div>
				)}

				{activeTab === 'instructions' && (
					<div className='text-sm font-normal leading-relaxed text-[#9DB0B9]'>
						{selectedVersion.instructions.map((instruction, index) => (
							<p key={index}>
								{index + 1}. {instruction}
							</p>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
