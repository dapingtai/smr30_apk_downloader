export const HeroSection = ({ version, downloadUrl }: { version: String; downloadUrl: String }) => {
	const handleDownload = () => {
		// TODO: Implement download functionality
		console.log('Downloading latest version...');
		const link = document.createElement('a');
		link.href = downloadUrl as string;
		link.download = `smr30-${version}.apk`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<section className='w-full max-w-[1872px] mx-auto flex flex-col justify-center items-center gap-8 px-4 py-20 md:py-32 lg:py-[154px]'>
			<div className='flex flex-col gap-2 w-full text-center'>
				<h1 className='text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight text-white tracking-[-3.3px]'>
					Robot Control Center APK
				</h1>
				<p className='text-base font-normal leading-relaxed text-[#9DB0B9]'>
					Get the latest software for your service robot. Current Stable Version: {version}
				</p>
			</div>
			<button
				onClick={handleDownload}
				className='cursor-pointer px-5 h-12 bg-[#13A4EC] rounded-lg hover:bg-[#13A4EC]/90 transition-colors shadow-[0_0_5px_2px_rgba(19,164,236,0.2),0_0_15px_5px_rgba(19,164,236,0.3)]'
			>
				<span className='text-white text-base font-bold tracking-[1.5%] leading-relaxed'>
					Download Latest Version
				</span>
			</button>
		</section>
	);
};
