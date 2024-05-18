"use client";

import TopBanner from "@/features/top/components/TopBanner";
import { BaseLayout } from "@/components/Layouts/BaseLayout";
import styled from "@emotion/styled";
import { mockData } from "@/features/top/mockData";
import { BasicChip } from "@/components/Buttons/BasicChip";
import { BasicButton } from "@/components/Buttons/BasicButton";
import { SessionCard } from "@/components/Cards/SessionCard";
import { PASSIONS_NUM_TO_COLORS } from "@/features/common/constant";
import { useEffect } from "react";
import { axiosClient } from "@/utils/libs/axios";

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

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 16px;
`;

export default function Home() {
  useEffect(() => {
    axiosClient.get("tags").then((res) => console.log(res.data));
  }, []);
  return (
    <>
      <TopBanner />
      <BaseLayout>
        <CustomContainer>
          <TagContainer>
            {mockData.tags.map((data, index) => (
              <BasicChip
                key={index}
                text={data.tag_name}
                className="-text-black"
              />
            ))}
          </TagContainer>
          <div>
            <BasicButton
              color="success"
              variant="contained"
              text="セッションを募集する"
              width="100%"
              className="-shadow"
            />
          </div>
          <CardContainer>
            {mockData.sessionCards.map((data, index) => (
              <SessionCard
                key={index}
                userName={data.userName}
                title={data.title}
                tags={data.tags}
                content={data.content}
                width="100%"
                color={PASSIONS_NUM_TO_COLORS[data.passionLevel]}
              />
            ))}
          </CardContainer>
        </CustomContainer>
      </BaseLayout>
    </>
  );
}
