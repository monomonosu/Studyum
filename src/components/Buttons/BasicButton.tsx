"use client";

import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const CustomButton = styled(Button)<ButtonStyleProps>`
  color: white;
  text-transform: none;
  border-radius: 0;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  flex-grow: 1;
  &.-shadow {
    box-shadow: 4px 4px 4px rgb(0, 0, 0, 0.25);
  }
`;

type ButtonStyleProps = {
  width?: string;
  height?: string;
};

type ButtonProps = {
  text: string;
  color?: "primary" | "success" | "error";
  variant?: "outlined" | "contained";
  width?: string;
  height?: string;
  className?: string;
  onClick?: () => void;
};

export const BasicButton: React.FC<ButtonProps> = ({
  text,
  color,
  variant,
  width = "100%",
  height,
  className,
  onClick,
}) => {
  return (
    <CustomButton
      color={color}
      variant={variant}
      width={width}
      height={height}
      className={className}
      onClick={onClick}
    >
      {text}
    </CustomButton>
  );
};
