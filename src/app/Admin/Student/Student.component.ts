import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TeacherService } from '../Teacher/Teacher.service';
import { FeePaymentService } from 'src/app/Services/FeePayment.service';
import { AttendanceService } from 'src/app/Services/Attendance.service';
import { StudentService } from './Student.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Student',
  templateUrl: './Student.component.html',
  styleUrls: ['./Student.component.css']
})
export class StudentComponent  {

  status=false;
  studentForm:any;
  feeDetails:any=[];
  index=0;
  fee:any;
  userid=0;
  teacherForm:any;
  userinfo:any; studentDetails:any;

  dept:any[]=environment.department;
  constructor(private studentService:StudentService,  private formBuilder:FormBuilder,private attendanceService:AttendanceService, private teacherService:TeacherService,private feepaymentService:FeePaymentService){
    this.teacherService.getStudentDetails().subscribe(data=>
      {
        this.studentDetails=data;
        console.log(this.studentDetails);
      })
      this.feepaymentService.getFeeDetails().subscribe(value=>
        {
          this.fee=value;
        })
    this.attendanceService.getAllAttendance().subscribe(response=>
      {
          this.userinfo=response;
          for (const user of this.userinfo) {
            this.userid=user.id;
          }
      })
  this.studentForm=this.formBuilder.group({
    username:['',[Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
    department:['',[Validators.required]],
    year:['',[Validators.required]],
    rollnumber:['',[Validators.required, Validators.pattern('^[A-Za-z0-9]{1,7}$')]],
    phonenumber:['',[Validators.required, Validators.pattern('^[0-9]{10}$')]],
    email:['',[Validators.required, Validators.pattern('^\\w+([\\.-]?\\w+)*@gmail.com$')]],
    percentage:[100],
    collegefee:[''],
    examfee:[''],
    balancecollegefee:['']
  })
  }
  leave=false;
view:any=false

show()
{
  this.remove=false;
  this.view=false;
  this.status=!this.status;
}
details()
{
  this.remove=false;
  this.status=false;
  this.view=!this.view;

}
onSubmit()
{
  var username=this.studentForm.get('rollnumber').value;
  var password=this.studentForm.get('phonenumber').value;
  var department=this.studentForm.get('department').value;
  var name=this.studentForm.get('username').value;
  var year=this.studentForm.get('year').value;
  console.log(this.fee);
  var collegefee;
  var examfee;
  for (const details of this.fee) {
    if(department===details.course)
    {
      this.feeDetails[this.index]=details;
      this.index++;
    }
  }
  for (const details of this.feeDetails) {
    if(year==='1st-year')
    {
      collegefee=details.firstYearCollegeFee;
      examfee=details.firstYearExamFee;
    }
    else if(year==='2nd-year')
    {
      collegefee=details.secondYearCollegeFee;
      examfee=details.secondYearExamFee;
    }
    else if(year==='3rd-year')
    {
      collegefee=details.thirdYearCollegeFee;
      examfee=details.thirdYearExamFee;
    }
    else if(year==='4th-year')
    {
      collegefee=details.fourthYearCollegeFee;
      examfee=details.fourthYearExamFee;
    }
    this.studentForm.get('collegefee').setValue(collegefee);
    this.studentForm.get('examfee').setValue(examfee);
    this.studentForm.get('balancecollegefee').setValue(collegefee);
  }
  var body=this.studentForm.value;
  this.userid=1+this.userid;
  var data={"username":username,"password":password}
  var attendance= {
    "userid": this.userid,
    "username": name,
    "department":department,
    "marked": 0,
    "date": "",
    "rollnumber":username,
    "status": "pending",
    "AttendancePercentage": 100,
    "presentDays": 0
  }

  this.studentService.addStudentUser(data).subscribe(data=>
    {
      this.studentService.addStudentAttendance(attendance).subscribe(response=>
        {
          this.studentService.addStudentDetails(body).subscribe(value=>
            {
            this.status=!this.status;
            alert("Student Added Successfully");
          })
      })
  })

}
onDelete()
{
  var userDetails:any;
  var userId=0;
  var rollnumber=this.studentForm.get('rollnumber').value;
  this.studentService.getStudentuser().subscribe(data=>
    {
      userDetails=data;
      for (const user of userDetails) {
        if(rollnumber===user.username)
        {

          userId=user.id;
        }
      }
      if(userId!==0)
      {
        this.studentService.deleteStudentUser(userId).subscribe(data=>
          {
            this.studentService.deleteStudentDetails(userId).subscribe(value=>
              {
                this.studentService.deleteAttendance(userId).subscribe(response=>
                  {
                    this.remove=!this.remove;
                    alert("Student Deleted");
                  })
              })
          })
      }
      else
      {
        alert("you entered wrong details");
      }
       })
}
remove:any=false;
delete()
{
  this.view=false;
  this.status=false;
  this.remove=!this.remove;
}


}
