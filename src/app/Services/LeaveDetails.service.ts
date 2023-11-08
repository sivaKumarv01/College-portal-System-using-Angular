import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaveDetailsService {

constructor(private http:HttpClient) { }
addLeaveRequest(request:any)
{
  return this.http.post( environment.apiUrl+"/leaveRequestDetails",request);
}
getLeaveDetails()
{
  return this.http.get(environment.apiUrl+"/leaveRequestDetails");
}
addTeacherLeaveRequest(data:any)
{
  return this.http.post(environment.apiUrl+"/TeacherLeaveRequest",data);
}
getTeacherLeaveDetails()
{
  return this.http.get(environment.apiUrl+"/TeacherLeaveRequest")
}
}

