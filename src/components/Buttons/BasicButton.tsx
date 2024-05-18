import React from "react";
import { Button } from "@mui/material";
import clsx from "clsx";
import style from "@/styles/components/buttons/basic_button.module.scss";

type SizeType = "small" | "medium" | "large";

const getSize = (size?: SizeType) => {
  switch (size) {
    case "small":
      return style["size-small"];
    case "medium":
      return style["size-medium"];
    case "large":
      return style["size-large"];
    default:
      return style["size-medium"];
  }
};

type ButtonProps = {
  text: string;
  color?: "primary" | "success" | "error";
  variant?: "outlined" | "contained";
  size?: "small" | "medium" | "large";
  width?: string;
  className?: "-shadow" | null;
  onClick?: () => void;
};

export const BasicButton: React.FC<ButtonProps> = ({
  text,
  color,
  variant,
  size = "medium",
  width = "100%",
  className = null,
  onClick,
}) => {
  return (
    <Button
      color={color}
      variant={variant}
      size={size}
      className={clsx(
        style.custom_button,
        getSize(size),
        className ? style[className] : null,
      )}
      onClick={onClick}
      style={{ width: width }}
    >
      {text}
    </Button>
  );
};
