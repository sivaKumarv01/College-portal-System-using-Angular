import { Component, OnInit } from '@angular/core';
import { CourseService } from '../Services/Course.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-Course',
  templateUrl: './Course.component.html',
  styleUrls: ['./Course.component.css']
})
export class CourseComponent implements OnInit {
  coursesDetails:any;
  enrolledCourses:any;
  userType:any;
  userid:any;
  constructor(private formBuilder:FormBuilder,  private courseService:CourseService) {
    this.userType=sessionStorage.getItem('usertype');
    this.userid=sessionStorage.getItem('userid');
    this.initializeData();
   }
   private initializeData()
   {
    this.courseService.getCourseDetails().subscribe(id=>
      {
        this.coursesDetails=id;
      })
      this.courseService.getEnrollCourse().subscribe(response=>
        {
          this.enrolledCourses=response;
        })
   }
   enrollForm=this.formBuilder.group({
    userId:"",
    courseid:"",
    coursename:"",
    courseDescription:"",
    link:"",
    image:""
   })
  ngOnInit() {
  }
  toEnrollCourse(id:any)
  {
    console.log(this.enrolledCourses);
  let count=0;
  for(let eCourse of this.enrolledCourses)
  {
    if(id===eCourse.courseid && this.userid==eCourse.userId)
    {
      count=1;
    }
  }
  console.log("count"+count);
  if(count==0)
  {
    for(let course of this.coursesDetails)
    {
      if(id==course.id)
      {
        this.enrollForm.get('userId')?.setValue(this.userid);
        this.enrollForm.get('courseid')?.setValue(id);
        this.enrollForm.get('image')?.setValue(course.image);
        this.enrollForm.get('coursename')?.setValue(course.coursename);
        this.enrollForm.get('courseDescription')?.setValue(course.courseDescription);
        this.enrollForm.get('link')?.setValue(course.link);
        var enrollCourse=this.enrollForm.value;
        console.log(enrollCourse);
        this.courseService.enrollCourse(enrollCourse).subscribe(data=>
          {
            this.initializeData();
            window.location.reload();
            alert("Course Enroll Successfully");
          })
        }
      }
  }
  else{
    alert("your already enroll this course");
  }

  }

}
