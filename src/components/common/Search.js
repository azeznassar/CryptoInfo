import React from 'react';
import { withRouter } from 'react-router-dom';
import Loading from './Loading';
import { API_URL } from '../../config';
import { handleResponse } from '../../helpers';

import './Search.scss';

class Search extends React.Component {
    constructor() {
        super()

        this.state = {
            results: [],
            query: '',
            loading: false
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleInput(e) {
        const query = e.target.value;
        this.setState({ query });

        if (!query) {
            return '';
        }

        this.setState({ loading: true });
        
        fetch(`${API_URL}/autocomplete?searchQuery=${query}`)
            .then(handleResponse)
            .then((result) => {
                this.setState({ loading: false, results: result });
            })
            .catch((error) => {
                //TODO
                console.log(error);
            })
    }

    handleRedirect(currency) {
        this.setState({
            query: '',
            result: []
        });

        this.props.history.push(`/CryptoInfo/currency/${currency}`);
    }

    renderResults() {
        if(!this.state.query) {
            return '';
        }

        if (this.state.results.length > 0) {
            return (
                <div className="searchResultContainer">
                    {this.state.results.map(result => (
                        <div key={result.id} onClick={() => this.handleRedirect(result.id)} className="searchResult">
                            {result.name} ({result.symbol})
                        </div>
                    ))}
                </div>
            );
        }

        if (!this.state.loading) {
            return (
                <div className="searchResultContainer">
                    <div class="searchNoResult">No results found.</div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="search">
                <span className="searchIcon" />
                <input 
                    className="searchInput" 
                    type="text" 
                    placeholder="Currency name"
                    value={this.state.query}
                    onChange={this.handleInput}
                />
                {this.state.loading && <div className="searchLoading">
                    <Loading width="12px" height="12px" />
                </div>}
    
                {this.renderResults()}
            </div>
        );
    }
}

export default withRouter(Search);