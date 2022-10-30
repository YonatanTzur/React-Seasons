import './seasonDisplay.css'
import React from 'react';
import ReactDOM from 'react-dom';

const seasonConfig = {
    summer: {
        toReturn: 'Lets hit the ceach',
        iconName: 'sun'
    },
    winter: {
        toReturn: 'It is chilly',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    }
    else {
        return lat > 0 ? 'winter' : 'summer'
    }
};

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth())
    const { toReturn, iconName } = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{toReturn}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay
