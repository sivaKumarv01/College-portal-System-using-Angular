import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

constructor(private http:HttpClient) { }
addStudentUser(data:any)
{
  return this.http.post(environment.apiUrl+"/Studentuser",data);
}
addStudentAttendance(value:any)
{
  return this.http.post(environment.apiUrl+"/Attendance",value);
}
addStudentDetails(data:any)
{
  return this.http.post(environment.apiUrl+"/StudentDetails",data);
}
deleteStudentDetails(id:any)
{
  return this.http.delete(environment.apiUrl+"/StudentDetails/"+id);
}
deleteStudentUser(id:any)
{
  return this.http.delete(environment.apiUrl+"/Studentuser/"+id);
}
getStudentuser()
{
  return this.http.get(environment.apiUrl+"/Studentuser");
}
deleteAttendance(id:any)
{
  return this.http.delete(environment.apiUrl+"/Attendance/"+id);
}
}
