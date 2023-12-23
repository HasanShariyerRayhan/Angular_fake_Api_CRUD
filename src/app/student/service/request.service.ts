import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http :HttpClient) { 

  }
 //method//
 getdata():Observable<any>{
  return this.http.get('https://jsonplaceholder.typicode.com/posts')
 }
 //method//
 createdata(data:any):Observable<any>{
  return this.http.post('https://jsonplaceholder.typicode.com/posts',data)
 }

updatedata(post:any):Observable<any>{
  return this.http.put(`https://jsonplaceholder.typicode.com/posts/${post.userId}`,post)
}
deletedata(id:any):Observable<any>{
  return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
}

}
