import { Component } from "react";
import PropTypes from "prop-types";
import { StatisticItem, StatisticReview } from "./Statistics-block.styled";

export class Statistics extends Component {
  render() {
    return (
      <>
        <StatisticItem>
          Good<StatisticReview>{this.props.good}</StatisticReview>
        </StatisticItem>
        <StatisticItem>
          Neutral<StatisticReview>{this.props.neutral}</StatisticReview>
        </StatisticItem>
        <StatisticItem>
          Bad<StatisticReview>{this.props.bad}</StatisticReview>
        </StatisticItem>
        <StatisticItem>
          Total<StatisticReview>{this.props.total}</StatisticReview>
        </StatisticItem>
        <StatisticItem>
          Positive feedback
          <StatisticReview>{this.props.positivePercentage}%</StatisticReview>
        </StatisticItem>
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
