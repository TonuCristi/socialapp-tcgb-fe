import type { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export default function Input({ leftIcon, rightIcon, name, ...props }: Props) {
  const { register } = useFormContext();

  return (
    <InputWrapper>
      {leftIcon && leftIcon}
      <StyledInput {...props} {...register(name)} />
      {leftIcon && rightIcon}
    </InputWrapper>
  );
}

const InputWrapper = styled.div``;

const StyledInput = styled.input`
  outline: none;
  background: none;
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius["3xl"]};
  padding: ${({ theme }) => theme.spacing.sm};
  width: 100%;
`;
