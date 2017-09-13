import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import HomePage from '../components/homePage.js'
import {itemsFetchData} from '../actions/items.js'
import BMDBHeader from '../components/header.js'

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
        <BMDBHeader />
       	<HomePage />
       </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		itemsFetchData: bindActionCreators(itemsFetchData, dispatch)
	}
}

export default withRedux(initStore, null, mapDispatchToProps)(Counter)