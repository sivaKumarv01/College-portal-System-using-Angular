import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProfileService } from 'src/app/Services/Profile.service';

@Component({
  selector: 'app-EditMyDetails',
  templateUrl: './EditMyDetails.component.html',
  styleUrls: ['./EditMyDetails.component.css']
})
export class EditMyDetailsComponent implements OnInit {
studentForm:any
userid:any;
  constructor(private profileService:ProfileService,private formBulider:FormBuilder) {
    this.userid=sessionStorage.getItem('userid');
    this.studentForm=this.formBulider.group({
      username:[],
      address:[],
      branch:[],
      year:[],
      fathername:[],
      gender:[],
      dob:[],
      phonenumber:[],
      city:[],
      district:[],
      state:[],
      nationality:[],
      country:[],
      parentphonenumber:[],
      email:[],
    })
  }

  ngOnInit() {
  }
  value:any={}
  saveChanges()
  {
    var editDetails=this.studentForm.value;
    for (const key in editDetails) {
      if(editDetails[key]!==null)
      {
        console.log(this.value[key]+"="+editDetails[key]);

        this.value[key]=editDetails[key];
      }
    }
    this.profileService.updateStudentDetails(this.value,this.userid).subscribe(response=>
      {
        this.ngOnInit();
        alert("Details updated Successfully");
      })
  }

}
