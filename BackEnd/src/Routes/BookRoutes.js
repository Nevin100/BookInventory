import express from "express";
import {
  CreateBook,
  UpdateBooks,
  DeleteBooks,
  ReadBooks,
  ReadBook,
} from "../Controllers/book.controller.js";
const router = express.Router();

// Post Books
router.post("/", CreateBook);

// Route Get all Books
router.get("/", ReadBooks);

// Route for Get One Book from database by id
router.get("/:id", ReadBook);

// Route for Update a Book:
router.put("/:id", UpdateBooks);

//Route to delete a book:
router.delete("/:id", DeleteBooks);

export default router;
