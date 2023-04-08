import React from 'react';

const Container = ({ children }) => {
	return (
		<section className='w-[90vw] md:w-[80vw] mt-20 bg-transparent/40 mx-auto'>
			{children}
		</section>
	);
};

export default Container;
