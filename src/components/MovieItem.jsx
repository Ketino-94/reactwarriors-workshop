import React, { Component } from "react";

// const MovieItem = new React.Component()
export default class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      showOverview: false,
      like: false,
      count: false
    };
  }

  addLike() {
    this.setState({
      like: true
    });
    this.props.increaseLike();
  }

  unLike = () => {
    this.setState({
      like: false
    });
    this.props.decreaseLike();
  };
  Favour = (id) => {
    this.setState({
      count: true
    });
    this.props.favMovie();
    this.props.addFavourite(id)
  };

  unFavour = () => {
    this.setState({
      count: false
    });
    this.props.unfavMovie();
  };


  render() {
    const {id} = this.props.item
    const templateOverview = () => {
      if (this.state.showOverview) {
        return <p>{this.props.item.overview}</p>;
      } else {
        return null;
      }
    };
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${this.props.item
            .backdrop_path || this.props.item.poster_path}`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{this.props.item.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {this.props.item.vote_average}</p>
          </div>
          <button
            onClick={() => {
              this.setState({
                showOverview: false
              });
            }}
          >
            Hide overview
          </button>
          <button
            onClick={() => {
              this.setState({
                showOverview: true
              });
            }}
          >
            Show overview
          </button>
          {templateOverview()}
          <div style={{ marginTop: "15px" }}>
            {this.state.like ? (
              <button className="btn btn-primary" onClick={this.unLike}>
                UnLike
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={this.addLike.bind(this)}
              >
                Like
              </button>
            )}
          </div>
          <div style={{ marginTop: "15px" }}>
            {this.state.count ? (
            <button onClick={this.unFavour}>UnFavourite </button>
          ) : (
            <button onClick={this.Favour.bind(this, id)}>Favourite </button>
          )}
        </div>
        </div>
      </div>
    );
  }
}
