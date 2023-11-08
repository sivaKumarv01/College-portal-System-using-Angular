import { Component, OnInit } from '@angular/core';
import { Student } from './Student';
import { AttendanceService } from 'src/app/Services/Attendance.service';
@Component({
  selector: 'app-StudentAttendance',
  templateUrl: './StudentAttendance.component.html',
  styleUrls: ['./StudentAttendance.component.css']
})
export class StudentAttendanceComponent implements OnInit {

  students: Student[] = [];
  attendanceHistory:any[]=[];
   selectedSortOption: string = '';
  searchText: string='';
  index=0;
  view=false;
  attendanceDetails:any;
  attendance:any=[];
  totalDay:any;
  markedAttendance:any=[];
  todayAttendance:any=[];
  length:any;
  userDetails:any;
  presentDate:any;
  constructor(private service:AttendanceService)
  {
    this.service.getAllAttendance().subscribe((response:any)=>
      {
        this.students=response;
        })
        this.service.getMarkedAttendance().subscribe(response=>
          {
            this.attendanceDetails=response;
            console.log(this.attendanceDetails);
          })

  }
  ngOnInit(): void {
    this.service.getTotalDays().subscribe(data=>
      {
        this.attendance=data;
      })
    for(let details of this.attendance)
        {
          this.totalDay=details.Totaldays;
          this.presentDate=details.date;
        }

  }
  createAttendance()
  {
    this.ngOnInit();
    console.log(this.totalDay);
    const date=new Date();
    var todayDate=date.toLocaleDateString();
    console.log("Today date"+todayDate);
    console.log("DB Date"+this.presentDate);
    if(this.presentDate!==todayDate)
    {
      this.totalDay=this.totalDay+1;
      var body={"Totaldays":this.totalDay,"date":todayDate};
      var update={"date":todayDate,"status":"pending","marked":0};
    this.service.updateTotalDays(body).subscribe(value=>
        {
          console.log("updates")
          this.service.getAllAttendance().subscribe(data=>
            {
              this.todayAttendance=data;
            })
            var noOfUser;
          for (var user of this.todayAttendance) {
            noOfUser=user.id;
          }
          var user:any=0;
          console.log(noOfUser);
          for (let index = 1; index <= noOfUser; index++) {

            this.service.updateAllAttendane(update,index).subscribe(response=>
              {
                console.log("update");
              })
              user++;
            }
            if(user===noOfUser)
            {
              alert(" Attendance created  successfully.");
            }
            else
            {
              alert("Unable to process the Attendance")
            }

        })
    }
    else
    {
      alert("Attendance already created.");
    }


  }
  get filteredStudents(){
    let filteredStudents = this.students;
    if (this.searchText) {
      filteredStudents = filteredStudents.filter(students =>
        students.username.toLowerCase().startsWith(this.searchText.toLowerCase())&&
        students.username.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
    switch (this.selectedSortOption) {
      case 'name':
        filteredStudents = filteredStudents.sort((a, b) =>
          a.username.localeCompare(b.username)
        );
        break;
      case 'department':
        filteredStudents = filteredStudents.sort((a, b) =>
          a.department.localeCompare(b.department)
        );
        break;
      case 'attendance':
        filteredStudents = filteredStudents.sort((a, b) =>
          b.AttendancePercentage - a.AttendancePercentage
        );
        break;
      default:
        break;
    }

    return filteredStudents;
  }
  history:any[]=[];

  showAttendanceHistory(id:any)
  {
    console.log(id);

    this.view=true;
    console.log(this.attendanceHistory);
    this.index=0;
    this.history=[];
    for (const student of this.attendanceDetails) {
      console.log(student);
      if(student.userid==id)
      {
        this.history[this.index]=student;
        this.index++;
      }
    }
  }
}
