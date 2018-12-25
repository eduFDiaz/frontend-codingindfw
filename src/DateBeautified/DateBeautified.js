import React from 'react';
import Moment from 'react-moment';

export default class DateBeautified extends React.Component {
    render() {
        return (
            <Moment fromNow>{this.props.dateToFormat}</Moment>
        );
    }
}
