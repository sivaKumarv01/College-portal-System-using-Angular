import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../Services/Profile.service';

@Component({
  selector: 'app-ChangePassword',
  templateUrl: './ChangePassword.component.html',
  styleUrls: ['./ChangePassword.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm:any;
  constructor(private formBuilder:FormBuilder,private profileService:ProfileService){
    this.changePasswordForm=this.formBuilder.group({
      password:['', [Validators.required,Validators.pattern('^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{7,}$'),]],
      confirmpassword:['',[Validators.required]]
    })
}

  ngOnInit(): void {

  }
  onSubmit()
  {
    var user=sessionStorage.getItem('usertype');
    var userId=sessionStorage.getItem('userid');
    var data=this.changePasswordForm.value;
    console.log(data);
    console.log(user);
    console.log(userId);
    if(this.changePasswordForm.get('password').value===this.changePasswordForm.get('confirmpassword').value)
    {
      if(user=='student')
    {
      this.profileService.updateStudentPassword(userId,data).subscribe(response=>
        {  this.changePasswordForm.reset();
          alert("Password Change Successfully");
        })
    }
    else if(user=='teacher')
    {
      this.profileService.updateTeacherPassword(userId,data).subscribe(response=>
        {
          this.changePasswordForm.reset();
          alert("password change Successfully");
        })
    }
    }
    else{
      alert("password and confirm password not same");
    }
  }
}
