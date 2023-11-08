import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/Login.service';

@Component({
  selector: 'app-TeacherDetails',
  templateUrl: './TeacherDetails.component.html',
  styleUrls: ['./TeacherDetails.component.css']
})
export class TeacherDetailsComponent implements OnInit {

  teacherDetails:any;
  constructor(private service:LoginService){
    this.teacherDetails=this.service.getTeacherDetails();
  }

  ngOnInit() {
  }

}
