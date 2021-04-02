import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';
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
  path:"add-user",
  component:AddUserComponent
},
{
  path:"update-user/:id",
  component:UpdateUserComponent
},
{
  path:"peoplelist",
  component:PeoplelistComponent
},

{path: "login",
component:LoginComponent
},
{
  path: "**",
  component:Page404Component
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
