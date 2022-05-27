import PropTypes from 'prop-types';


// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = ({ children }) => (
  <>
    {children}
  </>
);

MinimalLayout.propTypes = {
  children: PropTypes.node
};

export default MinimalLayout;
