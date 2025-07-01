export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  // console.log(searchParams);
  return <div>search {q}</div>;
}
