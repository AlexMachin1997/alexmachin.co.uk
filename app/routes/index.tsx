import * as React from 'react';

const Index = () => (
	<nav className='fixed top-0 right-0 left-0 z-[1000000] flex flex-wrap items-center justify-around bg-black pt-4 sm:pt-0'>
		<div className='font-kaushan-script'>
			<p className='text-3xl font-bold text-yellow'>Alex Machin</p>
		</div>

		<ul className='flex list-none'>
			<li className='m-4 cursor-pointer text-2xl font-bold uppercase text-white'>About</li>
			<li className='m-4 cursor-pointer text-2xl font-bold uppercase text-white'>Projects</li>
			<li className='m-4 cursor-pointer text-2xl font-bold uppercase text-white'>Contact</li>
		</ul>
	</nav>
);

export default Index;
