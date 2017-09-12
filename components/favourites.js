import React from 'react'
import Link from 'next/link'
import {connect} from 'react-redux'
import MovieCard from '../components/movieCard'

class Favourites extends React.Component {
	render() {
		console.log(this);
		return (
			<div>
				<p>Favourite Movies</p>
				{this.props.favouriteIds.map((movie, i) => {
					return (
						<MovieCard movie={movie} key={i} />	
					)
				})}				
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	debugger
	console.log(this);
	return {
		favouriteIds: JSON.parse(state.getFavourite.ids),
		isLiked: state.getFavourite.isLiked
	}
}

export default connect(mapStateToProps, null)(Favourites);