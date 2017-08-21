import React from 'react'

import Head from 'next/head'
import axios from 'axios'
import Link from 'next/link'

//import './index.css'

import MovieCard from './movieCard'
// export default () => (
// 	<div>
// 		<Head>
// 			<title>BMDB</title>
// 			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
//         	<link rel="stylesheet" href="https://unpkg.com/purecss@0.6.1/build/pure-min.css" />
// 		</Head>
// 		BMBD App
// 	</div>
// )

export default class extends React.Component {
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
				<Link href="/favourites">favourites</Link>
				</div>
					<div className="gallery"> 
						<div>
							{this.props.data.results.map((movie, i) => {
								return (
									<MovieCard movie={movie} />
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
						padding: 10px;
						background: blue;
					}
				`}</style>
				</div>
		)
	}
}

