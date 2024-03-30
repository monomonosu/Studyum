import styled from "@emotion/styled";
import { Chip } from "@mui/material";

const CustomClip = styled(Chip)`
  color: white;
  border-radius: 0px;
  &.-text-black {
    color: black;
  }
`;

type ChipProps = {
  text: string;
  className?: string;
  size?: "small" | "medium";
  color?: Color;
};

export const BasicChip: React.FC<ChipProps> = ({
  text,
  className,
  size = "medium",
  color,
}) => {
  return (
    <CustomClip
      label={text}
      clickable
      className={className}
      size={size}
      color={color}
    />
  );
};
