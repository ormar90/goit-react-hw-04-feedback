import { Component } from "react";
// import PropTypes from 'prop-types';
import { StatisticWrapper, StatisticTitle, StatisticItem, StatisticReview } from "./Statistics-block.styled";

export class Statistics extends Component {
    render() {
        return (
            <StatisticWrapper>
                <StatisticTitle>Statistics</StatisticTitle>
                <StatisticItem>Good<StatisticReview>{ this.props.goodReview }</StatisticReview></StatisticItem>
                <StatisticItem>Neutral<StatisticReview>{ this.props.neutralReview }</StatisticReview></StatisticItem>
                <StatisticItem>Bad<StatisticReview>{ this.props.badReview }</StatisticReview></StatisticItem>
            </StatisticWrapper>
        );
    }    
}

// Statistics.propTypes = {
//     StatisticReview: PropTypes.number,
// }