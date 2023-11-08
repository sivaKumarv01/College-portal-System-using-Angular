import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './Teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyProfileComponent } from './MyProfile/MyProfile.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { EditDetailsComponent } from './EditDetails/EditDetails.component';
import { TeacherApplyLeaveComponent } from './TeacherApplyLeave/TeacherApplyLeave.component';
import { StudentAttendanceComponent } from './StudentAttendance/StudentAttendance.component';
import { TeacherDetailsComponent } from './TeacherDetails/TeacherDetails.component';


@NgModule({
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,RouterModule,AppRoutingModule
  ],
  declarations: [TeacherComponent,MyProfileComponent,EditDetailsComponent,TeacherApplyLeaveComponent,StudentAttendanceComponent,TeacherDetailsComponent]
})
export class TeacherModule { }
