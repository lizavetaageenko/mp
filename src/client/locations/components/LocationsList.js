import React from 'react';

import './LocationsList.scss';

import Location from './Location';

export default class LocationsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeLocationIndex: 0
        };
    }

    componentDidMount() {
        this.timerInterval = setInterval(() => {
            const { activeLocationIndex } = this.state;
            const { locations } = this.props;
            const nextLocationIndex = (activeLocationIndex + 1) % locations.length;

            this.setState({
                activeLocationIndex: nextLocationIndex
            });
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval);
    }

    render() {
        const { locations } = this.props;
        const { activeLocationIndex } = this.state;

        return (
            <div className="locations">
                {
                    locations.map(({ id, name }, index) => (
                        <Location
                            key={id}
                            name={name}
                            className={index === activeLocationIndex ? 'location-active' : ''}
                        />
                    ))
                }
            </div>
        );
    }
}

LocationsList.propTypes = {
    locations: React.PropTypes.array
};

LocationsList.defaultProps = {
    locations: [
        { id: '1', name: 'Hospital' },
        { id: '2', name: 'Police' },
        { id: '3', name: 'School' },
        { id: '4', name: 'Office' },
        { id: '5', name: 'Theatre' }
    ]
};
