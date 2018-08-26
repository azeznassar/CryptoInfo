import React from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import Table from './Table';
import Loading from '../common/Loading';
import Pagination from './Pagination';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            currencies: [],
            error: null,
            totalPages: 0,
            page: 1
        };
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.setState({ loading: true });
        fetch(`${API_URL}/cryptocurrencies?page=${this.state.page}&perPage=20`)
        .then(handleResponse)
        .then((data) => {
            this.setState({ 
                currencies: data.currencies,
                totalPages: data.totalPages,
                loading: false
            });
        })
        .catch((error) => {
            this.setState({ error: error.errorMessage, loading: false });
        });
    }

    handlePageClick(direction) {
        let nextPage = this.state.page;
        nextPage = direction === 'next' ? nextPage + 1 : nextPage -1;
        this.setState({ page : nextPage }, () => {
            this.fetchData();
        });
    }

    render() {
        if (this.state.loading) {
            return <div className="loadingContainer"><Loading /></div>
        }

        if (this.state.error) {
            return <div className="error">{this.state.error}</div>
        }
        
        return (
            <div>
            <Table currencies={this.state.currencies} />
            <Pagination 
                page={this.state.page} 
                totalPages={this.state.totalPages} 
                handlePageClick={this.handlePageClick} />
            </div>
        );
    }
}

export default List;