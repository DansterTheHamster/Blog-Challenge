import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

const appRoutes:Routes = [
  {
    path: '', component:EmployeeComponent
  },
  {
    path: 'add-employee', component:AddEmployeeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavbarComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  /* this was not in the video so maybe delete later?*/
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
