      import PropTypes from "prop-types";

      export const FeedbackOptions = ({onLeaveFeedback, options}) =><div > {options.map((el,index)=> <button key={index} name={el} onClick={onLeaveFeedback}>{el}</button>)}
      </div>

      FeedbackOptions.propTypes = {
        options: PropTypes.array,
        onLeaveFeedback: PropTypes.func
      }