import { Component, OnInit } from '@angular/core';
import { FeePaymentService } from 'src/app/Services/FeePayment.service';

@Component({
  selector: 'app-TransactionDetails',
  templateUrl: './TransactionDetails.component.html',
  styleUrls: ['./TransactionDetails.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  paymentDetails:any;
  constructor(private feePayment:FeePaymentService)
  {
    this.feePayment.getPaymentDetails().subscribe(response=>
      {
        this.paymentDetails=response;
        console.log(this.paymentDetails);

      })

  }
  ngOnInit() {
  }

}
