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
					<a><link href="./movieCard.css" rel="stylesheet" /></a>
				</Head>
				<Link href="/favourites">favourites</Link>
					<div className="gallery">
						<h1>BMDB</h1>
						<div>
							{this.props.data.results.map((movie, i) => {
								return (
									<MovieCard movie={movie} />
								)
							})}
						</div>
					</div>
				</div>
		)
	}
}

