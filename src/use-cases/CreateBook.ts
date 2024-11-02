import { Book } from "../domain/entities/Book";
import { BookRepository } from "../domain/interfaces/BookRepository";
import { CreateBookDto } from "../interface/dto/CreateBookDto";
import { v4 as uuidv4 } from 'uuid';

export class CreateBook {
  constructor(private bookRepository: BookRepository) {}

  async execute(book: CreateBookDto) {
    const newId = uuidv4();
    const newBook = new Book(
      newId, book.title,  
      book.author,   
      new Date(book.publishedDate)
    );
    return await this.bookRepository.create(newBook);
  }
}