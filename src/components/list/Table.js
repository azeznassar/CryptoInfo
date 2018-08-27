import React from 'react';
import { withRouter } from 'react-router-dom';
import { changePercent } from '../../helpers';
import PropTypes from 'prop-types';
import './Table.scss';

const Table = (props) => {
    return (
        <div className="tableContainer">
        <table className="table">
            <thead className="tableHead">
                <tr>
                    <th>Cryptocurrency</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>24H Change</th>
                </tr>
            </thead>
            <tbody className="tableBody">
                {props.currencies.map((currency) => (
                <tr key={currency.id} onClick={() => props.history.push(`/currency/${currency.id}`)}>
                    <td>
                        <span className="tableRank">{currency.rank}</span>
                        {currency.name}
                    </td>
                    <td>
                        <span className="tableDollar">$</span>
                        {currency.price}
                    </td>
                    <td>
                        <span className="tableDollar">$</span>
                        {currency.marketCap}
                    </td>
                    <td>
                        {changePercent(currency.percentChange24h)}
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

Table.propTypes = {
    currencies: PropTypes.array.isRequired, 
    history: PropTypes.object.isRequired
}

export default withRouter(Table);