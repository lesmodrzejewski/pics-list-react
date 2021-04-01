import React from 'react';


class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (e) => {
        this.setState({ term: e.target.value });
        console.log(this.state.term);
    };

    onSubmitChange = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };


    render() {
        return(
            <div>
                <form onSubmit={this.onSubmitChange} style={{ margin: '5px'}}>
                    <label>What pics are you thinking of...?</label>
                    <br/>
                    <input onChange={this.onInputChange} type="text" style={{ marginTop: '10px', marginBottom: '10px'}}/>
                </form>
            </div>
        )
    };
}



export default SearchBar;