import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/Services/Data.service';
import { FeePaymentService } from 'src/app/Services/FeePayment.service';
import { ProfileService } from 'src/app/Services/Profile.service';

@Component({
  selector: 'app-Receipt',
  templateUrl: './Receipt.component.html',
  styleUrls: ['./Receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  ereceiptForm:any;
  userDetails:any=[];
  exam=false;
 name:any;
 rollnumber:any;
 balanceamount:any;
 department:any;
  userId:any;
  i=0;
  pay=0;

  constructor(private profileService:ProfileService,  private formBuilder:FormBuilder,private dataservice:DataService){

    this.userId=sessionStorage.getItem('userid');
    this.pay=dataservice.getAmountpay();
    this.exam=this.dataservice.getExam();

  this.ereceiptForm=this.formBuilder.group({
    studentname:[''],
    rollNumber:[''],
    course:[''],
    amountPayed:[],
    balanceAmount:[],
    paymode:["Online"]
  })
  }
ngOnInit(): void {
  this.profileService.getOneStudentDetails(this.userId).subscribe(response=>
    {
      this.userDetails[this.i]=response;
      for (const details of this.userDetails) {
        this.name=details.username;
        this.rollnumber=details.rollnumber;
        this.department=details.department;
        this.balanceamount=details.balancecollegefee;

    }

})
}
}
