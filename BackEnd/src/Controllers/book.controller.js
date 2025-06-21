import Book from "../models/BookModel.js";

// Update Book :
export const UpdateBooks = async (req, res) => {
  try {
    const { title, author, PublishYear } = req.body;
    if (!title && !author && !PublishYear) {
      return res.status(400).send({
        message: "No Changes Recieved",
      });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).send({ message: "Book Not Found!!" });
    } else {
      return res.status(200).send({ message: "Book Updated Successfully" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

//  Delete Book :
export const DeleteBooks = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    } else {
      return res.status(200).send({ message: "Book deleted successfully" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// Read Books :
export const ReadBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

//Read Book :
export const ReadBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// Post Books :
export const CreateBook = async (req, res) => {
  try {
    const { title, author, PublishYear } = req.body;
    if (!title || !author || !PublishYear) {
      return res
        .status(400)
        .send({ message: "Please provide title, author, and PublishYear" });
    }
    const book = await Book.create({ title, author, PublishYear });
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};
