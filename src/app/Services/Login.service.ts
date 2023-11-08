import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn: boolean = false;
  loginvalidation:any;
  teacherDetails:any;
  studentDetails:any;
  name:any="";
  usertype:any;
  userId:any;
  isValidUser:boolean=false;
constructor(private http:HttpClient) {
  this.getStudentDetails().subscribe(data=>
    {
      this.studentDetails=data;
    })
    this.getTeacherDetails().subscribe(value=>
      {
        this.teacherDetails=value;
      })
 }
 getStudentuser()
 {
   return this.http.get(environment.apiUrl+"/Studentuser")
 }
 getTeacheruser()
 {
   return this.http.get(environment.apiUrl+"/teacheruser");
 }
 getAdmin()
 {
   return this.http.get(environment.apiUrl+"/admin/1");
 }
 getTeacherDetails()
 {
  return this.http.get(environment.apiUrl+"/TeacherDetails");

 }
 getStudentDetails()
 {
    return this.http.get(environment.apiUrl+"/StudentDetails");

 }

 authenticate(username: string, password: string, usertype: string,userDetails:any): boolean {
  if (usertype==='student') {
      for (let user of userDetails) {
        if (user.username === username && user.password === password)
        {
          this.loggedIn = true;
          sessionStorage.setItem('loggedIn',"true");
          sessionStorage.setItem('usertype','student');
          this.userId=user.id;
          sessionStorage.setItem("userid",user.id);
          for(let details of this.studentDetails)
          {
            if(this.userId===details.id)
            {
              this.name= details.username;
              sessionStorage.setItem('username',this.name);
            }
          }
          this.isValidUser=true;
          break;
        }
      }
  }
  else if(usertype==='teacher')
  {

      for (let user of userDetails) {
        if (user.username === username && user.password === password) {
          this.loggedIn = true;
          this.usertype=usertype;
          sessionStorage.setItem('loggedIn',"true");

          sessionStorage.setItem("usertype",'teacher');
          this.userId=user.id;
          console.log(user.id);
          sessionStorage.setItem("userid",user.id);
          console.log(this.userId);
            console.log(this.teacherDetails);
          for(let details of this.teacherDetails)
          {
            if(this.userId===details.id)
            {
              this.name= details.name;
              sessionStorage.setItem('username',this.name);
            }
          }
          this.isValidUser=true;
          break;
        }
      }
    }
    else if(usertype=='admin'){
      for (const user of userDetails) {
        if (username == user.username && password ===user.password) {
          this.loggedIn = true;
          this.usertype="admin";
          sessionStorage.setItem("usertype","admin");
          this.userId=user.id;
          sessionStorage.setItem("userid",user.id);
          sessionStorage.setItem('loggedIn',"true");
          this.name="Admin";
          sessionStorage.setItem('username',this.name);
          this.isValidUser=true;

        }

      }

    }
  return this.isValidUser;
}
isLoggedIn(): boolean
{
  return this.loggedIn;
}

logout() {
  this.usertype="";
  this.name="";
  this.userId=0;
  sessionStorage.clear();
  location.reload();
  this.isValidUser=false;
  return this.loggedIn = false;
}
getOneStudentDetails(id:any)
{
  return this.http.get("http://localhost:3000/StudentDetails"+"/"+id);
}
getOneTeacherDetails(id:any)
{
  return this.http.get("http://localhost:3000/TeacherDetails"+"/"+id);
}

}
