import React from 'react'

class MovieCard extends React.Component { 
  // static async getInitialProps() {
  //   const res = await axios.get(`https://image.tmdb.org/t/p/w300${this.props.movie.poster_path}`);
  //   return {
  //     image: res.data
  //   }
  // }

  constructor(props) {
    super(props);
    this.getImage = this.getImage.bind(this);
  }

  getImage(imagePath) {
    return `https://image.tmdb.org/t/p/w300${imagePath}`;
  }

  render () {
    return (
      <div className="movieCard">
        <img className="movieImage" alt={this.props.movie.title} src={this.getImage(this.props.movie.poster_path)} />
        <div className="imageTitle">
          <p className="title">{this.props.movie.title}</p>
        </div>
        <style jsx>{`
          .movieCard {
            display: block;
            margin: 10px;
            border: 1px solid #ccc;
            float: left;
            width: 301px;
            height: 345px;
            position: relative;
          }

          .movieImage {
            position: relative;
            width: 100%;
            height: 100%;
          }
          .movieCard:hover {
            border: 1px solid #777;
          }

          .imageTitle {
            position:absolute; /* absolute position (so we can position it where we want)*/
            bottom:0px;
            left:0px;
            width:100%;
            color:white;
            opacity:0.6;
          }
          .title { 
            padding:10px;
            margin:0px;
            font-size: 30px;
          }  
        `}</style>

      </div>
    );
  }
}
export default MovieCard;