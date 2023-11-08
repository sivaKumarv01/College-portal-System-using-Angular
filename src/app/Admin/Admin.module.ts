import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './Admin.component';
import { TeacherComponent } from 'src/app/Admin/Teacher/Teacher.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { StudentComponent } from './Student/Student.component';
import { FeeDetailsComponent } from './FeeDetails/FeeDetails.component';
import { TransactionDetailsComponent } from './FeeDetails/TransactionDetails/TransactionDetails.component';
import { StudentModule } from '../Student/Student.module';
import { TeacherModule } from '../Teacher/Teacher.module';
import { ReversePipe } from './reverse.pipe';
import { PasswordRequestComponent } from './PasswordRequest/PasswordRequest.component';
import { TeacherDetailsComponent } from './TeacherDetails/TeacherDetails.component';
import { StudentLeaveDetailsComponent } from './Student/StudentLeaveDetails/StudentLeaveDetails.component';



@NgModule({
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,RouterModule,AppRoutingModule,StudentModule,TeacherModule
  ],
  declarations: [AdminComponent,TeacherComponent,StudentComponent,FeeDetailsComponent,PasswordRequestComponent,TransactionDetailsComponent, ReversePipe,TeacherDetailsComponent
  ,StudentLeaveDetailsComponent],

})
export class AdminModule {

}
