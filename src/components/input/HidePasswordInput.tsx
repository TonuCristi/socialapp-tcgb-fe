import {
  useState,
  type DetailedHTMLProps,
  type InputHTMLAttributes,
} from "react";
import { useFormContext } from "react-hook-form";

import Input from "./Input";
import { HiMiniEye, HiMiniEyeSlash, HiMiniLockClosed } from "react-icons/hi2";

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
      leftIcon={<HiMiniLockClosed />}
      rightIcon={isOpen ? <HiMiniEyeSlash /> : <HiMiniEye />}
      onRightIconClick={() => setIsOpen((prev) => !prev)}
    />
  );
}
