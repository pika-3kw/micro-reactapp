import "./Input.css";

const Input = ({ value, label, onChange, name, placeholder }) => {
  const onTextChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="form-controls">
      <label className="label">{label}</label>
      <input
        name={name}
        className="input"
        value={value}
        onChange={onTextChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
