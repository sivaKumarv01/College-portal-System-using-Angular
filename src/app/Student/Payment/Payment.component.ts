import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/Data.service';
import { FeePaymentService } from 'src/app/Services/FeePayment.service';
import { ProfileService } from 'src/app/Services/Profile.service';

@Component({
  selector: 'app-Payment',
  templateUrl: './Payment.component.html',
  styleUrls: ['./Payment.component.css']
})
export class PaymentComponent implements OnInit {

  userDetails:any=[];
  paymentForm:any;
  exam=false;
  pay=false;
  payment=true;
  cfee:any=0;
  efee:any=0;
  index=0;
  userId:any=0;
 name='';
  rollnumber=''
  month=["Janauary","Febuary","March","April","May","June","july","August","September","October","November","Decemeber"];
  constructor(private profileService:ProfileService,private feePaymentService:FeePaymentService, private router:Router, private formBuilder:FormBuilder,private dataservice:DataService){
    this.userId=sessionStorage.getItem('userid')
    this.cfee=this.dataservice.getCollegeFee();
    this.efee=this.dataservice.getExamFee();
    if(this.efee>0)
    {
      this.pay=!this.pay;
    }
    this.profileService.getOneStudentDetails(this.userId).subscribe(response=>
      {
        this.userDetails[this.index]=response;

      for (const details of this.userDetails) {
       this. name=details.username
        this.rollnumber=details.rollnumber
      }

      })
  }
   ngOnInit(): void {
    console.log(this.cfee);
    console.log(this.efee);
    this.paymentForm=this.formBuilder.group({
      collegeFee:[this.cfee],
      examfee:[this.efee],
      cardHolderName:['',[Validators.required, Validators.pattern('[A-Z\\s]+')]],
      cardNumber:['',[Validators.required, Validators.maxLength(16),Validators.minLength(16),Validators.pattern('[0-9]{16}')]],
      cvv:['', [Validators.required,Validators.maxLength(3), Validators.pattern('\\d{3}')]],
      expYear:['', [Validators.required, Validators.pattern('[0-9]{4}')]],
      expMonth:[,[Validators.required,]]
    })
  }
  onPay()
  {

      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();
      var m=this.paymentForm.get('expMonth').value;
      var year=this.paymentForm.get('expYear').value;

      if(this.cfee>0 && this.paymentForm.get('collegeFee').value >0)
      {
        var amount=this.paymentForm.get('collegeFee').value;
        this.dataservice.setAmountpay(amount);
        var bamount=this.cfee-amount;
        console.log(bamount);
        var update={"balancecollegefee":bamount};
        this.paymentForm.removeControl('examfee');
        var details={"StudentName":this.name,"rollnumber":this.rollnumber,"userid":this.userId,"payment":this.paymentForm.value};
        console.log(details);
        console.log(this.month[currentMonth]);
        console.log(this.month[currentMonth]<= m);
        console.log( year>=currentYear);
        if((this.month[currentMonth]<= m && year>=currentYear)||this.month[currentMonth]>= m && year>=currentYear)
        {
          this.payment=!this.payment
          this.dataservice.updatefee(update);
          this.feePaymentService.addPaymentDetials(details).subscribe(value=>
            {
              console.log("added");
            })
          setTimeout(() => {
            this.payment=!this.payment;
            alert("payment successfully");
            this.router.navigate(['receipt']);
          }, 3000);
        }
        else
        {
          alert("card will be Expired");
          return;
        }
      }
      else if(this.efee>0)
      {
        var amount=this.paymentForm.get('examfee').value;
        this.dataservice.setAmountpay(amount);
        var eupdate={"examfee":0};
        this.paymentForm.removeControl('collegeFee');
        var details={"StudentName":this.name,"rollnumber":this.rollnumber,"userid":this.userId,"payment":this.paymentForm.value};
        console.log(details);
        console.log(this.month[currentMonth]);
        console.log(this.month[currentMonth]<= m);
        console.log( year>=currentYear);
        if((this.month[currentMonth]<= m && year>=currentYear)||this.month[currentMonth]>= m && year>=currentYear)
        {
          this.payment=!this.payment
          this.dataservice.updatefee(eupdate);
          this.exam=!this.exam;
          this.feePaymentService.addPaymentDetials(details).subscribe(value=>
            {
              console.log("added");
            })
          setTimeout(() => {
            this.payment=!this.payment;
            alert("payment successfully");
            this.router.navigate(['receipt']);

          }, 3000);
        }
        else
        {
          alert("card will be Expired");
          return;
        }
      }
      else
      {
        alert("Please enter amount greater than 0")
      }
  }

}
