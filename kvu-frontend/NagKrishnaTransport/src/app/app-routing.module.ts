import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateLRComponent } from './createLR/createLR.component';
import { LRListComponent } from './lrlist/lrlist.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:"home", component: HomeComponent},
  {path:"createLR", component: CreateLRComponent},
  {path:"lrList", component: LRListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
