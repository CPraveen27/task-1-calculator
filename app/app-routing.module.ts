import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { DivisionComponent } from './division/division.component';
import { LoginComponent } from './login/login.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { OptionsComponent } from './options/options.component';
import { SubtractionComponent } from './subtraction/subtraction.component';

const routes: Routes = [
 {path:"login",
component:LoginComponent},
{path:"login/Options",
component: OptionsComponent},
{path:"login/Options/Addition",
component: AdditionComponent},
{path:"login/Options/Subtraction",
component: SubtractionComponent},
{path:"login/Options/Multiplication",
component: MultiplicationComponent},
{path:"login/Options/Division",
component: DivisionComponent},
{
  path:"",redirectTo:"login/Options",pathMatch:'full'
}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
