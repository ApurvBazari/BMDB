import React from 'react'
import Link from 'next/link'
import {connect} from 'react-redux'
import MovieCard from '../components/movieCard'

class Favourites extends React.Component {
	constructor(props) {
    	super(props);
    	this.handleDislike = this.handleDislike.bind(this);
  	}
  	
	handleDislike = () => {
		console.log('Disliked');
		this.render();
	}

	componentWillMount() {
		console.log('Will mount');
	}

	componentDidMount() {
		console.log('Did mount');
	}

	render() {
		console.log(this);
		return (
			<div>
				<p>Favourite Movies</p>
				{this.props.favouriteMovies.map((movie, i) => {
					return (
						<MovieCard movie={movie} key={i} isLiked={this.props.isLiked} handleDislike = {this.handleDislike} />	
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
		favouriteMovies: JSON.parse(state.getFavourite.movies),
		isLiked: state.getFavourite.isLiked
	}
}

export default connect(mapStateToProps, null)(Favourites);