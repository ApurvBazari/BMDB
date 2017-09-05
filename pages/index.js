import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import HomePage from '../components/homePage.js'
import {itemsFetchData} from '../actions/items.js'
import {addFavourite} from '../actions/addfavourite.js'
import Favourites from '../components/favourites.js'

class Counter extends React.Component {

static async getInitialProps({store, isServer}) {
  	await store.dispatch(itemsFetchData('https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}'));
  	return {
  		isServer
	}
}

render () {
    return (
       <div>
       	<HomePage linkTo='/'/>
        <Favourites linkTo='/favourites' />
       </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		itemsFetchData: bindActionCreators(itemsFetchData, dispatch),	
		addFavourite: bindActionCreators(addFavourite, dispatch)
	}
}

export default withRedux(initStore, null, mapDispatchToProps)(Counter)