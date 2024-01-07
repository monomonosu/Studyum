import { bgColor } from "@/utils/themes/customTheme";
import styled from "@emotion/styled";
import { Chip } from "@mui/material";
import { ColorLevel } from "@/utils/themes/customTheme";

const CustomClip = styled(Chip)<ChipStyleProps>`
  background: ${({ backGroundColor }) => backGroundColor?.main};
  color: white;
  border-radius: 0px;
  &:hover {
    background: ${({ backGroundColor }) => backGroundColor?.light};
  }
  &.-text-black {
    color: black;
  }
`;

type ChipStyleProps = {
  backGroundColor?: ColorLevel;
};

type ChipProps = {
  text: string;
  backGroundColor?: ColorLevel;
  className?: string;
};

export const BasicChip: React.FC<ChipProps> = ({
  text,
  backGroundColor = bgColor.grey,
  className,
}) => {
  return (
    <CustomClip
      label={text}
      backGroundColor={backGroundColor}
      clickable
      className={className}
    />
  );
};
