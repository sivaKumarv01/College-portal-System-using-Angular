import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/Login.service';


@Component({
  selector: 'app-MyProfile',
  templateUrl: './MyProfile.component.html',
  styleUrls: ['./MyProfile.component.css']
})
export class MyProfileComponent implements OnInit {
  userId:any;
  userDetails:any=[];
  index=0;
  constructor(private loginService:LoginService) {
    this.userId=sessionStorage.getItem('userid');
    console.log(this.userId);

    this.loginService.getOneTeacherDetails(this.userId).subscribe(value=>
      {
        this.userDetails[this.index]=value;
        this.index++;
        console.log(this.userDetails);
      })
   }

  ngOnInit() {
  }

}
