import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

constructor(private http:HttpClient) {

 }
 getAttendance(id:any)
 {
   return this.http.get(environment.apiUrl+"/Attendance/"+id);
 }
 getAllAttendance()
 {
   return this.http.get(environment.apiUrl+"/Attendance");
 }
 getTotalDays()
 {
   return this.http.get(environment.apiUrl+"/createAttendance");
 }
 updateAllAttendane(data:any,id:any)
 {
   return this.http.patch(environment.apiUrl+"/Attendance/"+id,data)
 }
 updateAttendance(id:any,data:any)
 {
   return this.http.patch(environment.apiUrl+"/Attendance/"+id,data);
 }
 updateTotalDays(data:any)
 {
   return this.http.patch(environment.apiUrl+"/createAttendance/1",data);
 }
 addAttendance(data:any)
 {
   return this.http.post(environment.apiUrl+"/MarkedAttendance",data);
 }
 getMarkedAttendance()
 {
   return this.http.get(environment.apiUrl+"/MarkedAttendance");
 }

}
