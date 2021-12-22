/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  large: {
    height: 24,
    padding: 4,
    radius: 8,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
};

const ProgressBar = ({
  value,
  size = "small",
  ariaTextValue = "Progress bar",
}) => {
  return (
    <BarBackground
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuetext={ariaTextValue}
      aria-valuemax="100"
      {...sizes[size]}
    >
      <Bar value={value} radius={sizes[size].radius} />
    </BarBackground>
  );
};

const BarBackground = styled.div`
  position: relative;
  width: 100%;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: ${(props) => props.height}px;
  padding: ${(props) => props.padding}px;
  border-radius: ${(props) => props.radius}px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: ${(props) => props.value}%;
  border-radius: ${(props) => {
    if (props.value > 99.8) {
      return `${props.radius}px`;
    }

    return `${props.radius}px 0px 0px ${props.radius}px`;
  }};
  height: 100%;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
