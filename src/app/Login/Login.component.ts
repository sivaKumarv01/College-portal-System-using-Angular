import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/Login.service';
import { ForgetPasswordService } from '../Services/ForgetPassword.service';
import { window } from 'rxjs';
import { NGXLogger } from 'ngx-logger';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password:string="";
  userForm:any;
  usertype: string='';
  details:any;
  studentUserDetails:any;
  adminuser:any=[];
  teacherUserDetails:any;
showForgetPasswordModal: any=false;
index:any=0;
  constructor(private logger:NGXLogger, private loginService:LoginService, private route:Router,private forgetPassword:ForgetPasswordService,   private formBuilder:FormBuilder) {
    this.loginService.getStudentuser().subscribe(data=>
      {
        this.studentUserDetails=data;

      })
      this.loginService.getTeacheruser().subscribe(value=>
        {
          this.teacherUserDetails=value;

        })
      this.loginService.getAdmin().subscribe(response=>
          {
            this.adminuser[this.index]=response;
          })
        }
        ngOnInit(): void {
          this.userForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(5)]],
            email: ['', [Validators.required, Validators.email]]
          });
        }
        submitEmail() {
          var vailduser=0;
          for (const studentuser of this.studentUserDetails) {
            if(this.userForm.get('username').value===studentuser.username && this.userForm.get('email').value===studentuser.email)
            {
              vailduser=1;
            }

          }
          for (const teacheruser of this.teacherUserDetails) {
            if(this.userForm.get('username').value==teacheruser.username && this.userForm.get('email').value===teacheruser.email)
            {
              vailduser=1;
            }

          }
          if(vailduser===1)
          {
            this.forgetPassword.addNotification(this.userForm.value).subscribe(response=>
              {
                this.showForgetPasswordModal=false;
                this.logger.info("Shortly You will receive a password through Email");
               alert("Shortly You will receive a password through Email");
              })
          }
          else{
            alert("username and email combination does not exist");
            this.logger.warn("username and email combination does not exist")
          }

        }
    openForgetPassword()
   {
    this.showForgetPasswordModal=true;
   }
   closeForgetPassword()
   {
    this.showForgetPasswordModal=false;
   }
onSubmit()
{
  if(this.username==='Admin')
  {
    if(this.loginService.authenticate(this.username,this.password,'admin',this.adminuser))
    {
      alert("Welcome Admin");
      this.logger.info("Admin loggedIn");
      this.route.navigate(['home']).then(()=>
      {
        location.reload();
      })

    }
    else
    {
      this.route.navigate(['login']);
      this.logger.warn("You enter invalid username or password");
      alert("You enter invalid username or password");
    }
  }
  else if(this.usertype==='student')
  {
    if(this.loginService.authenticate(this.username,this.password,this.usertype,this.studentUserDetails))
    {
      this.route.navigate(['home']).then(()=>
      {
        location.reload();
      })
      this.logger.info("User loggedIn");
      alert("login successfully");

    }
    else
    {
      this.route.navigate(['login']);
      alert("You enter invalid username or password");
      this.logger.warn("You enter invalid username or password");
    }
  }
  else if(this.usertype==='teacher')
  {
    if(this.loginService.authenticate(this.username,this.password,this.usertype,this.teacherUserDetails))
    {

      this.route.navigate(['home']).then(()=>
      {
        location.reload();
      })
      this.logger.info("User loggedIn");
      alert("login successfully");

    }
    else
    {
      this.route.navigate(['login']);

      alert("You enter invalid username or password");
      this.logger.warn("You enter invalid username or password");
    }
  }
  else if(this.usertype==null)
  {
    if(this.loginService.authenticate(this.username,this.password,this.usertype,this.adminuser))
    {
      this.route.navigate(['']);
      this.logger.info("Admin loggedIn");
      alert("login successfully");
    }
    else
    {
      this.route.navigate(['login']);

      alert("You enter invalid username or password");
      this.logger.warn("You enter invalid username or password");
    }
  }
}
}
