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
        <div className="container">
          <section className="detail">
            <h1 className="detail__title">{location.state.title}</h1>
            <span className="detail__year">{location.state.year}</span>
            <span className="detail__rating">{location.state.rating}</span>
            <ul className="detail__genres">
              {location.state.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
            <p className="detail__summary">{location.state.summary}</p>
          </section>

          <img
            className="detail__poster"
            src={location.state.poster_big}
            alt={location.state.title}
            title={location.state.title}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
