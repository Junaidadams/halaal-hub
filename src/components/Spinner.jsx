import PropTypes from "prop-types";
import { RiLoader2Fill } from "react-icons/ri";

const Spinner = ({ isLoading, complete }) => {
  const showSpinner = isLoading && !complete;

  if (!showSpinner) return null;

  return (
    <div className="w-fit my-auto mr-auto ml-2">
      <RiLoader2Fill width={20} height={20} className="m-auto animate-spin" />
    </div>
  );
};

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  complete: PropTypes.bool.isRequired,
};

export default Spinner;
