import { Injectable } from '@angular/core';
import { ProfileService } from './Profile.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  collegeFee: number=0;
  examFee:number=0;
  userId:any;
  constructor(private profileService:ProfileService) {
    this.userId=sessionStorage.getItem('userid');


   }

  setCollegeFee(fee: number) {
   this.exam=false;
    this.collegeFee=fee;
  }

  getCollegeFee() {
    return this.collegeFee
  }
  exam=false;
  setExamFee(fee:number)
  {
    this.exam=true;
    this.examFee=fee;
  }
  getExamFee()
  {
    return this.examFee
  }
  updatefee(amount:any)
  {

    this.profileService.updateStudentDetails(amount,this.userId).subscribe(response=>
      {
        console.log( "fess Updated");
      })
  }
  amountPay=0;
  setAmountpay(amount:number)
  {
    this.amountPay=amount;
  }
  getAmountpay()
  {
    return this.amountPay;
  }
  getExam()
  {
    return this.exam;
  }
  courseDetails:any;
  getCollegeCourse(id:any)
  {
    var course="";
  }

}
