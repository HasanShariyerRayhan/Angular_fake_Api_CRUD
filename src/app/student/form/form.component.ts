import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
 loginform:FormGroup;
 constructor(private fb: FormBuilder){
 
 }
 ngOnInit(): void {
   this.loginform=this.fb.group(
    {
      name:['',[Validators.required,Validators.maxLength(5),Validators.minLength(3)]],
      email:[''],
      password:['']
    }
   )
 }
  
formvaluecontrol(a){
  return this.loginform.get(a)
}

}
