import * as React from "react";

type TInput = React.InputHTMLAttributes<HTMLInputElement> & {
  characters?: string;
};

export const Input = ({ characters = "", type = "text", ...props }: TInput) => {
  return <input type={type} placeholder={characters} {...props} />;
};
