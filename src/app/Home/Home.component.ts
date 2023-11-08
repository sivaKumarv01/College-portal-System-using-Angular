import { Component, OnInit } from '@angular/core';
import { CourseService } from '../Services/Course.service';
import { window } from 'rxjs';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  courseDetails:any;
  loggedIn=localStorage.getItem('loggedIn');
  constructor(private courseService:CourseService) {

    this.courseService.getCourseDetails().subscribe(value=>
      {
        this.courseDetails=value;
      })
    }

    ngOnInit() {
      
    }


}
