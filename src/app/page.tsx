import TopBanner from "@/features/top/components/TopBanner";
import { BaseLayout } from "@/components/Layouts/BaseLayout";
import { BasicChip } from "@/components/Buttons/BasicChip";
import { BasicButton } from "@/components/Buttons/BasicButton";
import { SessionCard } from "@/components/Cards/SessionCard";
import { PASSIONS_NUM_TO_COLORS } from "@/features/common/constant";
import style from "@/styles/features/top/top.module.scss";

type SessionsResponse = {
  id: number;
  userName: string;
  title: string;
  tags: string[];
  content: string;
  passionLevel: number;
  created_at: string;
};

type TagsResponse = {
  tags: string[];
};

async function getServerSideProps() {
  const sessionsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}sessions`);
  const tagsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}tags`);
  const sessionsJson: SessionsResponse[] = await sessionsRes.json();
  const tagsJson: TagsResponse = await tagsRes.json();
  return { sessions: sessionsJson, tags: tagsJson };
}

export default async function Home() {
  const { sessions, tags } = await getServerSideProps();
  return (
    <>
      <TopBanner />
      <BaseLayout>
        <div className={style.custom_container}>
          <div className={style.tag_container}>
            {tags.tags.map((data, index) => (
              <BasicChip key={index} text={data} className="-text-black" />
            ))}
          </div>
          <div>
            <BasicButton
              color="success"
              variant="contained"
              text="セッションを募集する"
              width="100%"
              className="-shadow"
            />
          </div>
          <div className={style.card_container}>
            {sessions.map((data, index) => (
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
          </div>
        </div>
      </BaseLayout>
    </>
  );
}
