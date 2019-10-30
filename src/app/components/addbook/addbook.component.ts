import { Component, OnInit } from '@angular/core';

import { Book } from '../../model/book';
import { BookService } from '../../service/book.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  book: Book;

  constructor(private bookService: BookService,
    private router: Router) {
    this.book = new Book();
   }

  ngOnInit() {}
  addBook(book: Book)
  {

      this.bookService.addBook(book).subscribe(data => {
      this.book = data;
      console.log(data);
      this.navigate();
  });
    }


  navigate() {
    this.router.navigate(["/home"]);
    alert("Buku Baru Akan Di Tambahkan.");
  }
}
