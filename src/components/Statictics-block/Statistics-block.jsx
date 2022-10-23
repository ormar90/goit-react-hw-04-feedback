import PropTypes from 'prop-types';
import {
  StatisticItem,
  StatisticReview,
} from './Statistics-block.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticItem>
        Good<StatisticReview>{good}</StatisticReview>
      </StatisticItem>
      <StatisticItem>
        Neutral<StatisticReview>{neutral}</StatisticReview>
      </StatisticItem>
      <StatisticItem>
        Bad<StatisticReview>{bad}</StatisticReview>
      </StatisticItem>
      <StatisticItem>
        Total<StatisticReview>{total}</StatisticReview>
      </StatisticItem>
      <StatisticItem>
        Positive feedback
        <StatisticReview>
          {isNaN(positivePercentage) ? 0 : positivePercentage}%
        </StatisticReview>
      </StatisticItem>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
