import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import Input from "../common/input/Input";

export default function SearchForm() {
  const { setFocus } = useFormContext();

  useEffect(() => {
    setFocus("search");
  }, [setFocus]);

  return (
    <form>
      <Input name="search" placeholder="Search your new friends here..." />
    </form>
  );
}
