import React from 'react'
import {bindActionCreators} from 'redux'
import {initStore} from '../store.js'
import {fetchData} from '../actions/index.js'
import withRedux from 'next-redux-wrapper'

import Head from 'next/head'
import axios from 'axios'
import Link from 'next/link'

import MovieCard from '../components/movieCard'

class FirstPage extends React.Component {
	// static async getInitialProps({store}) {
	// 	let url = 'https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}';
	// 	store.dispatch(fetchData(url));
	// }

	static async getInitialProps() {
		const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}');
		return {
			data: res.data
		}
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<Head>
					<title>BMDB</title>
					<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
				</Head>
				<div className="appHeader">
					<h1>BMDB</h1>
					<div className="headerLinks">
						<Link href="/favourites"><a>FAVOURITES</a></Link>
						<Link href="/"><a>POPULAR</a></Link>
					</div>
				</div>
				<div className="headerBar">
					<select className="filter">
						<option>Rating: High</option>
						<option>Rating: Low</option>
						<option>Popularity: High</option>
						<option>Popularity: Low</option>
					</select>
					<select className="year">
						<option>2010</option>
						<option>2011</option>
						<option>2012</option>
						<option>2013</option>
						<option>2014</option>
						<option>2015</option>
						<option>2016</option>
						<option>2017</option>
					</select>
				</div>
				<div className="gallery"> 
					<div>
						{this.props.data.results.map((movie, i) => {
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
						background: blue;
					}

					.headerLinks {
						padding: 5px;
					}
				`}</style>
				</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: bindActionCreators(fetchData, dispatch)	
	}
}

export default withRedux(initStore, null, mapDispatchToProps)(FirstPage)
