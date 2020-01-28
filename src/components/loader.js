import React from 'react';
import loader from '../images/loader.gif';

const Loader = () => {
	return (
		<div className='loader'>
			<img src={loader} alt='Loading...'></img>
		</div>
	);
};

export default Loader;
