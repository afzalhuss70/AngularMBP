import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddEmployeeComponent} from "./employee/add-employee/add-employee.component";
import {ListEmployeeComponent} from "./employee/list-employee/list-employee.component";
import {EditEmployeeComponent} from "./employee/edit-employee/edit-employee.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'list-employee', component: ListEmployeeComponent },
  { path: 'edit-employee', component: EditEmployeeComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
