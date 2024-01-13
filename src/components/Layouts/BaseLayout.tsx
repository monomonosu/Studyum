"use client";
// デフォルトのページ幅を768pxに狭めるためのレイアウト

import styled from "@emotion/styled";

export const BaseLayout = styled("div")`
  max-width: 768px;
  margin: auto;
  min-height: calc(100vh - 70px);
  overflow: scroll;
  &.-flex {
    display: flex;
  }
`;
