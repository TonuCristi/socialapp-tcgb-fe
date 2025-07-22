import styled from "styled-components";

import Input from "../../input/Input";

export default function SearchForm() {
  return (
    <StyledForm>
      <Input name="search" placeholder="Search your new friends here..." />
    </StyledForm>
  );
}

const StyledForm = styled.form``;
