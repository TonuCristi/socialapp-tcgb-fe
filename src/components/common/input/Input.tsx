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
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
};

export default function Input({
  name,
  leftIcon,
  rightIcon,
  onLeftIconClick,
  onRightIconClick,
  ...props
}: Props) {
  const { register } = useFormContext();

  return (
    <InputWrapper>
      {leftIcon && (
        <StyledLeftIcon onClick={onLeftIconClick}>{leftIcon}</StyledLeftIcon>
      )}
      <StyledInput {...props} {...register(name)} />
      {rightIcon && (
        <StyledRightIcon onClick={onRightIconClick}>
          {rightIcon}
        </StyledRightIcon>
      )}
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius["3xl"]};
  color: ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.secondary};
  width: ${({ theme }) => theme.width.full};
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StyledInput = styled.input`
  outline: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  width: ${({ theme }) => theme.width.full};

  &::-webkit-calendar-picker-indicator {
    filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(180deg);
    cursor: pointer;
  }
`;

const StyledLeftIcon = styled.div`
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
`;

const StyledRightIcon = styled.div`
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
`;
