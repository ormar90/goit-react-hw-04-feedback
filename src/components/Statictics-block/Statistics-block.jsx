import { Component } from "react";
// import PropTypes from 'prop-types';
import { StatisticWrapper, StatisticTitle, StatisticItem, StatisticReview } from "./Statistics-block.styled";

export class Statistics extends Component {
    render() {
        return (
            <StatisticWrapper>
                <StatisticTitle>Statistics</StatisticTitle>
                <StatisticItem>Good<StatisticReview>{this.props.changeState.good}</StatisticReview></StatisticItem>
                <StatisticItem>Neutral<StatisticReview>{this.props.changeState.neutral}</StatisticReview></StatisticItem>
                <StatisticItem>Bad<StatisticReview>{this.props.changeState.bad}</StatisticReview></StatisticItem>
            </StatisticWrapper>
        );
    }    
}

// Statistics.propTypes = {
//     StatisticReview: PropTypes.number,
// }