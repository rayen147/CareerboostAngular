
import { NgModule } from '@angular/core';




import { AppComponent } from './app.component';

import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { SidebarBackComponent } from './BackOffice/all-template-back/sidebar-back/sidebar-back.component';
import { FooterBackComponent } from './BackOffice/all-template-back/footer-back/footer-back.component';
import { FooterFrontComponent } from './FrontOffice/all-template-front/footer-front/footer-front.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { HeaderFrontComponent } from './FrontOffice/all-template-front/header-front/header-front.component';
import { NavbarBackComponent } from './BackOffice/all-template-back/navbar-back/navbar-back.component';
import { HomeFrontComponent } from './FrontOffice/all-template-front/home-front/home-front.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,

         AllTemplateBackComponent,
         NavbarBackComponent,
         SidebarBackComponent,
         FooterBackComponent,
         FooterFrontComponent,
         AllTemplateFrontComponent,
         HeaderFrontComponent,
         HomeFrontComponent,
         LoginComponent,
         SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
