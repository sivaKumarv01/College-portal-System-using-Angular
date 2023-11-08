import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LeaveDetailsService } from 'src/app/Services/LeaveDetails.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ApplyLeave',
  templateUrl: './ApplyLeave.component.html',
  styleUrls: ['./ApplyLeave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
  leaveTypes:string[]=environment.leaveType;
  course:string[]=environment.department;
  userid:any=0;
  leaveDetails:any=[];
  leaveRequest:any;
  todayDate:any;
  index=0;
  name:any="";
  leaveDays:any=0;
  constructor(private formBuilder:FormBuilder,private leaveService:LeaveDetailsService) {
    this.name=sessionStorage.getItem('username')
    console.log(this.name);
    this.userid=sessionStorage.getItem('userid')
    console.log(this.userid);
    const date=new Date();
    this.todayDate=date.toLocaleDateString();
    console.log(this.todayDate);
  }

  ngOnInit() {
    this.index=0;
    this.leaveService.getLeaveDetails().subscribe(data=>
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
      for(let d of this.leaveDetails)
      {
        console.log(this.leaveDetails);
      }
    })
  }
  calculateDays(): void {
    if (this.leaveForm.value.startDate && this.leaveForm.value.endDate) {
      const timeDiff = new Date(this.leaveForm.value.endDate).getTime() - new Date(this.leaveForm.value.startDate).getTime();
      this.leaveDays= Math.ceil(timeDiff / (1000 * 3600 * 24))+1;
    }
  }
  leaveForm=this.formBuilder.group({
    userId:this.userid,
    userName:this.name,
    AppliedDate:["",[Validators.required]],
    department:["",[Validators.required]],
    leaveType:["",[Validators.required]],
    startDate:["",[Validators.required]],
    endDate:["",[Validators.required]],
    reason:["",[Validators.required]],
    leaveDays:[this.leaveDays,[Validators.required]],

  })
  getIndex(index: number): number {
    return (index +this.leaveDetails.length+1) -this.leaveDetails.length;
  }
  onSubmit()
  {
    console.log(this.leaveDetails);
    console.log(this.leaveForm.value);
    this.leaveForm.get('userId')?.setValue(this.userid);
    this.leaveForm.get('userName')?.setValue(this.name);
    console.log(this.leaveForm.value)
    var request=this.leaveForm.value;
     this.leaveService.addLeaveRequest(request).subscribe(data=>{
      alert("Apply successfully")
      this.ngOnInit();
     }),

    this.leaveForm.reset();
  }


}
