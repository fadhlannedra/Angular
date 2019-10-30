import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Book } from '../../model/book';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book:Book[];

  constructor(private bookService: BookService, private router: Router ) { }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.bookService.getAll().subscribe(data => {
      this.book = data['data'];
      console.log(data);
    });
  }

  deleteBook(bookId) {
    this.bookService.deleteBook(bookId).subscribe(data => {
      this.book = Book['data'];
      this.getAll();
      alert('Buku Akan Di Hapus');
      console.log(data);
    });
  }

  getBookByBookId(bookId: Number) {
    this.bookService.getBookByBookId(bookId).subscribe(data => {
      this.book = Book['data']
      console.log(data)
    });

    this.router.navigate(['detail', bookId]);
  }




}








