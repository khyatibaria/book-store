const Input = (props) => {
  const {
    id,
    name,
    type = "text",
    placeholder,
    label,
    value,
    ref,
    onChange,
  } = props;
  return (
    <div className="input-box">
      <fieldset className="fieldset">
        <input
          className="input"
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          ref={ref}
          onChange={onChange}
        />
        <legend className="legend">
          <span>{label}</span>
        </legend>
      </fieldset>
    </div>
  );
};

export default Input;
