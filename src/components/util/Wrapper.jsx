import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-mainLight dark:bg-mainDark">
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
