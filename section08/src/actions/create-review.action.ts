"use server";
import { revalidatePath } from "next/cache";
import { delay } from "@/util/delay";

export async function createReviewAction(s_: any, formData: FormData) {
  const bookId = formData.get("bookId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  if (!bookId || !content || !author) {
    return {
      status: false,
      error: "리뷰 내용과 작성자를 입력해주세요",
    };
  }

  try {
    delay(2000);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/1`,
      {
        method: "POST",
        body: JSON.stringify({ bookId, content, author }),
      },
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    console.log(response.status);
    revalidatePath(`/book/${bookId}`);
    return {
      status: true,
      error: "",
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      error: "리뷰 저장을 실패했습니다. ",
    };
  }
}
