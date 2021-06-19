const Button = ({ label, onClick, submit = false }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button type={submit ? "submit" : "button"} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
