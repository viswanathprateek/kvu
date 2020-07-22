import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateLRComponent } from './createLR/createLR.component';
import { LRListComponent } from './lrlist/lrlist.component';
import { BillListComponent } from './bill-list/bill-list.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:"billList", component: BillListComponent},
  {path:"createLR", component: CreateLRComponent},
  {path:"lrList", component: LRListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
