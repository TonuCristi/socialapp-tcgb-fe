import type { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

type Props = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  name: string;
};

export default function Textarea({ name, ...props }: Props) {
  const { register } = useFormContext();

  return <StyledTextarea {...props} {...register(name)} />;
}

const StyledTextarea = styled.textarea`
  outline: none;
  background: none;
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.sm};
  width: ${({ theme }) => theme.width.full};
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
`;
