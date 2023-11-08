import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/Login.service';
import { ProfileService } from 'src/app/Services/Profile.service';

@Component({
  selector: 'app-StudentDetails',
  templateUrl: './StudentDetails.component.html',
  styleUrls: ['./StudentDetails.component.css']
})
export class StudentDetailsComponent implements OnInit {
  studentDetails:any;
  constructor(private loginService:LoginService){
    loginService.getStudentDetails().subscribe(value=>
      {
        this.studentDetails=value;
      })
  }

  ngOnInit() {
  }

}
