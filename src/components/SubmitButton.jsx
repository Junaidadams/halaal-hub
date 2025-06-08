import PropTypes from "prop-types";
import Spinner from "./Spinner";

const SubmitButton = ({
  complete,
  success,
  isLoading,
  error,
  preSubmissionText,
  postSubmissionText,
  reattempt,
}) => {
  return (
    <button
      disabled={complete && !reattempt}
      type="submit"
      className="bg-richBlack text-white px-4 py-1 ml-auto rounded-sm"
    >
      {complete && success != "" ? (
        <span className="w-fit m-auto">{postSubmissionText}</span>
      ) : (
        <div className="m-auto flex flex-row">
          <span className="w-fit ml-auto mr-2">{preSubmissionText}</span>
          <Spinner isLoading={isLoading} complete={complete} />
        </div>
      )}
    </button>
  );
};

SubmitButton.propTypes = {
  complete: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  preSubmissionText: PropTypes.string.isRequired,
  postSubmissionText: PropTypes.string.isRequired,
  reattempt: PropTypes.bool,
};

export default SubmitButton;
