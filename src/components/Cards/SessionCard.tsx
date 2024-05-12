import styled from "@emotion/styled";
import { Card, CardHeader, Avatar, CardContent } from "@mui/material";
import { BasicChip } from "@/components/Buttons/BasicChip";
import { bgColor } from "@/utils/themes/customTheme";
import { theme } from "@/utils/themes/muiTheme";

const CustomCard = styled(Card)<SessionCardStyleProps>`
  width: ${({ width }) => width};
  background: linear-gradient(
    135deg,
    ${({ color_main }) => color_main} 0%,
    ${({ color_dark }) => color_dark} 100%
  );
  border-radius: 0px;
  color: white;
`;

const CustomCardHeader = styled(CardHeader)`
  padding-bottom: 8px;
`;

const CustomCardContent = styled(CardContent)`
  padding: 8px 16px;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 1;
  gap: 10px;
  &.-small {
    font-size: 12px;
  }
  &.-bg-white {
    background: ${bgColor.grey.light};
  }
`;

const CustomHr = styled.hr`
  border-top: none;
  margin: 0 16px;
`;

type SessionCardStyleProps = {
  width: string;
  color_dark: string;
  color_main: string;
};

type SessionCardProps = {
  userName?: string | null;
  title?: string | null;
  created_at?: Date | string;
  tags?: Array<string> | null;
  content?: string | null;
  width?: string;
  color?: Color;
};

export const SessionCard = ({
  userName,
  title,
  tags = null,
  content,
  width = "230px",
  color = "primary",
}: SessionCardProps) => {
  const colorDark = theme.palette[color].dark;
  const colorMain = theme.palette[color].light;
  const avatarChar = userName ? userName.slice(0, 1) : "名";

  return (
    <CustomCard width={width} color_dark={colorDark} color_main={colorMain}>
      <CustomCardHeader
        //   TODO：アップロードした画像との繋ぎ込み
        avatar={<Avatar aria-label="recipe">{avatarChar}</Avatar>}
        title={userName ? userName : "名無しのユーザーさん"}
      />
      <CustomHr />
      <CustomCardContent>{title ? title : "タイトルなし"}</CustomCardContent>
      <CustomCardContent className="-bg-white">
        {tags ? (
          tags?.map((tag, i) =>
            tag ? (
              <BasicChip key={i} text={tag} size="small" color={color} />
            ) : (
              <BasicChip key={i} text="タグなし" size="small" color={color} />
            ),
          )
        ) : (
          <BasicChip text="タグなし" size="small" color={color} />
        )}
      </CustomCardContent>
      <CustomCardContent className="-small">
        {content ? content : "コメントなし"}
      </CustomCardContent>
    </CustomCard>
  );
};
