import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';
import { PeoplelistComponent } from './components/peoplelist/peoplelist.component';
import { RegisterComponent } from './components/register/register.component';
import { TestComponent } from './components/test/test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component:HomeComponent
  },
  {
    path: "test",
    component:TestComponent
  },
{
  path: "register",
  component:RegisterComponent
},
{
  path:"peoplelist",
  component:PeoplelistComponent
},
{
  path: "page404",
  component:Page404Component
},
{path: "login",
component:LoginComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
