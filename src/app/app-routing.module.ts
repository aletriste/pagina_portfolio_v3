import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {LoginModalComponent} from './components/login-modal/login-modal.component'


const routes: Routes = [
  {  path : 'login-modal' , component:LoginModalComponent},
  {path : '', component:AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
