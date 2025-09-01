import PropTypes from "prop-types";

const TextInput = ({ label, name, value, onChange, type, placeholder }) => {
  return (
    <div>
      <label htmlFor={name} className="text-xl font-bold">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border focus:outline-0 focus:border-black rounded-md"
      />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextInput;
