export interface ButtonProps {
  varient: "primary" | "secondary";
  buttonText: string;
  onClickHandler?: () => void;
  className?: string;
}
