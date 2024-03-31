import { StyledTextField } from "./styles";

export const Input = ({ id, name, onChange, label, type }) => {
  return (
    <StyledTextField
      autoComplete="off"
      id={id}
      name={name}
      label={label}
      onChange={onChange}
      required
      type={type}
      variant="filled"
    />
  );
};
