import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LRComponent } from './lr/lr.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:"home", component: HomeComponent},
  {path:"createLR", component: LRComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
