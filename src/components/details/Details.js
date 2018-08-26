import React from 'react';
import { API_URL } from '../../config';
import Loading from '../common/Loading';
import { handleResponse, changePercent } from '../../helpers';
import './Details.scss';

class Details extends React.Component {
    constructor() {
        super();

        this.state = {
            currency: {},
            loading: false,
            error: null,
        }
    }

    componentDidMount() {
        const currencyId = this.props.match.params.id;
        this.fetchDetails(currencyId);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location.pathname !== nextProps.location.pathname) {
            const newCurrencyId = nextProps.match.params.id;
            this.fetchDetails(newCurrencyId);
        }
    }

    fetchDetails(currencyId) {
        this.setState({ loading: true });

        fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
            .then(handleResponse)
            .then((currency) => {
                this.setState({
                    loading: false, 
                    error: null,
                    currency,
                })
            })
            .catch((error) => {
                this.setState({ loading: false, error: error.errorMessage });
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
            <div className="details">
                <h1 className="detailsHeading">{this.state.currency.name} ({this.state.currency.symbol})</h1>
                <div className="detailsContainer">
                    <div className="detailsItem">
                        Price <span className="detailsValue">$ {this.state.currency.price}</span>
                    </div>
                    <div className="detailsItem">
                        Rank <span className="detailsValue">{this.state.currency.rank}</span>
                    </div>
                    <div className="detailsItem">
                        24H Change <span className="detailsValue">{changePercent(this.state.currency.percentChange24h)}</span>
                    </div>
                    <div className="detailsItem">
                        <span className="detailsTitle">Market Cap</span>
                        <span className="detailDollar">$ </span>
                        {this.state.currency.marketCap}
                    </div>
                    <div className="detailsItem">
                        <span className="detailsTitle">24H Volume</span>
                        <span className="detailDollar">$ </span>
                        {this.state.currency.volume24h}
                    </div>
                    <div className="detailsItem">
                        <span className="detailsTitle">Total supply</span>
                        {this.state.currency.totalSupply}
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;