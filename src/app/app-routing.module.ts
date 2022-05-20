import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginModalComponent} from './components/login-modal/login-modal.component'
import { EditSkillComponent } from './components/edit-skill/edit-skill.component'; 
const routes: Routes = [
  {  path : 'login-modal' , component:LoginModalComponent},
  {  path :'editskill/:id' , component: EditSkillComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
