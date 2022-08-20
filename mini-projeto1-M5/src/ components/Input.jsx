export const Input = (props) => {
  return (
    <label>
      {props.name}:
      <input type={props.type} />
    </label>
  );
};
