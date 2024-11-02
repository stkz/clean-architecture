import { Request, Response } from "express";
import { DIContainer } from "../../infrastructure/DIContainer";
import { validate } from "class-validator";
import { CreateBookDto } from "../dto/CreateBookDto";
import { Book } from "../../domain/entities/Book";

export class BookController {
  private getAllBooks = DIContainer.getGetAllBooksUseCase();
    private createBook = DIContainer.getCreateBookUseCase();

  async create(req: Request, res: Response): Promise<any > {
    const dto = Object.assign(new CreateBookDto(), req.body);
    
    const errors = await validate(dto);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    const book = await this.createBook.execute(dto);
    res.status(201).json(book);
  }

  async getAll(req: Request, res: Response) {
    const books = await this.getAllBooks.execute();
    res.json(books);
  }
}
