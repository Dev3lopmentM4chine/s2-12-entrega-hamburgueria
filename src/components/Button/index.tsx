import { StyledButton } from "./style.js";

interface IButtonProps {
  children: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}


export const Button = ({ children, type, onClick }: IButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
