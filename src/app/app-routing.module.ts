import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/Login.component';
import { HomeComponent } from './Home/Home.component';
import { MyprofileComponent } from './Student/Myprofile/Myprofile.component';
import { EditMyDetailsComponent } from './Student/EditMyDetails/EditMyDetails.component';
import { ApplyLeaveComponent } from './Student/ApplyLeave/ApplyLeave.component';
import { AttendanceComponent } from './Student/Attendance/Attendance.component';
import { RecordAtttendanceComponent } from './Student/Attendance/RecordAtttendance/RecordAtttendance.component';
import { ReceiptComponent } from './Student/Receipt/Receipt.component';
import { PayFeeComponent } from './Student/PayFee/PayFee.component';
import { PaymentComponent } from './Student/Payment/Payment.component';
import { ChangePasswordComponent } from './ChangePassword/ChangePassword.component';
import { MyProfileComponent } from './Teacher/MyProfile/MyProfile.component';
import { EditDetailsComponent } from './Teacher/EditDetails/EditDetails.component';
import { TeacherApplyLeaveComponent } from './Teacher/TeacherApplyLeave/TeacherApplyLeave.component';
import { StudentAttendanceComponent } from './Teacher/StudentAttendance/StudentAttendance.component';
import { StudentDetailsComponent } from './Student/StudentDetails/StudentDetails.component';
import { StudentComponent } from './Admin/Student/Student.component';
import { TeacherComponent } from './Admin/Teacher/Teacher.component';
import { FeeDetailsComponent } from './Admin/FeeDetails/FeeDetails.component';
import { PasswordRequestComponent } from './Admin/PasswordRequest/PasswordRequest.component';
import { StudentLeaveDetailsComponent } from './Admin/Student/StudentLeaveDetails/StudentLeaveDetails.component';
import { ReactComponent } from './Course/react/react.component';
import { PythonComponent } from './Course/python/python.component';
import { SqlComponent } from './Course/sql/sql.component';
import { JqueryComponent } from './Course/jquery/jquery.component';
import { DevopsComponent } from './Course/devops/devops.component';
import { JspComponent } from './Course/jsp/jsp.component';
import { JavaComponent } from './Course/java/java.component';
import { JsComponent } from './Course/js/js.component';
import { CsComponent } from './Course/cs/cs.component';
import { CpComponent } from './Course/cp/cp.component';
import { CprogramComponent } from './Course/cprogram/cprogram.component';
import { AngularComponent } from './Course/angular/angular.component';
import { CourseComponent } from './Course/Course.component';

const routes: Routes = [
  {
  path:'login',
  component:LoginComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'Myprofile',
    component:MyprofileComponent,
  },
  {
    path:'Myprofile/Edit',
    component:EditMyDetailsComponent
  },
  {
    path:'myProfile',
    component:MyProfileComponent
  },
  {
    path:'myProfile/Edit',
    component:EditDetailsComponent
  },
  {
    path:'Courses',
    component:CourseComponent
  },
  {
    path:'Courses/c',
    component:CprogramComponent
  },
  {
    path:'Courses/c++',
    component:CpComponent
  },
  {
    path:'Courses/c#',
    component:CsComponent
  },
  {
    path:'Courses/java',
    component:JavaComponent
  },
  {
    path:'Courses/jsp',
    component:JspComponent
  },
  {
    path:'Courses/js',
    component:JsComponent
  },
  {
    path:'Courses/devops',
    component:DevopsComponent
  },
  {
    path:'Courses/jquery',
    component:JqueryComponent,
  },
  {
    path:'Courses/sql',
    component:SqlComponent
  },
  {
    path:'Courses/python',
    component:PythonComponent
  },
  {
    path:'Courses/react',
    component:ReactComponent
  },
  {
    path:'Courses/angular',
    component:AngularComponent
  },
  {
    path:'Applyleave',
    component:ApplyLeaveComponent
  },
  {
    path:'ApplyLeave',
    component:TeacherApplyLeaveComponent
  },
  {
    path:'AttendanceRecord',
    component:AttendanceComponent
  },
  {
    path:'AttendanceRecord/Attendance',
    component:RecordAtttendanceComponent
  },
  {
    path:'receipt',
    component:ReceiptComponent
  },
  {
    path:'payfee',
    component:PayFeeComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },
  {
    path:'studentLeaveDetails',
    component:StudentLeaveDetailsComponent
  },
  {
    path:'password',
    component:PasswordRequestComponent
  },
  {
    path:'ChangePassword',
    component:ChangePasswordComponent
  },
  {
    path:'AttendanceDetails',
    component:StudentAttendanceComponent
  },
  {
    path:'StudentDetails',
    component:StudentDetailsComponent
  },
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'teacher',
    component:TeacherComponent
  },
  {
    path:'Feedetails',
    component:FeeDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
