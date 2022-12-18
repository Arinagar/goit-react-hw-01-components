import PropTypes from 'prop-types';
import {
  StatisticBox,
  StatisticCounter,
  StatisticsList,
  StatisticText,
  StatisticTitle,
} from './Statistics.styled';

export const Statistics = ({ title, statsData }) => {
  return (
    <section className="statistics">
      {{ title } && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {statsData.map(({ id, label, percentage }) => {
          return (
            <StatisticBox key={id}>
              <StatisticText>{label}</StatisticText>
              <StatisticCounter>{percentage}</StatisticCounter>
            </StatisticBox>
          );
        })}
      </StatisticsList>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  statsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
