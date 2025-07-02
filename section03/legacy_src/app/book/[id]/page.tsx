import ClientComponent from "@/componets/client-component";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      book/{id} page 입니다.
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
