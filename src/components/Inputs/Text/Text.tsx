/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FocusEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
} from "react";
import { ContainerInput, InputError, LabelInput } from "./Text.styles";
import { FieldError } from "react-hook-form";

type PropsInputText = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean;
  inputProps?: HTMLAttributes<HTMLDivElement>;
  error?: FieldError;
};

export const InputText = forwardRef(function TextInput(
  { optional, error, inputProps, onFocus, onBlur, ...rest }: PropsInputText,
  ref: LegacyRef<HTMLInputElement>
) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true);
    onFocus?.(event);
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false);
    onBlur?.(event);
  }

  return (
    <ContainerInput {...inputProps}>
      <LabelInput data-state={isFocused ? "focused" : "blurred"}>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...rest}
        />
        {optional ? <span>Opcional</span> : <span>*</span>}
      </LabelInput>
      {error?.message ? (
        <InputError role="alert">{error.message}</InputError>
      ) : null}
    </ContainerInput>
  );
});
