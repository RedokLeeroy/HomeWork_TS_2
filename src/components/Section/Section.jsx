import PropTypes from "prop-types"
export const Section = ({title, children}) => <section>
    <h2>{title}</h2>
    <div>{children}</div>
</section>

         Section.propTypes = {
          title: PropTypes.string,
          chilren: PropTypes.node
      }