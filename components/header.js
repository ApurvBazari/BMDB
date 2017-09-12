import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

class BMDBHeader extends React.Component{
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

export default BMDBHeader;