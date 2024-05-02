import "./Button.scss";

const Button = ({ onClick, type, size, children }) => {
  let buttonClass = "button";
  if (type) {
    buttonClass += ` ${type}`;
  } else {
    buttonClass += ` primary`;
  }
  if (size) {
    buttonClass += ` ${size}`;
  } else {
    buttonClass += ` medium`;
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
