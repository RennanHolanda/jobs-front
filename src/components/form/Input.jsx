import PropTypes from 'prop-types'

function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return <div>
    <label htmlFor={name}>{text}</label>
    <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
  </div>
}
Input.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleOnChange: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default Input;

