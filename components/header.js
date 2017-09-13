import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import {itemsFetchData} from '../actions/items'

class BMDBHeader extends React.Component{
  handleSearch = (e) => {
    console.log(e.target.value);
    let value = e.target.value;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&query=${value}&page=1&include_adult=false`;
    this.props.itemsFetchData(url);
  }

	render () {
		return(
			<div>
				<Head>
          			<title>BMDB</title>
          			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        		</Head>
        		<div className="appHeader">
          			<img src="/static/logo.png"></img>
          			<div className="headerLinks">
            			<Link href="/favourites"><a className="link linkFavourite">FAVOURITES</a></Link>
    			        <Link href="/"><a className="link linkPopular">POPULAR</a></Link>
            			<i className="fa fa-search" aria-hidden="true" onClick={this.handleSearch}></i>
          			</div>
        		</div>
        		<style jsx>{`
          			.filter {
            			padding: 10px;
          			}

          			.year {
            			padding: 10px;
          			}

          			.appHeader {
            			background: #1C1C2D;
            			color: white;
            			display: flex;
            			padding: 10px;
          			}

          			.headerLinks {
            			padding: 5px;
            			position: absolute;
            			right: 5px
          			}

          			.link {
            			padding: 15px;
            			color: white;
            			font-size: 16px;
          			}

          			.fa {
            			font-size: 18px;
            			color: white;
            			padding: 15px;
         			}

          			.headerBar {
            			padding: 10px;
          			}

          			.select {
            			margin: 21px;
          			}
        		`}</style>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    itemsFetchData: bindActionCreators(itemsFetchData, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(BMDBHeader);