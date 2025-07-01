import { BookData } from "@/types";

export default async function fetchBook(id: number): Promise<BookData | null> {
  const url = `https://onebite-books-server-main-nine-psi.vercel.app/book/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("response 오류");
    }

    return await response.json();
  } catch (err) {
    console.log(err);
    return null;
  }
}
