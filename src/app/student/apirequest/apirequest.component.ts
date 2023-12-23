import { compileDeclareClassMetadata } from '@angular/compiler';
import { RequestService } from './../service/request.service';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-apirequest',
  templateUrl: './apirequest.component.html',
  styleUrls: ['./apirequest.component.css']
})
export class ApirequestComponent implements OnInit{
// url='https://jsonplaceholder.typicode.com/posts';
// data:any;
registerform:FormGroup
url='https://jsonplaceholder.typicode.com/posts';
data:any;
isloading=false;
updatedata=false;
alert=false;
 

//  constructor(private http: HttpClient){

//  }

 
constructor(private RequestService :RequestService , private fb :FormBuilder, private http: HttpClient){

}
 result=null;
  ngOnInit(): void {

  // form data
  this.registerform=this.fb.group(
    {
      id:[''],
      userId:[''],
      title:[''],
      body:['']
    }
  )
 


    this.RequestService.getdata().pipe(
      tap(()=>{
        this.isloading=false;
      }),
     map((res:any)=>{return res.filter((p:any)=>p.userId==1)})
    )

  
  

  //  showing only for filttering data
    .subscribe((res)=>{
      this.data=res
    })
    // show only for all data of Request
  //  this.RequestService.getdata().subscribe((res)=>{
  //   this.data=res;
  //  })

   

    // api calling all data
    // this.http.get(this.url).subscribe((result)=>{
    //   console.log(result);
    //   this.data=result;
    // })

  


  }

  // createdata(){
  //   this.RequestService.createdata(this.registerform.value)
  //   .subscribe(this.result)
  // }
  
//   datasubmit(){
//   console.log('event fire');
  
//   console.log(this.registerform.value);
//  }

//update data//
datasubmit(){
  this.RequestService.createdata(this.registerform.value)
  .subscribe((res)=>{
    console.log(res);
    this.data.push(res);
  })
}

//data update and create//
createdata(){
if(!this.updatedata)
{
  this.RequestService.createdata(this.registerform.value)
  .subscribe((res)=>{
    console.log(res);
    this.data.push(res);
    this.registerform.reset()
  })
}
else{
  this.RequestService.updatedata(this.registerform.value)
  .subscribe((res)=>{
    const tempdata = this.data.find((i)=>i.userId===res.userId);
    const position =this.data.indexof(tempdata);
    this.data[position]=res;
    console.log(res);
    this.registerform.reset();
    this.updatedata=false;
  })
}

}
//patchvalu or collect data from card/api//
selectdata(data:any){
  console.log(data);
  this.registerform.patchValue(data);
  this.updatedata=true;
}
//create and update data
//deletedata//
deletedata(Id){
  this.RequestService.deletedata(Id)
  .subscribe((result)=>{
    console.log(this.result);
    this.data=this.data.filter((i)=>i.id !==Id)
  })
}

}
