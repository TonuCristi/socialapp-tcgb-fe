import {
  useState,
  type DetailedHTMLProps,
  type InputHTMLAttributes,
} from "react";
import { useFormContext } from "react-hook-form";

import Input from "./Input";
import Icon from "../Icon";

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string;
};

export default function HidePasswordInput({ name, ...props }: Props) {
  const { register } = useFormContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Input
      type={isOpen ? "text" : "password"}
      {...props}
      {...register(name)}
      leftIcon={<Icon type="lock" />}
      rightIcon={isOpen ? <Icon type="closedEye" /> : <Icon type="openedEye" />}
      onRightIconClick={() => setIsOpen((prev) => !prev)}
    />
  );
}
