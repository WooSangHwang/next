import style from "./index.module.css";
import { ReactNode } from "react";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";
import Head from "next/head";

//ssg 방식
// getStaticProps

//ssr 방식
//getServerSideProps
export const getStaticProps = async () => {
  // const allBooks = await fetchBooks();
  // const recoBooks = await fetchRandomBooks();
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: {
      allBooks,
      recoBooks,
    },
    // revalidate: 3,
  };
};

export default function Home({
  allBooks,
  recoBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // console.log(allBooks);
  return (
    <>
      <Head>
        <title>한입북스</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스" />
        <meta
          property="og:description"
          content="한입 북수에서 등록된 도서를 냠냠"
        />
      </Head>
      <div className={style.container}>
        <section>
          <h3>지금 추천하는 도서</h3>
          {recoBooks.map((book) => (
            <BookItem {...book} key={book.id} />
          ))}
        </section>
        <section>
          <h3>등록된 모든 도서</h3>
          {allBooks.map((book) => (
            <BookItem {...book} key={book.id} />
          ))}
        </section>
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
