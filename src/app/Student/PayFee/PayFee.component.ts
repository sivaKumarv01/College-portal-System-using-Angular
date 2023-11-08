import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/Data.service';
import { FeePaymentService } from 'src/app/Services/FeePayment.service';
import { ProfileService } from 'src/app/Services/Profile.service';

@Component({
  selector: 'app-PayFee',
  templateUrl: './PayFee.component.html',
  styleUrls: ['./PayFee.component.css']
})
export class PayFeeComponent implements OnInit {

  userId:any;
  collegefee:any=0;
  examfee:any=0;

  constructor(private dataService:DataService,  private profileService:ProfileService,private feePaymentService:FeePaymentService,private router:Router){
    this.userId=sessionStorage.getItem('userid')
    this.initiate();
  }
  ngOnInit(): void {

  }
  userDetails:any=[];
  index=0;

  private initiate()
  {
    this.profileService.getOneStudentDetails(this.userId).subscribe(response=>
      {
        this.userDetails[this.index]=response;
      })
  }
  toPayExamFee()
  {
    for(let details of this.userDetails)
    {
      this.examfee=details.balancecollegefee;
    }
    this.dataService.setCollegeFee(0);
    this.dataService.setExamFee(this.examfee);
    this.router.navigate(['payment']);
  }
  toPayCollegeFee()
  {
    for(let details of this.userDetails)
    {
      this.collegefee=details.balancecollegefee
    }
    this.dataService.setExamFee(0);
    this.dataService.setCollegeFee(this.collegefee);
    this.router.navigate(['payment']);
  }

}
