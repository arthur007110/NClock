import { InputComponent } from "./styles";

type InputProps = {
  placeholder: string;
  disabled?: boolean;
  bolder?: boolean;
}

export default function Input(props: InputProps) {
  const { placeholder, disabled, bolder } = props;

  return (
    <InputComponent>
      <input type="text" color={bolder ? 'bolder' : ''} placeholder={placeholder} disabled={disabled} />
    </InputComponent>
  );
}