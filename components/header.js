import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import {itemsFetchData} from '../actions/items'

class BMDBHeader extends React.Component{
  constructor() {
    super()
    this.state = {
      search: false,
      inputValue: ''
    }
  }

  toggleSearch = (e) => {
    this.setState({
      search: this.state.search===false ? true : false  
    });
  }

  handleInput = (e) => {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&query=${e.target.value}&page=1&include_adult=false`
    this.setState({
      inputValue: e.target.value
    });
    this.props.itemsFetchData(url);
  }

  handleHomepage = (e) => {
    let url = 'https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}';
    this.props.itemsFetchData(url);    
  }

	render () {
		let normalHeader = (
      <div className="headerLinks">
        <Link href="/favourites"><a className="link linkFavourite">FAVOURITES</a></Link>
        <Link href="/"><a className="link linkPopular">POPULAR</a></Link>
        <i className="fa fa-search" aria-hidden="true" onClick={this.toggleSearch}></i>
        <style jsx>{`
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
        `}</style>
      </div>
    )

    let searchHeader = (
      <div className="headerLinks">
        <input type="text" value={this.state.inputValue} placeholder="Search..." onChange={this.handleInput}></input>
        <i className="fa fa-times" aria-hidden="true" onClick={this.toggleSearch}></i>
        <style jsx>{`
          .headerLinks {
                  padding: 5px;
                  position: absolute;
                  right: 5px
                }
        `}</style>
      </div>
    )

    let headerData = this.state.search ? searchHeader : normalHeader;
    
    return(
			<div>
				<Head>
          			<title>BMDB</title>
          			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        		</Head>
        		<div className="appHeader">
                <Link href="/"><a onClick={this.handleHomepage}><img src="/static/logo.png" onClick={this.handleHomepage}></img></a></Link>
                {headerData}
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