import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/Login.service';


@Component({
  selector: 'app-Myprofile',
  templateUrl: './Myprofile.component.html',
  styleUrls: ['./Myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  userId:any;
  userDetails:any=[];
  index=0;
  constructor(private loginService:LoginService) {
    this.userId=sessionStorage.getItem('userid');
    console.log(this.userId);
    this.loginService.getOneStudentDetails(this.userId).subscribe(value=>
      {
        this.userDetails[this.index]=value;
        console.log(this.userDetails);

      })
  }
  ngOnInit() {
  }

}
