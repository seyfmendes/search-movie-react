
import React from 'react';
import SearchBar from './movie/SearchBar';
import MovieList from './movie/MovieList';
import movieApi from '../api/movieApi';
import MovieDetail from './movie/MovieDetail';



class App extends React.Component {

    state = { movies: [], selectedMovie: null };

    componentDidMount() {
        this.onSubmitTerm('movie');
    }


    onSubmitTerm = async term => {
        
        const response = await movieApi.get(`/search/${term}`);

        this.setState({
            movies: response.data,
            selectedMovie: response.data[0]
        });
    };

    onSelectMovie = (movie) => {
        this.setState({ selectedMovie: movie });
    };


    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmitForm={this.onSubmitTerm} />
                <div className="ui grid">
                    <div className="ui row">

                        <div className="eleven wide column" >
                            <MovieDetail movie={this.state.selectedMovie} />
                        </div>

                        <div className="five wide column" >
                            <MovieList movies={this.state.movies} onSelectMovie={this.onSelectMovie}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;