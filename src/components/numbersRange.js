import React from 'react';

const NumbersRange = props => {
	return (
		<div>
			<div className='numbers_range_div'>
				<p>{props.title}</p>
				<div className='numbers_range'>
					{props.state.numbersRange
						? props.state.numbersRange.map((number, i) => {
								return (
									<span
										style={props.state[number] ? props.state.pickedstyle : {}}
										key={i}
										onClick={props.onClick}
										title={props.spantitle}
										className={props.state.pickedNumbers.length >= 7 ? 'span_number choosen' : 'span_number'}>
										{number}
									</span>
								);
						  })
						: null}
				</div>
			</div>
		</div>
	);
};

export default NumbersRange;
