import Favourites from '../components/favourites.js'
import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import {getFavourite} from '../actions/fetchFavourite.js'
import { bindActionCreators } from 'redux'

class Favourite extends React.Component {
	static async getInitialProps({store, isServer}) {
		if (!isServer) {
			await store.dispatch(getFavourite())
		}
		return {
			isServer
		}
	}

	render() {
		//console.log(this, this.isServer);
		return (
			<div>
				<Favourites linkTo='/favourites'/>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getFavourite: bindActionCreators(getFavourite, dispatch)
	}
}

export default withRedux(initStore, state => state, mapDispatchToProps)(Favourite);

//export default Favourite;