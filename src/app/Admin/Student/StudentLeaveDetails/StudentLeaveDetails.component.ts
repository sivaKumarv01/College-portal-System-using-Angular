import { Component, OnInit } from '@angular/core';
import { LeaveDetailsService } from 'src/app/Services/LeaveDetails.service';

@Component({
  selector: 'app-StudentLeaveDetails',
  templateUrl: './StudentLeaveDetails.component.html',
  styleUrls: ['./StudentLeaveDetails.component.css']
})
export class StudentLeaveDetailsComponent implements OnInit {

  leave:any;
  status:any;
  teacherleave:any;
  constructor(private leaveDetailsService:LeaveDetailsService){
    this.leaveDetailsService.getLeaveDetails().subscribe(response=>
      {
        this.leave=response;
      })
      this.leaveDetailsService.getTeacherLeaveDetails().subscribe(data=>
        {
          this.teacherleave=data;
        })
  }
  private initate()
  {

  }
  // toApprove(id:any)
  // {
  //   const updateStatus={status:'Approved'}
  //   this.db.updateStatus(id,updateStatus).subscribe(data=>
  //     {
  //       this.initate();
  //       alert("Leave Approved");
  //     })
  // }
  getIndex(index: number): number {
    return (index +this.leave.length+1) -this.leave.length;
  }

  ngOnInit() {
  }

}
