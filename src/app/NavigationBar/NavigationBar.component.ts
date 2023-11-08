import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/Login.service';

@Component({
  selector: 'app-NavigationBar',
  templateUrl: './NavigationBar.component.html',
  styleUrls: ['./NavigationBar.component.css']
})
export class NavigationBarComponent implements OnInit {
  userType:any='';
  constructor(private loginService:LoginService)
  {
    this.userType=sessionStorage.getItem('usertype');
    console.log(this.userType);
  }
  ngOnInit(): void {
    this.userType=sessionStorage.getItem('usertype');
    console.log(this.userType);

  }

}
