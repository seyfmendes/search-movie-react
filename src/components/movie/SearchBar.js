
import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    searchTerm = (event) => {
        this.setState({ term: event.target.value });
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.onSubmitForm(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment" >
                <form className="ui form" onSubmit={this.onSubmitForm}>
                    <div className="field" >
                        <label>Movie Search</label>
                        <input type="text" value={this.state.term} onChange={this.searchTerm} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;