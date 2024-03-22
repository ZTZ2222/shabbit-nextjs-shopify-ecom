"use client";
import { useRef, useState } from "react";
import { useDispatch, useStore } from "react-redux";

import { Review } from "@/fake_api/types";
import { RootState, useReviews, setReviews } from "@/store/store";

export default function Reviews({
  reviews: initialReviews,
  addReviewAction,
}: {
  reviews: Review[];
  addReviewAction: (text: string, rating: number) => Promise<Review[]>;
}) {
  const store = useStore<RootState>();
  const initialized = useRef(false);
  if (!initialized.current) {
    store.dispatch(setReviews(initialReviews));
    initialized.current = true;
  }

  const reviews = useReviews();

  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(5);

  const dispatch = useDispatch();

  return (
    <>
      {reviews?.map((review, index) => (
        <div key={index} className="p-5">
          <div className="text-md my-1 leading-5 text-gray-900">
            {review.rating} stars
          </div>
          <div className="mt-1 text-sm font-light italic leading-5 text-gray-900">
            {review.text}
          </div>
        </div>
      ))}
      <form
        onSubmit={async (evt) => {
          evt.preventDefault();
          dispatch(setReviews(await addReviewAction(reviewText, reviewRating)));
          setReviewText("");
          setReviewRating(5);
        }}
      >
        <div className="flex flex-row items-center gap-2">
          <label htmlFor="review-text">Review</label>
          <input
            id="review-text"
            className="flex-grow rounded-md border border-gray-600 bg-gray-600 p-2 text-white"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <label htmlFor="review-rating">Rating</label>
          <input
            id="review-rating"
            className="rounded-md border border-gray-600 bg-gray-600 p-2 text-white"
            type="number"
            min={1}
            max={5}
            value={reviewRating}
            onChange={(e) => setReviewRating(+e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            disabled={!reviewText}
            className="mt-6 rounded-lg bg-blue-800 px-8 py-2 text-lg font-bold text-white disabled:cursor-not-allowed disabled:bg-gray-500"
            onClick={async () => {}}
          >
            Submit Review
          </button>
        </div>
      </form>
    </>
  );
}
