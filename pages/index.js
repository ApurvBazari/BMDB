import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import HomePage from '../components/homePage.js'

class Counter extends React.Component {
  render () {
    return (
       <div>
       	Hello
       	<HomePage linkTo='/homePage'/>
       </div>
    )
  }
}


export default withRedux(initStore, null, null)(Counter)