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
          <p className="language">{this.props.movie.original_language}</p>
          <p className="title">{this.props.movie.title}</p>
        </div>
        <div className="imageHeader">
          <i className="releaseDate">{this.props.movie.release_date}</i>
          <div className="icons">
            <i className="fa fa-heart" aria-hidden="true"></i>
            <i className="fa fa-comment" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="vote_count">{this.props.movie.vote_count}</i>
          </div>
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
            padding:5px;
          }

          .icons {
            position: absolute;
            top: 0px;
            right: 0px;
            padding: 5px;
          }

          .releaseDate {
            position: absolute;
            top: 0px;
            left: 0px;
            padding: 5px;
          }

          .fa {
            padding:3px;
          }

          .language {
            font-size: 14px;
            font-variant: small-caps
          }

          .title { 
            margin:0px;
            font-size: 20px;
          }  
        `}</style>

      </div>
    );
  }
}
export default MovieCard;