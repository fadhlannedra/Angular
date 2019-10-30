import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  form = this.builder.group({
    book_id: ['', Validators. required],
    title: ['', Validators. required],
    price: ['', Validators. required],
    author: ['', Validators. required],
    stock: ['', Validators. required]


  })
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private bookService: BookService
  ) { }

  ngOnInit() {

    this.getBookByBookId();


  }

  getBookByBookId() {
    let bookId = this.route.snapshot.params["bookId"];
    this.bookService.getBookByBookId(bookId).subscribe(data => {
      console.log(data)
      this.form.setValue(data["data"]);
    });

  }

  updateBook() {
    let book = this.form.getRawValue();
    // console.log(book);
    // console.log(book.bookId);
    // console.log(book.title);
    this.bookService.updateBook(book.book_id, book).subscribe(data => {
      console.log(data);
    this.goToBookList();

    });
  }

  goToBookList() {
    this.router.navigate(["/home"]);
  }
}
