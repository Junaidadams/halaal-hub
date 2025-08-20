import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
  return (
    <div className="flex min-h-screen -mt-[56px] bg-eggshell dark:bg-richBlack">
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
