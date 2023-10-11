import { InputContainer } from "./input-form.styles";

const InputForm = ({ label, id, value, name, type, onChangeHandler }) => {
  return (
    <InputContainer>
      <label for={id}>{label}</label>
      <input
        value={value}
        name={name}
        type={type}
        onChange={onChangeHandler}
        required
      />
    </InputContainer>
  );
};

export default InputForm;
