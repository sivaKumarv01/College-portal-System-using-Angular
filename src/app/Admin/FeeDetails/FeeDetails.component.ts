import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/Services/Data.service';
import { FeePaymentService } from 'src/app/Services/FeePayment.service';
import { StudentService } from '../Student/Student.service';
import { ProfileService } from 'src/app/Services/Profile.service';
import { LoginService } from 'src/app/Services/Login.service';

@Component({
  selector: 'app-FeeDetails',
  templateUrl: './FeeDetails.component.html',
  styleUrls: ['./FeeDetails.component.css']
})
export class FeeDetailsComponent {

  feeDetails:any;
  activebutton=false;
  constructor(private feePayment:FeePaymentService,private profileService:ProfileService, private loginService:LoginService, private dataService:DataService,private formBuilder:FormBuilder ){
    this.initializeData();
  }
  transactionView=false;
  feeUpdateView=false;
  transaction()
  {
    this.transactionView=!this.transactionView;
    this.feeUpdateView=false;
  }
  update()
  {
    this.transactionView=false;
    this.feeUpdateView=!this.feeUpdateView;
  }
  userDetails:any;
  private initializeData()
  {
    this.feePayment.getFeeDetails().subscribe(data=>
      {
        this.feeDetails=data;
      })
  }
  view=false;
  cfee=0;
  fee=this.formBuilder.group({
    collegefee:[],
    examfee:[],
    year:['']
  })
  college=false;

  editCollegeFee()
  {
    this.activebutton=true;
    this.cfee=1;
    this.college=!this.college
    this.view=false;
  }
  editExamfee()
  {
    this.activebutton=true;
    this.cfee=0;
    this.view=!this.view;
    this.college=false
  }
  getcfee()
  {
    return this.cfee;
  }
  courseDetails:any;
  course:any;
  save(id:any)
  {
    this.activebutton=false;
    this.feePayment.getFeeDetails().subscribe(c=>
      {
        this.courseDetails=c;
        for (const details of this.courseDetails) {

          if(id==details.id)
          {
            console.log(id);
            this.course=details.course;
          }
        }
    this.college=false;
    this.view=false
    var balancefee;
    var editfee=this.getcfee();
    var year=this.fee.get('year')?.value;
   this.loginService.getStudentDetails().subscribe(value=>
      {
        this.userDetails=value;
      })
    var data:any;
    if(editfee===1)
    {
      var collegefee=this.fee.get('collegefee')?.value;
      if(year==='1st-year')
      {
        data={"firstYearCollegeFee":collegefee}
      }
      else if(year==='2nd-year')
      {
        data={"secondYearCollegeFee":collegefee}
      }
      else if(year==='3rd-year')
      {
        data={"thirdYearCollegeFee":collegefee}
      }
      else if(year==='4th-year')
      {
        data={"fourthYearCollegeFee":collegefee}
      }
      this.feePayment.updateFeeDetails(data,id).subscribe(response=>
        {
          for (const details of this.userDetails) {
            balancefee=details.balancecollegefee;
            balancefee=balancefee+collegefee;
            var feeupdate={"balancecollegefee":balancefee,"collegefee":collegefee}
            if(this.course===details.department && year===details.year)
            {
                this.profileService.updateStudentDetails(feeupdate,details.id).subscribe(data=>
                {
                  console.log("updated");
                })
            }
          }this.initializeData();
          alert("Fees Updated");
        })
    }
    else
    {
      var examfee=this.fee.get('examfee')?.value;

      if(year==='1st-year')
      {
        data={"firstYearExamFee":examfee}
      }
      else if(year==='2nd-year')
      {
        data={"secondYearExamFee":examfee}
      }
      else if(year==='3rd-year')
      {
        data={"thirdYearExamFee":examfee}
      }
      else if(year==='4th-year')
      {
        data={"fourthYearExamFee":examfee}
      }
      var updatefee={"examfee":examfee};
      this.feePayment.updateFeeDetails(data,id).subscribe(response=>
        {
          for (const details of this.userDetails) {
            if(this.course===details.department && year===details.year)
            {
              this.profileService.updateStudentDetails(updatefee,details.id).subscribe(data=>
                {
                  console.log("updated");
                })
            }
          }
          this.initializeData();
          alert("fees updated");
        })

    }
  })

  }
}
