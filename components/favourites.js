import React from 'react'
import Link from 'next/link'
import {connect} from 'react-redux'\

class Favourites extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		console.log(this.props.favourites)
		return (
			<div>
				<p>Favourite Movies</p>				
			</div>
		)
	}
}

export default connect(null, null)(Favourites);
/*
export default () => (
	<div>
		<p>In development process!!</p>
		<Link href="/">Goto Home</Link>
	</div>
)*/