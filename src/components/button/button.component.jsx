import { DefaultButton, GoogleButton, InvertedButton } from "./button.styles";

const ButtonTypes = {
  default: DefaultButton,
  reversed: InvertedButton,
  google: GoogleButton,
};
const Button = ({ type, value, btnType, onClick }) => {
  const CustomButton = btnType;
  return (
    <CustomButton
      type={`${type}`}      
      onClick={onClick}
    >
      {value}
    </CustomButton>
  );
};
export { ButtonTypes };
export default Button;
