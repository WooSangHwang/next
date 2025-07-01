import { ReactNode } from "react";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import Head from "next/head";

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const q = context.query.q;
  const books = await fetchBooks(q as string);
  return {
    props: {
      books,
    },
  };
};
const Page = ({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Head>
        <title>한입북스 - 검색 결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스 - 검색결과" />
        <meta
          property="og:description"
          content="한입 북수에서 등록된 도서를 냠냠"
        />
      </Head>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

export default Page;

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
