import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './Student.component';
import { BrowserModule } from '@angular/platform-browser';
import { MyprofileComponent } from './Myprofile/Myprofile.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditMyDetailsComponent } from './EditMyDetails/EditMyDetails.component';
import { AppRoutingModule } from '../app-routing.module';
import { ApplyLeaveComponent } from './ApplyLeave/ApplyLeave.component';
import { AttendanceComponent } from './Attendance/Attendance.component';
import { RecordAtttendanceComponent } from './Attendance/RecordAtttendance/RecordAtttendance.component';
import { PaymentComponent } from './Payment/Payment.component';
import { PayFeeComponent } from './PayFee/PayFee.component';
import { ReceiptComponent } from './Receipt/Receipt.component';
import { StudentDetailsComponent } from './StudentDetails/StudentDetails.component';


@NgModule({
  imports: [
    CommonModule,BrowserModule,FormsModule,  ReactiveFormsModule,RouterModule,AppRoutingModule
  ],
  declarations: [StudentComponent,MyprofileComponent,EditMyDetailsComponent,ApplyLeaveComponent
  ,AttendanceComponent,RecordAtttendanceComponent,PaymentComponent,PayFeeComponent,ReceiptComponent,StudentDetailsComponent]
})
export class StudentModule { }
