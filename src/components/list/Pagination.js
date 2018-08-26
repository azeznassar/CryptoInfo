import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';

const Pagination = (props) => {

    return (
        <div className="pagination">
            <button 
                onClick={() => props.handlePageClick('previous')} 
                className="paginationButton"
                disabled={props.page <= 1}
            >&larr;</button>
            <span className="paginationInfo">
                page <span className="numbers">{props.page}</span> of <span className="numbers">{props.totalPages}</span>
            </span>
            <button 
                onClick={() => props.handlePageClick('next')} 
                className="paginationButton"
                disabled={props.page >= props.totalPages}
            >&rarr;</button>
        </div>
    );
}

Pagination.propTypes = {
    totalPages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    handlePageClick: PropTypes.func.isRequired
}

export default Pagination;