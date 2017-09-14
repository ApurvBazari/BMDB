import Favourites from '../components/favourites.js'
import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import {getFavourite} from '../actions/fetchFavourite.js'
import { bindActionCreators } from 'redux'

import BMDBHeader from '../components/header.js'

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
		return (
			<div>
				<BMDBHeader />
				<Favourites />
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