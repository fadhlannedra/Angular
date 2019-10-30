import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Book } from "../model/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:2222/books";

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);

  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.url, book);

  }

  deleteBook(bookId: Number): Observable<Book> {
    return this.http.delete<Book>(this.url + "/" + bookId);

  }

  getBookByBookId(bookId: Number): Observable<Book> {
    return this.http.get<Book>(this.url + "/" + bookId);
  }

  updateBook(bookId, value): Observable<Book> {
    return this.http.put<Book>(this.url +  "/" + bookId + "/", value);
  }
}
