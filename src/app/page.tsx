import TopBanner from "@/features/top/components/TopBanner";
import { Button } from "@mui/material";
// import { BaseLayout } from "@/components/Layouts/BaseLayout";
// import styled from "@emotion/styled";
// import { mockData } from "@/features/top/mockData";
// import { BasicChip } from "@/components/Buttons/BasicChip";
// import { BasicButton } from "@/components/Buttons/BasicButton";
// import { SessionCard } from "@/components/Cards/SessionCard";
// import { PASSIONS_NUM_TO_COLORS } from "@/features/common/constant";
// import { useEffect } from "react";
// import { axiosClient } from "@/utils/libs/axios";

// const CustomContainer = styled.div`
//   padding: 30px 0;
//   display: grid;
//   row-gap: 30px;
// `;

// const TagContainer = styled.div`
//   gap: 20px;
//   display: flex;
//   flex-wrap: wrap;
//   flex-shrink: 1;
// `;

// const CardContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
//   gap: 16px;
// `;

type Repo = {
  id: number;
  userName: string;
  title: string;
  tags: string[];
  content: string;
  passionLevel: number;
  created_at: string;
};

async function getServerSideProps() {
  const res = await fetch("http://localhost:8080/api/sessions");
  const repo: Repo[] = await res.json();
  return repo;
}

// export const getServerSideProps = (async () => {
//   // Fetch data from external API
//   const res = await fetch('sessions')
//   const repo: Repo = await res.json()
//   // Pass data to the page via props
//   return { props: { repo } }
// }) satisfies GetServerSideProps<{ repo: Repo }>

export default async function Home() {
  const repo = await getServerSideProps();
  return (
    <>
      <TopBanner />
      <Button>{repo[0].id}</Button>
    </>
  );
}

// export default function Home() {
//   return (
//     <>
//       <TopBanner />
//       <BaseLayout>
//         <CustomContainer>
//           <TagContainer>
//             {mockData.tags.map((data, index) => (
//               <BasicChip
//                 key={index}
//                 text={data.tag_name}
//                 className="-text-black"
//               />
//             ))}
//           </TagContainer>
//           <div>
//             <BasicButton
//               color="success"
//               variant="contained"
//               text="セッションを募集する"
//               height="50px"
//               width="100%"
//               className="-shadow"
//             />
//           </div>
//           <CardContainer>
//             {mockData.sessionCards.map((data, index) => (
//               <SessionCard
//                 key={index}
//                 userName={data.userName}
//                 title={data.title}
//                 tags={data.tags}
//                 content={data.content}
//                 width="100%"
//                 color={PASSIONS_NUM_TO_COLORS[data.passionLevel]}
//               />
//             ))}
//           </CardContainer>
//         </CustomContainer>
//       </BaseLayout>
//     </>
//   );
// }
