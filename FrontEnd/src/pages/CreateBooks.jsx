import { useState } from "react";
import BackArrow from "../components/BackButton.jsx";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner.jsx";
import axios from "axios";
import { useSnackbar } from "notistack";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setauthor] = useState("");
  const [PublishYear, setpubishyear] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSavebook = () => {
    const data = {
      title,
      author,
      PublishYear,
    };
    setloading(true);
    axios
      .post(`http://localhost:3000/books`, data)
      .then(() => {
        setloading(false);
        enqueueSnackbar("Book Created Successfully!!", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setloading(false);
        enqueueSnackbar("Error Occured", { variant: "error" });
        console.log(error);
      });
  };
  return (
    <>
      <div className="p-4">
        <BackArrow />
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col border-2  text-neutral-200 border-sky-500/50 rounded-xl bg-neutral-50/10 w-[600px] p-4 mx-auto">
          <h1 className="text-3xl my-4 text-center py-2 px-2 font-semibold ">
            Create Book
          </h1>
          <div className="my-4">
            <label className="text-2xl mr-4 mb-3 text-gray-500/95">
              Title :
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 text-black border-gray-500/80 px-4 py-2 w-full rounded-md"
            />
          </div>
          <div className="my-4">
            <label className="text-2xl mr-4 text-gray-500/95 mb-3">
              Author :
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setauthor(e.target.value)}
              className="border-2  text-black border-gray-500/80 px-4 py-2 w-full rounded-md"
            />
          </div>
          <div className="my-4">
            <label className="text-2xl mr-4 text-gray-500/95 mb-3">
              Publish-Year :
            </label>
            <input
              type="text"
              value={PublishYear}
              onChange={(e) => setpubishyear(e.target.value)}
              className="border-2  text-black border-gray-500/80 px-4 py-2 w-full rounded-md"
            />
          </div>
          <button
            className="bg-sky-500 text-xl text-white my-8 py-[10px] w-full rounded-lg "
            onClick={handleSavebook}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateBooks;
