import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
courseDetails:any;
constructor(private http:HttpClient) {

}
getCourseDetails()
{
 return this.http.get(environment.apiUrl+"/courses")
}
enrollCourse(data:any)
{
  return this.http.post(environment.apiUrl+"/EnrollCourse",data);
}
getEnrollCourse()
{
  return this.http.get(environment.apiUrl+"/EnrollCourse");
}
}
