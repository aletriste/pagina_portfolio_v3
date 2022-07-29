import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { EducacionItemComponent } from './components/educacion-item/educacion-item.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { AddPortfolioComponent } from './components/add-portfolio/add-portfolio.component';
import { AddEducacionComponent } from './components/add-educacion/add-educacion.component';
import { EditSkillComponent } from './components/edit-skill/edit-skill.component';
import { EditPortfolioComponent } from './components/edit-portfolio/edit-portfolio.component';
import { EditEducacionComponent } from './components/edit-educacion/edit-educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    SkillsComponent,
    SkillItemComponent,
    PortfolioComponent,
    PortfolioItemComponent,
    LoginModalComponent,
    EducacionComponent,
    EducacionItemComponent,
    AddSkillComponent,
    AddPortfolioComponent,
    AddEducacionComponent,
    EditSkillComponent,
    EditPortfolioComponent,
    EditEducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
