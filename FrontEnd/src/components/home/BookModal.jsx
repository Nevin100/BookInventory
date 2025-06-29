/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <>
      <div
        className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
        onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
        >
          <AiOutlineClose
            className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
            onClick={onClose}
          />
          <h2 className="w-fit px-4 py-1 bg-red-400 rounded-lg">
            {book.PublishYear}
          </h2>
          <h4 className="my-2 text-gray-500">{book._id}</h4>
          <div className="flex justify-start items-center gap-x-2">
            <PiBookOpenTextLight className="text-red-400 text-2xl" />
            <h2 className="my-1">{book.title}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <BiUserCircle className="text-red-400 text-2xl" />
            <h2 className="my-1">{book.author}</h2>
          </div>
          <p className="mt-4">Anything you want to show</p>
          <p className="my-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </div>
    </>
  );
};

export default BookModal;
