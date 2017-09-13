import React from 'react'
import {itemsFetchData} from '../actions/items'

import {connect} from 'react-redux'
import Head from 'next/head'
import Link from 'next/link'
import { bindActionCreators } from 'redux'

import MovieCard from '../components/movieCard'

class HomePage extends React.Component {
	onFilterChange = (e) => {
		let value = e.target.value;
		console.log('Value:', value);
		let url;
		if (value === 'rating') {
			url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=1';
		} else if (value === 'popularity') {
			url = 'https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}';
		} else if (value === 'upcoming') {
			url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=1';
		} else if (value === 'nowPlaying') {
			url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=1';
		}
		this.props.itemsFetchData(url);
		this.setState({
			filterValue: value,
			dateValue: 'dateFilter'
		});
	}

	onDateChange = (e) => {
		let value = e.target.value;
		let url = `https://api.themoviedb.org/3/search/movie?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&query=m&year=${value}`;
		this.props.itemsFetchData(url);
		this.setState({
			dateValue: value,
			filterValue: 'filter'
		});
	}

	componentDidMount() {
		if (!sessionStorage.getItem('movieList')) {
			sessionStorage.setItem('movieList', JSON.stringify(this.props.data))
		}
	}

	render() {
		console.log(this.props);
		return (
			<div className="app">
				<div className="headerBar">
					<select className="select select-filter" onChange={this.onFilterChange} value={this.state ? this.state.filterValue : 'filter'}>
						<option value="filter" disabled>Filter By</option>
						<option value="popularity">Popularity</option>
						<option value="rating">Rating</option>
						<option value="upcoming">Upcoming</option>
						<option value="nowPlaying">Now Playing</option>
					</select>
					<select className="select select-year" onChange={this.onDateChange} value={this.state ? this.state.dateValue: 'dateFilter'}>
						<option value="dateFilter" disabled>Filter By Year</option>
						<option value="2010">2010</option>
						<option value="2011">2011</option>
						<option value="2012">2012</option>
						<option value="2013">2013</option>
						<option value="2014">2014</option>
						<option value="2015">2015</option>
						<option value="2016">2016</option>
						<option value="2017">2017</option>
					</select>
				</div>
				<div className="gallery"> 
					<div>
						{this.props.items.results.map((movie, i) => {
							return (
								<MovieCard movie={movie} key={i}/>
							)
						})}
					</div>
				</div>
				<style jsx>{`
					.filter {
						padding: 10px;
					}

					.year {
						padding: 10px;
					}

					.appHeader {
						background: #1C1C2D;
						color: white;
						display: flex;
						padding: 10px;
					}

					.headerLinks {
						padding: 5px;
						position: absolute;
						right: 5px
					}

					.link {
						padding: 15px;
						color: white;
						font-size: 16px;
					}

					.fa {
						font-size: 18px;
						color: white;
						padding: 15px;
					}

					.headerBar {
						padding: 10px;
					}

					.select {
						margin: 21px;
					}
				`}</style>
				</div>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
	return {
		itemsFetchData: bindActionCreators(itemsFetchData, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);