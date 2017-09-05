import React from 'react'
import Link from 'next/link'
import {connect} from 'react-redux'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import MovieCard from '../components/movieCard.js'

class Favourites extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	componentDidMount() {
		if (typeof window) {
			this.setState({
				favouriteIds: JSON.parse(localStorage.getItem("favouriteIds"))
			})
		}
	}

	render() {
		debugger
		const cards = this.props ? this.props.favouriteIds.forEach((movie) => {
					<MovieCard movie={movie}/>
				}) : null
		return (
			<div>
				{cards}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        favouriteIds: state.addFavourite.id,
    };
};

export default withRedux(initStore, mapStateToProps, null)(Favourites)