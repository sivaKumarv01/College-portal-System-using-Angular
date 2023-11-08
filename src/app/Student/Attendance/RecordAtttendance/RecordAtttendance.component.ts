import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceService } from 'src/app/Services/Attendance.service';
import { ProfileService } from 'src/app/Services/Profile.service';

@Component({
  selector: 'app-RecordAtttendance',
  templateUrl: './RecordAtttendance.component.html',
  styleUrls: ['./RecordAtttendance.component.css']
})
export class RecordAtttendanceComponent  {

  todaydate:any;
  noOfDays:any;
  present=true;
  attendance:any;
  status="";
  markAttendance=0;
  percentage:any;
  presentDay:any;
  attendanceDetails:any=[];
  user:any;
  userId:any=0;
  i=0;
  constructor(private attendanceService:AttendanceService,private profileService:ProfileService,  private router:Router)
  {
   this.user=sessionStorage.getItem('username')
   this.userId=sessionStorage.getItem('userid')
   const currentTime=new Date();
   const startTime=new Date();
   startTime.setHours(8,30,0);
   const endTime=new Date();
   startTime.setHours(9,30,0);
   if (currentTime >= startTime && currentTime <= endTime) {
    this.present=true;

  } else {

    this.present=false;
  }
    this.attendanceService.getTotalDays().subscribe(data=>
      {
        this.attendance=data;
        console.log(this.attendance);
        for (const details of this.attendance) {
          this.noOfDays=details.Totaldays;
          this.todaydate=details.date;
        }
        console.log(this.noOfDays);
        console.log(this.todaydate);
      })
    this.attendanceService.getAttendance(this.userId).subscribe(data=>
      {
        this.attendanceDetails[this.i]=data;
        console.log(this.attendanceDetails);
      })
    }
  submit()
  {
    this.user=sessionStorage.getItem('username')
    this.userId=sessionStorage.getItem('userid')
    this.attendanceService.getAttendance(this.userId).subscribe(data=>
      {
        this.attendanceDetails[this.i]=data;
        console.log(this.attendanceDetails);
      })

    for(let details of this.attendanceDetails)
    {

      details.marked=details.marked+1;
      details.status=this.status

      if(this.status==='Present' || this.status==='Excuse')
      {
        details.presentDays=details.presentDays +1;
        details.AttendancePercentage=(details.presentDays/this.noOfDays)*100

      }
      else if(this.status==='Absent')
      {
        this.presentDay=details.presentDays;
        details.AttendancePercentage=(details.presentDays/this.noOfDays)*100
        console.log(details.AttendancePercentage);
      }
      this.percentage=details.AttendancePercentage;
      this.presentDay=details.presentDays;
    }
    this.markAttendance=1;
    console.log(this.markAttendance);
    var addStatus={"userid":this.userId,"date":this.todaydate,"status":this.status,"AttendancePercentage":this.percentage};
    console.log(addStatus);
    this.attendanceService.addAttendance(addStatus).subscribe(data=>
      {
        console.log("Added");
      })
    var updateStatus={"marked":1,"status":this.status,"AttendancePercentage":this.percentage,"presentDays":this.presentDay};
    console.log(updateStatus);
    this.attendanceService.updateAttendance(this.userId,updateStatus).subscribe(data=>
      {
        console.log("updated");
      })
      var update={"percentage":this.percentage}
      this.profileService.updateStudentDetails(update,this.userId).subscribe(data=>
        {
          console.log("updated");
        })
    alert("Attendance Marked");
    this.router.navigate(['AttendanceRecord']);
  }
  getMarkAttendance()
  {
    return this.markAttendance;
  }

}
