import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ApirequestComponent } from './apirequest/apirequest.component';

const routes: Routes = [
  // {
  //   path:'d',
  //   component:FormComponent
  // },
  {
    path:'',
    component:ApirequestComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
