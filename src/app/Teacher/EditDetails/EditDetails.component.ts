import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/Services/Profile.service';

@Component({
  selector: 'app-EditDetails',
  templateUrl: './EditDetails.component.html',
  styleUrls: ['./EditDetails.component.css']
})
export class EditDetailsComponent implements OnInit {
  teacherForm:any;
  userid:any;
  constructor(private profileService:ProfileService) {
  this.userid=sessionStorage.getItem('userid');
}

  ngOnInit() {
  }
  value:any={};
  saveChanges()
  {
    var editDetails=this.teacherForm.value;
    for (const key in editDetails) {
      if(editDetails[key]!==null)
      {
        console.log(this.value[key]+"="+editDetails[key]);

        this.value[key]=editDetails[key];
      }
    }
    this.profileService.updateTeacherDetails(this.value,this.userid).subscribe(response=>
      {
        alert("Details updated Successfully");
      })

  }
}
