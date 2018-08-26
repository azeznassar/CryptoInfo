import React from 'react';

export const handleResponse = (response) => {
    return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
    });
}

export const changePercent = (p) => {
    if (p > 0) {
        return <span className="percentRaised">{p}% &uarr;</span>
    } else if (p < 0) {
        return <span className="percentFallen">{p}% &darr;</span>
    } else {
        return <span>{p}%</span>
    }
}