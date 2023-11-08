import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/Header.component';
import { NavigationBarComponent } from './NavigationBar/NavigationBar.component';
import { LoginComponent } from './Login/Login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { HomeComponent } from './Home/Home.component';
import { StudentModule } from './Student/Student.module';
import { TeacherModule } from './Teacher/Teacher.module';
import { CourseComponent } from './Course/Course.component';
import { EnrollCoursesComponent } from './Course/EnrollCourses/EnrollCourses.component';
import { ChangePasswordComponent } from './ChangePassword/ChangePassword.component';
import { AdminModule } from './Admin/Admin.module';
import { AngularComponent } from './Course/angular/angular.component';
import { JavaComponent } from './Course/java/java.component';
import { CpComponent } from './Course/cp/cp.component';
import { CsComponent } from './Course/cs/cs.component';
import { PythonComponent } from './Course/python/python.component';
import { SqlComponent } from './Course/sql/sql.component';
import { ReactComponent } from './Course/react/react.component';
import { DevopsComponent } from './Course/devops/devops.component';
import { JsComponent } from './Course/js/js.component';
import { JspComponent } from './Course/jsp/jsp.component';
import { JqueryComponent } from './Course/jquery/jquery.component';
import { CprogramComponent } from './Course/cprogram/cprogram.component';
import { LoggerModule,NgxLoggerLevel } from 'ngx-logger';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      NavigationBarComponent,
      LoginComponent,
      HomeComponent,
      CourseComponent,
      EnrollCoursesComponent,
      ChangePasswordComponent,
      AngularComponent,JavaComponent,CpComponent,CsComponent,PythonComponent,SqlComponent,ReactComponent,DevopsComponent,JsComponent,JspComponent,
      JqueryComponent,CprogramComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,
    ReactiveFormsModule,
    StudentModule,TeacherModule,AdminModule,LoggerModule.forRoot({
      level:NgxLoggerLevel.INFO,
      serverLogLevel:NgxLoggerLevel.ERROR,
      serverLoggingUrl:environment.apiUrl+"/logs"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
