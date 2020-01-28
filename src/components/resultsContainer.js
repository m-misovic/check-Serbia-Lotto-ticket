import React from 'react';
import Loader from './loader';

const ResultsContainer = props => {
	return (
		<div className='results_container'>
			<div>
				<div className='game_info'>{props.data.kolo}</div>
				<div className='game_info'>{props.data.date}</div>
				{props.data.results ? (
					props.data.results.map((game, i) => (
						<div key={i} className='game_container'>
							<div className='game_title'>{game.title === 'Jocker' ? 'Joker' : game.title}</div>
							<div className='numbers_container'>
								{game.numbers.map((number, i) => {
									return (
										<span className='span_number' key={i}>
											{number}
										</span>
									);
								})}
							</div>
						</div>
					))
				) : (
					<Loader />
				)}
			</div>
		</div>
	);
};

export default ResultsContainer;
