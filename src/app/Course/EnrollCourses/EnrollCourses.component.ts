import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Services/Course.service';

@Component({
  selector: 'app-EnrollCourses',
  templateUrl: './EnrollCourses.component.html',
  styleUrls: ['./EnrollCourses.component.css']
})
export class EnrollCoursesComponent implements OnInit {

  enrolledCourse:any
  userid:any;
  userCourse:any=[];
  index=0;
  constructor(private courseService:CourseService)
  {

    this.userid=sessionStorage.getItem('userid');
    console.log(this.userid);
    this.courseService.getEnrollCourse().subscribe(data=>
      {
        this.enrolledCourse=data;
        console.log(this.enrolledCourse);
        for(let details of this.enrolledCourse)
        {
          if(this.userid===details.userid)
          {
            this.userCourse[this.index]=details;
            this.index++;
          }
        }

      })
  }

  ngOnInit(): void {


}
}
