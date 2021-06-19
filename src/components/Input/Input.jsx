import "./Input.css";

const Input = ({ value, label, onChange, name }) => {
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
      />
    </div>
  );
};

export default Input;
