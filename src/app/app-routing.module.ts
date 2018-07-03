import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import {HomeComponent} from './home/home.component'
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: '',redirectTo: '/login', pathMatch: 'full'},
 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 

  
}

export const routingComponents = [LoginComponent, HomeComponent]

