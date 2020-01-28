import React, { Component } from 'react';
import ResultsContainer from './components/resultsContainer';
import NumbersRange from './components/numbersRange';
import PickedNumbers from './components/pickedNumbers';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			data: '',
			portalActive: false,
			numbersRange: [...Array(39).keys()].map(x => x + 1),
			pickedNumbers: [],
			pickedstyle: {
				border: 'solid thin gray',
				cursor: 'default',
				opacity: '0.3'
			}
		};
	}

	fetchData = () => {
		let url = `https://lottonumbers.herokuapp.com/numbers`;
		(async () => {
			let response = await fetch(url);
			let data = await response.json();
			this.setState({
				data: data
			});
		})();
	};

	toglePortal = () => {
		this.setState({
			portalActive: !this.state.portalActive
		});
	};

	pickNumber = e => {
		let value = e.target.innerText;
		let index = this.state.pickedNumbers.indexOf(value);
		if (this.state.pickedNumbers.length <= 6 && index === -1) {
			this.setState(prevState => ({
				pickedNumbers: [...prevState.pickedNumbers, value],
				[value]: true
			}));
		}
	};

	removeNumber = e => {
		let value = e.target.innerText;
		this.setState({
			pickedNumbers: this.state.pickedNumbers.filter(number => number !== value),
			[value]: false
		});
	};

	checkMatch = number => {
		if (this.state.data.results[0].numbers.indexOf(number) > -1) {
			return 'span_number matched';
		} else {
			return 'span_number';
		}
	};

	clearPickedNumbers = () => {
		this.state.pickedNumbers.map(number => {
			return this.setState(
				{
					[number]: false
				},
				() =>
					this.setState({
						pickedNumbers: []
					})
			);
		});
	};

	componentDidMount() {
		this.fetchData();
	}

	render() {
		return (
			<div className='main_container'>
				<ResultsContainer data={this.state.data} />
				<div className={this.state.portalActive ? 'played_numbers active' : 'played_numbers'}>
					<div className='check_header' onClick={this.state.data ? this.toglePortal : null}>
						<i className='fas fa-chevron-up'></i>
						<p>check your numbers</p>
					</div>
					<div className='check_body'>
						<NumbersRange title='choose numbers' spantitle='add' onClick={this.pickNumber} state={this.state} />
						<PickedNumbers
							title={'picked numbers'}
							spantitle='remove'
							onClick={this.removeNumber}
							state={this.state}
							checkMatch={this.checkMatch}
						/>
						<div className={this.state.pickedNumbers.length > 0 ? 'clear_button active' : 'clear_button'}>
							<i className='fas fa-plus' onClick={this.clearPickedNumbers} title='clear picked numbers'></i>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
