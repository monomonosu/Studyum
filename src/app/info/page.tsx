import { BasicChip } from '@/components/Buttons/BasicChip';
import { BaseLayout } from '@/components/Layouts/BaseLayout';
import { axiosClient } from '@/utils/libs/axios';

type SessionsResponse = {
  id: number;
  user_name: string;
  title: string;
  tags: string[];
  content: string;
  passion_level: number;
  created_at: string;
}[];

async function getServerSideProps() {
  const sessionsData = (await axiosClient.get<SessionsResponse>('sessions')).data;
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
        <BasicChip key={session.id} text={session.user_name} className='-text-black' />
      ))}
    </BaseLayout>
  );
};

export default InfoPage;
