import { useState, useEffect, useRef } from 'react';
import type { VersionId, VersionData } from '../types/version';

interface VersionSelectorProps {
	versions: VersionData[];
	selectedVersionId: VersionId;
	onVersionChange: (versionId: VersionId) => void;
}

export const VersionSelector = ({
	versions,
	selectedVersionId,
	onVersionChange,
}: VersionSelectorProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const selectedVersion = versions.find((v) => v.id === selectedVersionId) || versions[0];
	const versionLabels = versions.map((v) => ({ id: v.id, label: v.label }));

	const handleDownload = () => {
		console.log(`Downloading ${selectedVersion.id}...`);
		const link = document.createElement('a');
		link.href = selectedVersion.downloadUrl as string;
		link.download = `smr30-${selectedVersion.id}.apk`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	return (
		<div className='w-full h-full lg:h-[35vh] flex-1 flex flex-col gap-4 p-6 bg-[rgba(26,26,46,0.5)] border border-white/10 rounded-xl'>
			<div className='flex flex-col gap-1'>
				<h3 className='text-[18px] font-bold leading-tight text-white tracking-[-1.5px]'>
					Choose Your Version
				</h3>
				<p className='text-base font-normal leading-relaxed text-[#9DB0B9]'>
					Select from the list of available versions to download.
				</p>
			</div>

			<div className='flex flex-col gap-2'>
				<label className='text-sm font-medium leading-relaxed text-white pb-2'>
					Select a Version
				</label>

				<div className='relative' ref={dropdownRef}>
					<button
						type='button'
						onClick={() => setIsOpen(!isOpen)}
						className='w-full h-14 px-4 py-4 pr-9 flex items-center justify-between bg-[#1C2327] border border-[#3B4B54] rounded-lg hover:border-[#4B5A64] transition-colors'
					>
						<span className='text-base font-normal text-white'>{selectedVersion.label}</span>
						<svg
							width='24'
							height='28'
							viewBox='0 0 24 28'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
						>
							<path
								d='M6 9L12 15L18 9'
								stroke='white'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>

					{isOpen && (
						<div className='absolute z-50 w-full mt-1 bg-[#1C2327] border border-[#3B4B54] rounded-lg shadow-lg'>
							{versionLabels.map((version) => (
								<button
									key={version.id}
									type='button'
									onClick={() => {
										onVersionChange(version.id);
										setIsOpen(false);
									}}
									className='w-full px-4 py-3 text-left text-base font-normal text-white hover:bg-[#2A3037] transition-colors first:rounded-t-lg last:rounded-b-lg'
								>
									{version.label}
								</button>
							))}
						</div>
					)}
				</div>
			</div>

			<button
				onClick={handleDownload}
				className='w-full h-12 px-5 bg-primary rounded-lg hover:bg-[#2F3D45] transition-colors cursor-pointer'
			>
				<span className='text-white text-base font-bold tracking-[1.5%] leading-relaxed'>
					Download {selectedVersion.id}
				</span>
			</button>
		</div>
	);
};
