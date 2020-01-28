import React from 'react';

const PickedNumbers = props => {
	return (
		<div className='numbers_range_div'>
			<p>{props.title}</p>
			<div className='numbers_range'>
				{props.state.pickedNumbers.map((number, i) => {
					return (
						<span key={i} className={props.checkMatch(number)} onClick={props.onClick} title={props.spantitle}>
							{number}
						</span>
					);
				})}
			</div>
		</div>
	);
};

export default PickedNumbers;
