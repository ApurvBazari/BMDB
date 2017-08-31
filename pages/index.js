import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import HomePage from '../components/homePage.js'
import {itemsFetchData} from '../actions/items.js'


class Counter extends React.Component {

static async getInitialProps({store, isServer}) {
  	await store.dispatch(itemsFetchData('https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}'));
  	console.log(store.getState());
  	return {
  		isServer
	}
}

componentDidMount() {
	let res = this.props.itemsFetchData('https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}');
	console.log(res);
	return {
		res
	}
}

render () {
    console.log(this.props);
    return (
       <div>
       	Hello
       	<HomePage linkTo='/homePage'/>
       </div>
    )
  }
}

/*const mapDispatchToProps = (dispatch) => {
	return {
		itemsFetchData: bindActionCreators(itemsFetchData, dispatch)	
	}
}
*/
const mapDispatchToProps = dispatch =>
bindActionCreators(
{
itemsFetchData,
},
dispatch
);
export default withRedux(initStore, null, mapDispatchToProps)(Counter)