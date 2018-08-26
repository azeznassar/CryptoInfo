import React from 'react';
import PropTypes from 'prop-types';
import './Loading.scss';

const Loading = (props) => {
    return <div className="loading" style={{ width: props.width, height: props.height }} />
}

Loading.defaultProps = {
    height: '28px',
    width: '28px'
};

Loading.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string
}

export default Loading;