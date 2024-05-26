import { BasicChip } from "@/components/Buttons/BasicChip";
import { BaseLayout } from "@/components/Layouts/BaseLayout";

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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}sessions`);
  const repo: Repo[] = await res.json();
  return repo;
}

const InfoPage = async () => {
  const repo = await getServerSideProps();
  return (
    <BaseLayout>
      {repo.map((data) => (
        <div key={data.id}>
          <h1>{data.title}</h1>
          <p>{data.content}</p>
        </div>
      ))}

      {repo.map((data) => (
        <BasicChip key={data.id} text={data.userName} className="-text-black" />
      ))}
    </BaseLayout>
  );
};

export default InfoPage;
