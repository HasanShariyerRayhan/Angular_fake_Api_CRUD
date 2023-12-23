import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApirequestComponent } from './apirequest/apirequest.component';
import{HttpClientModule} from '@angular/common/http'
import { RequestService } from './service/request.service';


@NgModule({
  declarations: [
    FormComponent,
    ApirequestComponent
    
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[RequestService]
})
export class StudentModule { }
