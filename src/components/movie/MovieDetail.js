
import React from 'react';

const MovieDetail = ({movie}) => {

    if(!movie){
        return(
            <div>Not Selected Movie</div>
        );
    }
    return (
        <div>
            <div className="ui segment">
            <img 
                className="ui image" 
                alt={movie.title} 
                src={movie.poster}
             />
                <h4 className="ui header">{movie.title}</h4>
                <p>{movie.year}</p>
            </div>
        </div>
    );
};

export default MovieDetail;