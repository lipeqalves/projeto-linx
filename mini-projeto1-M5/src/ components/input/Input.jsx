import "./styles.css"
export const Input = (props) => {
  return (
    <label className="input">
      {props.name}
      <input type={props.type} />
    </label>
  );
};
