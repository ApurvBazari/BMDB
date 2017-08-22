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

	static async getInitialProps() {
		const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}');
		return {
			data: res.data
		}
	}

	handleSearch = () => {
		console.log(this.props);

	}

	render() {
		console.log(this.props);
		return (
			<div className="app">
				<Head>
					<title>BMDB</title>
					<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
				</Head>
				<div className="appHeader">
					<img src="/static/logo.png"></img>
					<div className="headerLinks">
						<Link href="/favourites"><a className="link linkFavourite">FAVOURITES</a></Link>
						<Link href="/"><a className="link linkPopular">POPULAR</a></Link>
						<i className="fa fa-search" aria-hidden="true" onClick={this.handleSearch}></i>
					</div>
				</div>
				<div className="headerBar">
					<select className="select select-filter">
						<option>Rating: High</option>
						<option>Rating: Low</option>
						<option>Popularity: High</option>
						<option>Popularity: Low</option>
					</select>
					<select className="select select-year">
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

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: bindActionCreators(fetchData, dispatch)	
	}
}

export default withRedux(initStore, null, mapDispatchToProps)(FirstPage)
