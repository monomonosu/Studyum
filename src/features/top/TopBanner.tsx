"use client";

import Link from "next/link";
import styled from "@emotion/styled";
import { BasicButton } from "@/components/Buttons/BasicButton";
import { theme } from "@/utils/themes/muiTheme";

export default function TopBanner() {
  const BannerContainer = styled.div`
    width: 100%;
    background: ${theme.palette.grey[100]};
    padding: 30px;
  `;

  const BannerInner = styled.div`
    max-width: 768px;
    margin: auto;
    text-align: center;
    display: grid;
    row-gap: 20px;
  `;

  const CustomWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  `;

  const CustomLink = styled(Link)`
    width: calc(50% - 15px);
    min-width: 200px;
    margin: 0 auto;
  `;

  return (
    <>
      <BannerContainer>
        <BannerInner>
          <p>
            LearnerChainは学ぶ人同士を繋ぐプラットフォームです。
            <br />
            気軽にもくもく会を開いてみましょう。
          </p>
          <CustomWrapper>
            <CustomLink href="/info">
              <BasicButton
                text="LearnerChainについて"
                color="success"
                variant="contained"
                height="50px"
                className="-shadow"
              />
            </CustomLink>
            <CustomLink href="/info/howto">
              <BasicButton
                text="LearnerChainの使い方"
                color="success"
                variant="contained"
                height="50px"
                className="-shadow"
              />
            </CustomLink>
          </CustomWrapper>
        </BannerInner>
      </BannerContainer>
    </>
  );
}
