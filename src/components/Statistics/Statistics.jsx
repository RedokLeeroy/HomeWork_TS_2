      import PropTypes from "prop-types";
      export const Statistics = ({good, neutral, bad, total, percentage}) => <div>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Total:{total}</p>
        <p>Positive feedback:{percentage}%</p>
      </div>

         Statistics.propTypes = {
          good: PropTypes.number,
          neutral: PropTypes.number,
          bad: PropTypes.number,
          total: PropTypes.number,
          percentage: PropTypes.number
      }