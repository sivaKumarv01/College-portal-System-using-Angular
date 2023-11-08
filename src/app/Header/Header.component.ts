import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/Login.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  showDropdown: boolean = false;
  currentUsername:any;
  user:boolean=false;
  loggedin:boolean=false;
  usertype:any;
  quote=environment.quote;
  public showContent: boolean = true;

  constructor(private loginService:LoginService,private router:Router) {
    this.currentUsername=sessionStorage.getItem('username');
  }
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  logout() {
    this.showDropdown = !this.showDropdown;
    localStorage.clear();
    this.loginService.logout();
    this.router.navigate(['']);
  }
  ngOnInit() {
    this.displayQuote();
  }
  displayQuote()
   {
    setTimeout(() => {
      this.quote = "";
    }, 1 * 60 * 1000);
  }
LoggedIn=sessionStorage.getItem('loggedIn');


}
