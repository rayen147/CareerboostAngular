import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*
import { AddCertificatComponent } from './certificat/add-certificat/add-certificat.component';
import { AllCertificatComponent } from './certificat/all-certificat/all-certificat.component';
import { UpdateCertificatComponent } from './certificat/update-certificat/update-certificat.component';

import { AddModuleformationComponent } from './moduleformation/add-moduleformation/add-moduleformation.component';
import { AllModuleformationComponent } from './moduleformation/all-moduleformation/all-moduleformation.component';
import { UpdateModuleformationComponent } from './moduleformation/update-moduleformation/update-moduleformation.component';
import { DeleteCertificatComponent } from './certificat/delete-certificat/delete-certificat.component';

import { DeleteModuleformationComponent } from './moduleformation/delete-moduleformation/delete-moduleformation.component';
import { FormationComponent } from './formation/formation.component';

import { AllComponent } from './formation/all/all.component';
import { UpdateComponent } from './formation/update/update.component';
import { DeleteComponent } from './formation/delete/delete.component';
import { AddComponent } from './formation/add/add.component';
import { CertificatComponent } from './certificat/certificat.component';
import { ModuleformationComponent } from './moduleformation/moduleformation.component';
import { SuccessComponentComponent } from './success-component/success-component.component';
import { DownloadComponent } from './download/download.component';*/
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
 { path: 'front', component: AllTemplateFrontComponent },
  { path: 'admin', component: AllTemplateBackComponent },
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},

   /*{ path: 'success-component', component: SuccessComponentComponent },

  { path: 'download/:filename', component: DownloadComponent },

    { 
      path: 'certificat',
      component: CertificatComponent,
      children: [
        {path: 'add-certificat', component: AddCertificatComponent },
        { path: 'all-certificat', component: AllCertificatComponent },
        {  path: 'update-certificat/:id', component: UpdateCertificatComponent },
        { path: 'delete-certificat/:id', component: DeleteCertificatComponent },
        { path: '', redirectTo: 'all-certificat', pathMatch: 'full' } // Redirection par défaut vers 'all'
      ]
    },
    
  
      { 
        path: 'moduleformation',
        component: ModuleformationComponent,
        children: [
          {path: 'add-moduleformation', component: AddModuleformationComponent },
          {path: 'all-moduleformation', component: AllModuleformationComponent },
          {  path: 'update-moduleformation/:id', component: UpdateModuleformationComponent },
          { path: 'delete-moduleformation/:id', component: DeleteModuleformationComponent },
          { path: '', redirectTo: 'add-moduleformation', pathMatch: 'full' } // Redirection par défaut vers 'all'
        ]
      },
      { 
        path: 'formation',
        component: FormationComponent,
        children: [
          { path: 'add', component: AddComponent },
          { path: 'all', component: AllComponent },
          { path: 'update/:id', component: UpdateComponent },
          { path: 'delete/:id', component: DeleteComponent },
          { path: '', redirectTo: 'all', pathMatch: 'full' } // Redirection par défaut vers 'all'
        ]
      },
      { path: '', redirectTo: '/formation', pathMatch: 'full' } */
    ];
    
   



  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

