import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeePaymentService {

constructor(private http:HttpClient) { }
 addPaymentDetials(data:any)
  {
    return this.http.post(environment.apiUrl+"/paymentDetails",data)
  }
  getFeeDetails()
  {
    return this.http.get(environment.apiUrl+"/feeDetails");
  }
  updateFeeDetails(data:any,id:any)
  {
    return this.http.patch(environment.apiUrl+"/feeDetails/"+id,data);
  }
  getPaymentDetails()
  {
    return this.http.get(environment.apiUrl+"/paymentDetails");
  }

}
