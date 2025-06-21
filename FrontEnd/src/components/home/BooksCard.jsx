/* eslint-disable react/prop-types */

import BooksSingleCard from "./BooksSingleCard";

const BooksCard = ({ books }) => {
  return (
    <>
      <div className=" text-neutral-200 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((item) => (
          <BooksSingleCard key={item._id} book={item} />
        ))}
      </div>
    </>
  );
};

export default BooksCard;
