import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

constructor(private http:HttpClient) { }
addStudentUser(data:any)
{
  return this.http.post(environment.apiUrl+"/Studentuser",data);
}
addTeacherDetails(data:any)
{
  return this.http.post(environment.apiUrl+"/TeacherDetails",data);
}
getTeacherDetails()
{
  return this.http.get(environment.apiUrl+"/TeacherDetails");
}
addTeacherUser(data:any)
{
  return this.http.post(environment.apiUrl+"/teacheruser",data);
}
deleteTeacherUser(id:any)
{
  return this.http.delete(environment.apiUrl+"/teacheruser/"+id);
}
deleteTeacherDetails(id:any)
{
  return this.http.delete(environment.apiUrl+"/TeacherDetails/"+id);
}
getStudentDetails()
{
  return this.http.get(environment.apiUrl+"/StudentDetails");
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
deleteAttendance(id:any)
{
  return this.http.delete(environment.apiUrl+"/Attendance/"+id);
}

}
