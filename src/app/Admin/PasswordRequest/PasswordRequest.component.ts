import { Component, OnInit } from '@angular/core';
import { ForgetPasswordService } from 'src/app/Services/ForgetPassword.service';

@Component({
  selector: 'app-PasswordRequest',
  templateUrl: './PasswordRequest.component.html',
  styleUrls: ['./PasswordRequest.component.css']
})
export class PasswordRequestComponent implements OnInit {
  changePassword: any=false;
  passwordChangeRequest:any;
  constructor(private forgetPasswordService:ForgetPasswordService)
  {}
ngOnInit(): void {
  this.forgetPasswordService.getNotification().subscribe(response=>
    {
      this.passwordChangeRequest=response;
    })
  }
  submit(id:any) {
    this.forgetPasswordService.deleteNotification(id).subscribe(response=>
      {
        console.log("Sended");

      })
      this.changePassword=false;
      this.ngOnInit();

  }
  username:any;
  email:any;
  id:any;
  closeChangePassword()
  {
    this.changePassword=false;
  }
  openChangePassword(username:any, email:any,id:any)
  {
    this.username=username;
    this.email=email;
    this.id=id;
    this.changePassword=true;
  }

  }


