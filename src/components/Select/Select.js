import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Container>
      <InlineBlock as="p">{displayedValue}</InlineBlock>
      <InlineBlock as={HorizontalGap} />
      <InlineBlock as={Icon} id="chevron-down" />
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
    </Container>
  );
};

const InlineBlock = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const StyledSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  opacity: 0;
`;

const HorizontalGap = styled.div`
  width: 12px;
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 4px;
  padding: 12px;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 2px solid #4374cb;
  }
`;

export default Select;
