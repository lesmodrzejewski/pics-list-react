import React from 'react';
import ReactDOM from 'react-dom';
import Unsplash from './Unsplash';
import SearchBar from './SearchBar';
import ShowPics from './ShowPics';

class App extends React.Component {
    state = { images: [] };

    onSearchHit = async (term) => {
        const response = await Unsplash.get('/search/photos', {
            params: { query: term }
        });

        console.log(response);

        this.setState({ images: response.data.results});
    }

    render() {
        return(

            <div>
                <SearchBar onSubmit={this.onSearchHit} />
                <ShowPics images={this.state.images} />
            </div>
        )
    };
}


ReactDOM.render(<App />, document.getElementById('root'));
