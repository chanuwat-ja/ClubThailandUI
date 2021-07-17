import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReserveCourseComponent } from './customer/reserve-course/reserve-course.component';

const routes: Routes = [
  {path:'reserve',component:ReserveCourseComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
