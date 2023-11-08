import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/Services/Attendance.service';

@Component({
  selector: 'app-Attendance',
  templateUrl: './Attendance.component.html',
  styleUrls: ['./Attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  todaydate:any;
  noOfDays:any;
  userAttedanceDetails:any=[];
  userattendance=0;
  attendance:any;
  percentage:any;
  markAttendance=0;
  attendanceDetails:any=[];
  user:any;
  userId:any=0;
  getAttendance:any=[];
  status:any
  index=0;
  constructor(private attendanceService:AttendanceService) {
    this.intializeData();

    this.user=sessionStorage.getItem('username')
    this.userId=sessionStorage.getItem('userid');
     this.attendanceService.getTotalDays().subscribe(data=>
       {
         this.attendance=data;
         console.log(this.attendance);
         for (const details of this.attendance) {
           this.noOfDays=details.Totaldays;
           this.todaydate=details.date;
         }
       })
  }

  private intializeData()
  {
    this.attendanceService.getMarkedAttendance().subscribe(data=>
      {
      this.getAttendance=data;
      this.index=0;
      for(let details of this.getAttendance)
      {
        if(details.userid===this.userId && details.date !==this.todaydate)
        {
          this.userAttedanceDetails[this.index]=details;
          this.index++;
        }
      }
      })
    this.attendanceService.getAttendance(this.userId).subscribe(data=>
      {
        this.attendanceDetails[this.userattendance]=data;

        for(let details of this.attendanceDetails)
        {
          this.percentage=details.AttendancePercentage;
          this.markAttendance=details.marked;
          this.status=details.status;
        }
        console.log(this.markAttendance);
        console.log(this.status);
      })
    }
  ngOnInit() {
    this.intializeData();
  }

}
