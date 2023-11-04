import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div>
          <img
            src={location.state.poster_big}
            alt={location.state.title}
            title={location.state.title}
          />
          <h1>{location.state.title}</h1>
          <span>{location.state.year}</span>
          <span>rating: {location.state.rating}</span>
          <ul>
            {location.state.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
          <p>{location.state.summary}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
