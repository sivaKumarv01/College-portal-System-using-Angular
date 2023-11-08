import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

constructor(private http:HttpClient) { }
addNotification(data:any)
{
  return  this.http.post(environment.apiUrl+"/notification",data)
}
getNotification()
{
  return this.http.get(environment.apiUrl+"/notification");
}
deleteNotification(id:any)
{
  return this.http.delete(environment.apiUrl+"/notification/"+id);
}
}
