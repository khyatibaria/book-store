import "./Radio.css";
const Radio = (props) => {
  const { label, labelPosition, onChange = () => {} } = props;
  return (
    <div className="radio-container">
      {labelPosition === "before" && (
        <lable className="radio-label">{label}</lable>
      )}
      <input className="radio-input" type="radio" onChange={onChange} />
      {!labelPosition && <lable className="radio-label">{label}</lable>}
    </div>
  );
};
export default Radio;
