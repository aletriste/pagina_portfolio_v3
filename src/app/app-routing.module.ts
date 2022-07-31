import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {LoginModalComponent} from './components/login-modal/login-modal.component'
import { SkillsComponent } from './components/skills/skills.component';


const routes: Routes = [
  {path :'' , component : AppComponent},
  {path : 'skill' , component : SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
