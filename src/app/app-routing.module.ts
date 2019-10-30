import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './components/addbook/addbook.component';
import { BookComponent } from './components/book/book.component';
import { DetailComponent } from './components/detail/detail.component';


const routes: Routes = [{

  path: "home",
  component: BookComponent
},
{
  path: "add",
  component: AddbookComponent
},
{
  path: "detail/:bookId",
  component: DetailComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
