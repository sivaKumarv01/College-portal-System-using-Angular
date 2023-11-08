import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LeaveDetailsService } from 'src/app/Services/LeaveDetails.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-TeacherApplyLeave',
  templateUrl: './TeacherApplyLeave.component.html',
  styleUrls: ['./TeacherApplyLeave.component.css']
})
export class TeacherApplyLeaveComponent  {

  userid:any=0;
  todayDate:any=0;
  name:any='';
  constructor(private formbuilder:FormBuilder,private leaveDetailsService:LeaveDetailsService )
  {
    this.initiate();
    this.name=sessionStorage.getItem('username');
    console.log(this.name);
    this.userid=sessionStorage.getItem('userid');
    console.log(this.userid);
    const date=new Date();
    this.todayDate=date.toLocaleDateString();
    console.log(this.todayDate);
  }
  leaveTypes:string[]=environment.leaveType
  dept:string[]=environment.teacherDepartment
  leaveDays=0;

  calculateDays(): void {
    if (this.leaveForm.value.startDate && this.leaveForm.value.endDate) {
      const timeDiff = new Date(this.leaveForm.value.endDate).getTime() - new Date(this.leaveForm.value.startDate).getTime();
      this.leaveDays= Math.ceil(timeDiff / (1000 * 3600 * 24))+1;
      console.log(this.leaveDays);
    }
  }
  leaveForm=this.formbuilder.group({
    userId:this.userid,
    userName:this.name,
    todayDate:['',[Validators.required]],
    department:["",[Validators.required]],
    leaveType:["",[Validators.required]],
    startDate:["",[Validators.required]],
    endDate:["",[Validators.required]],
    reason:["",[Validators.required]],
    leaveDays:[this.leaveDays,[Validators.required]],
  }
  )
  leaveRequest:any;
  leaveDetails:any[]=[];
  index=0;
  private initiate()
  {
    this.leaveDetailsService.getTeacherLeaveDetails().subscribe(data=>
      {
        this.leaveRequest=data;

      for(let details of this.leaveRequest)
      {
        if(details.userId==this.userid)
        {
          this.leaveDetails[this.index]=details;
          this.index++;
        }
      }
    })
  }

  onSubmit()
  {
    console.log(this.leaveForm.value);
    this.leaveForm.get('userId')?.setValue(this.userid);
    this.leaveForm.get('userName')?.setValue(this.name);
    this.leaveForm.get('todayDate')?.setValue(this.todayDate);
    console.log(this.leaveForm.value)
    var request=this.leaveForm.value;
     this.leaveDetailsService.addTeacherLeaveRequest(request).subscribe(response=>
      {
        alert("Leave Applied");
        this.initiate();
      })

    this.leaveForm.reset();
    console.log(this.leaveForm.value);
  }


}
