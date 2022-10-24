import { InputComponent } from "./styles";

type InputProps = {
  placeholder: string;
  disabled?: boolean;
}

export default function Input(props: InputProps) {
  const { placeholder, disabled } = props;

  return (
    <InputComponent>
      <input type="text" placeholder={placeholder} disabled={disabled} />
    </InputComponent>
  );
}