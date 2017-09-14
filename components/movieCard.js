import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

class MovieCard extends React.Component { 
  constructor(props) {
    super(props);
    this.getImage = this.getImage.bind(this);
  }

  getImage = (imagePath) => {
    return `https://image.tmdb.org/t/p/w300${imagePath}`;
  }

  handleLike = () => {
    let favouriteMovies = localStorage.getItem("favouriteMovies") ? JSON.parse(localStorage.getItem("favouriteMovies")) : [];
    favouriteMovies[favouriteMovies ? favouriteMovies.length : 0] = this.props.movie;
    localStorage.setItem("favouriteMovies", JSON.stringify(favouriteMovies));
  }

  handleDisike = () => {
    let favouriteMovies =localStorage.getItem('favouriteMovies') ? JSON.parse(localStorage.getItem('favouriteMovies')) : [];
    let newList = [];
    if (favouriteMovies) {
      favouriteMovies.forEach((movie) => {
        if (movie.id != this.props.movie.id) {
          newList.push(movie);
        }
      });
    }
    localStorage.setItem("favouriteMovies", JSON.stringify(newList));
    this.props.handleDislike(this.props.movie);
  }

  render () {
    let likeButton;
      if (this.props.isLiked) {
        likeButton = <i className="fa fa-heart-o fa-heart-like" aria-hidden="true" onClick={this.handleDisike}></i>
      } else {
        likeButton = <i className="fa fa-heart" aria-hidden="true" onClick={this.handleLike}></i>
      }
    return (
      <div className="movieCard" key={this.props.key}>
        <img className="movieImage" alt={this.props.movie.title} src={this.getImage(this.props.movie.poster_path)} />
        <div className="imageTitle">
          <p className="language">{this.props.movie.original_language}</p>
          <p className="title">{this.props.movie.title}</p>
        </div>
        <div className="imageHeader">
          <i className="releaseDate">{this.props.movie.release_date}</i>
          <div className="icons">
            {likeButton}
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
            padding:5px;
          }

          .icons {
            position: absolute;
            top: 0px;
            right: 0px;
            padding: 5px;
            font-size: 12px;
            color: white;
          }

          .releaseDate {
            position: absolute;
            top: 0px;
            left: 0px;
            padding: 5px;
            color: white;
          }

          .fa {
            padding:3px;
          }

          .fa>fa-heart>fa-heart-like {
            color: red;
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

const mapStateToProps = (state) => {
    return {
      favourites: state.addFavourite
    }
};

export default connect(mapStateToProps, null)(MovieCard);