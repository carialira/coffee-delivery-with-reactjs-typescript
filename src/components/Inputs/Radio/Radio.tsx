import { InputHTMLAttributes, LegacyRef, forwardRef } from "react";

import { ContainerLabel } from "./Radio.styles";

type PropsInputRadio = InputHTMLAttributes<HTMLInputElement> & {
  isSelected?: boolean;
};

export const Radio = forwardRef(function Radio(
  { children, isSelected = false, ...rest }: PropsInputRadio,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <ContainerLabel $isSelected={isSelected}>
      <input type="radio" ref={ref} {...rest} />
      {children}
    </ContainerLabel>
  );
});
