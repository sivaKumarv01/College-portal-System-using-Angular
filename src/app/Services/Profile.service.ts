import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

constructor(private http:HttpClient) { }
updateStudentDetails(body:any,id:any)
{
  return this.http.patch(environment.apiUrl+"/StudentDetails/"+id,body);
}
updateTeacherDetails(body:any,id:any)
{
  return this.http.patch(environment.apiUrl+"/TeacherDetails/"+id,body);
}
getOneStudentDetails(id:any)
{
  return this.http.get(environment.apiUrl+"/StudentDetails"+"/"+id);
}
getOneTeacherDetails(id:any)
{
  return this.http.get(environment.apiUrl+"/TeacherDetails"+"/"+id);
}
updateStudentPassword(id:any,data:any)
{
  return this.http.patch(environment.apiUrl+"/Studentuser/"+id,data);
}
updateTeacherPassword(id:any,data:any)
{
  return this.http.patch(environment.apiUrl+"/teacheruser/"+id,data);
}
}
