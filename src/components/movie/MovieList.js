
import React from 'react';
import MovieItem from './MovieItem';

class MovieList extends React.Component {

    renderedList() {
        if(!this.props.movies){
            return(<div> Not Found Movie </div> );
        }

        return (
            this.props.movies.map(movie => {
                return (<MovieItem movie={movie} key={movie.id} onSelectMovie={this.props.onSelectMovie}></MovieItem>);
            })
        );
    };

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderedList()}
            </div>
        );
    }
}

export default MovieList;