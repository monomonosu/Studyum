import { BasicChip } from "@/components/Buttons/BasicChip";
import { BaseLayout } from "@/components/Layouts/BaseLayout";
import { axiosClient } from "@/utils/libs/axios";

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
  const sessionsData = (await axiosClient.get<Repo[]>("sessions")).data;
  return sessionsData;
}

const InfoPage = async () => {
  const sessions = await getServerSideProps();
  return (
    <BaseLayout>
      {sessions.map((session) => (
        <div key={session.id}>
          <h1>{session.title}</h1>
          <p>{session.content}</p>
        </div>
      ))}

      {sessions.map((session) => (
        <BasicChip
          key={session.id}
          text={session.userName}
          className="-text-black"
        />
      ))}
    </BaseLayout>
  );
};

export default InfoPage;
