import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRoutingModule } from './student/student-routing.module';
const routes: Routes = [
  {
    path:"",
    loadChildren:()=>import('./student/student.module').then((m)=>m.StudentModule)
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
