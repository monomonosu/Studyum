"use client";

import TopBanner from "@/features/top/components/TopBanner";
import { BaseLayout } from "@/components/Layouts/BaseLayout";
import styled from "@emotion/styled";
import { mockData } from "@/features/top/mockData";
import { BasicChip } from "@/components/Buttons/BasicChip";
import { BasicButton } from "@/components/Buttons/BasicButton";

const CustomContainer = styled.div`
  padding: 30px 0;
  display: grid;
  row-gap: 30px;
`;

const TagContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 1;
`;

export default function Home() {
  return (
    <>
      <TopBanner />
      <BaseLayout>
        <CustomContainer>
          <TagContainer>
            {mockData.tags.map((data, index) => (
              <BasicChip key={index} text={data.tag_name} />
            ))}
          </TagContainer>
          <div>
            <BasicButton
              color="success"
              variant="contained"
              text="セッションを募集する"
              height="50px"
              width="100%"
              className="-shadow"
            />
          </div>
        </CustomContainer>
      </BaseLayout>
    </>
  );
}
