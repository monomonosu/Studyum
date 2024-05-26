"use client";

import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

type SizeType = "small" | "medium" | "large";

const getSize = (size: SizeType) => {
  if (size === "large") {
    return `
      padding-top: 16px;
      padding-bottom: 16px;
    `;
  }

  if (size === "medium") {
    return `
      padding-top: 12px;
      padding-bottom: 12px;
    `;
  }

  return `
    padding-top: 8px;
    padding-bottom: 8px;
  `;
};

const CustomButton = styled(Button)<ButtonStyleProps>`
  color: white;
  text-transform: none;
  border-radius: 0;
  ${({ size }) => `${getSize(size)}`}
  width: ${({ width }) => width};
  flex-grow: 1;
  &.-shadow {
    box-shadow: 4px 4px 4px rgb(0, 0, 0, 0.25);
  }
`;

type ButtonStyleProps = {
  size: SizeType;
  width?: string;
  height?: string;
};

type ButtonProps = {
  text: string;
  color?: "primary" | "success" | "error";
  variant?: "outlined" | "contained";
  size?: SizeType;
  width?: string;
  className?: string;
  onClick?: () => void;
};

export const BasicButton: React.FC<ButtonProps> = ({
  text,
  color,
  variant,
  size = "medium",
  width = "100%",
  className,
  onClick,
}) => {
  return (
    <CustomButton
      color={color}
      variant={variant}
      size={size}
      width={width}
      className={className}
      onClick={onClick}
    >
      {text}
    </CustomButton>
  );
};
