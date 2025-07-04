"use client";

import { useRef } from "react";

export default function ReviewItemDeleteButton({
  reviewId,
  bookId,
}: {
  reviewId: number;
  bookId: number;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form ref={formRef} action="">
      <input type="hidden" name="reviewId" value={reviewId} />
      <input type="hidden" name="bookId" value={bookId} />
      <div onClick={() => formRef.current?.requestSubmit()}>삭제하기</div>
    </form>
  );
}
