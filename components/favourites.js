import React from 'react'
import Link from 'next/link'
import {connect} from 'react-redux'
import MovieCard from '../components/movieCard'

class Favourites extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = props;
  	}

	handleDislike(movieRemove) {
		let newList = [];
		this.state.favouriteMovies.forEach((movie) => {
			if (movie.id != movieRemove.id) {
				newList.push(movie);
			}
		});
		this.setState({
			favouriteMovies: newList
		});
	}

	componentWillMount() {
		console.log('Will mount');
	}

	componentDidMount() {
		console.log('Did mount');
	}

	render() {
		return (
			<div>
				<p>Favourite Movies</p>
				{this.state.favouriteMovies.map((movie, i) => {
					return (
						<MovieCard movie={movie} key={i} isLiked={this.props.isLiked} handleDislike = {this.handleDislike.bind(this)} />	
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