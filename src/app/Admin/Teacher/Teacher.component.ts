import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LeaveDetailsService } from 'src/app/Services/LeaveDetails.service';
import { ProfileService } from 'src/app/Services/Profile.service';
import { TeacherService } from './Teacher.service';

@Component({
  selector: 'app-Teacher',
  templateUrl: './Teacher.component.html',
  styleUrls: ['./Teacher.component.css']
})
export class TeacherComponent  {

  status=false;
  studentForm:any;
  userid=0;
  teacherForm:any;
  userinfo:any;
  dept:string[]=['Computer science Engineering','Information Technology','Electrical and Electronical enginerring','Electrical and communication Engineering','Mechanical Engineering','Civil Engineering','Agriculture Engineering','Bio-Medical Engineering','Food Technology','Bio Technology'];
  constructor(private formBuilder:FormBuilder, private teacherService:TeacherService,private leaveDetailsService:LeaveDetailsService){
    this.leaveDetailsService.getTeacherLeaveDetails().subscribe(data=>
      {
        this.teacherLeave=data;
      })
  this.teacherForm=this.formBuilder.group({
    name:['',[Validators.required, Validators.pattern('^[A-Za-z\s]+$')]],
    teacherid:['',[Validators.required, Validators.pattern('^[0-9]{1,3}$')]],
    department:['',[Validators.required]],
    email:['',[Validators.required, Validators.pattern('^\\w+([\\.-]?\\w+)*@gmail.com$')]],
    phonenumber:['',[Validators.required, Validators.pattern('^[0-9]{10}$')]],
    salary:[20000]
  })
  }
view:any=false
leave:any=false
teacherLeave:any;
getIndex(index: number): number {
  return (index +this.teacherLeave.length+1) -this.teacherLeave.length;
}
leaveDetails()
{
  this.leave=!this.leave
  this.remove=false;
  this.view=false;
  this.status=false;

}
show()
{
  this.leave=false;
  this.remove=false;
  this.view=false;
  this.status=!this.status;
}
details()
{
  this.leave=false;
  this.remove=false;
  this.status=false;
  this.view=!this.view;

}
onSubmit()
{
  var username=this.teacherForm.get('name').value;
  var password=this.teacherForm.get('phonenumber').value;
  username=username.replace(" ","");
  var body=this.teacherForm.value;
  var data={"username":username,"password":password};
  console.log(body);
  console.log(data);
  this.teacherService.addTeacherUser(data).subscribe(value=>
    {
      this.teacherService.addTeacherDetails(body).subscribe(response=>
        {
          this.status=!this.status;
          alert("Teacher user Added");
        })
    })
}
onDelete()
{
  var userDetails:any;
  var userId:any;
  var name=this.teacherForm.get('name').value;
  var teacherid=this.teacherForm.get('teacherid').value;
  this.teacherService.getTeacherDetails().subscribe(data=>
    {
      userDetails=data;
      for (const user of userDetails) {
        if(teacherid==user.teacherid)
        {
          userId=user.id;
        }
      }
      if(userId!==0)
      {
      this.teacherService.deleteTeacherUser(userId).subscribe(data=>
        {
          this.teacherService.deleteTeacherDetails(userId).subscribe(response=>
            {
              this.remove=!this.remove;
              alert("User Deleted Successfully");
            })
        })
      }
      else{
        alert("You enter wrong Details");
      }
    })
}
remove:any=false;
delete()
{
  this.leave=false;
  this.view=false;
  this.status=false;
  this.remove=!this.remove;
}

}
