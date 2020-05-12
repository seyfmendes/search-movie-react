
import React from 'react';
import './MovieItem.css';

const MovieItem = ({ movie, onSelectMovie }) => {

    return (
        <div className="image-item item" onClick={() => onSelectMovie(movie)}>
            <img
                className="ui image"
                alt={movie.title}
                src={movie.poster}
            />
            <div className="content">
                <div className="header">{movie.title}</div>
            </div>
        </div>
    );

};

export default MovieItem;