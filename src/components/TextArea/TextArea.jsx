const TextArea = ({ label, name, rows = 5, cols, value, onChange }) => {
  const onTextChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="form-controls">
      <label className="label">{label}</label>

      <textarea
        name={name}
        value={value}
        onChange={onTextChange}
        rows={rows}
        cols={cols}
      ></textarea>
    </div>
  );
};

export default TextArea;
